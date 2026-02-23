export type ConsentStatus = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'cookie_consent';
const SESSION_SHOWN_KEY = 'cookie_banner_shown';

export function getConsent(): ConsentStatus {
  if (typeof localStorage === 'undefined') return null;
  return (localStorage.getItem(STORAGE_KEY) as ConsentStatus) ?? null;
}

export function setConsent(status: 'accepted' | 'rejected'): void {
  localStorage.setItem(STORAGE_KEY, status);

  if (status === 'accepted') {
    sessionStorage.removeItem(SESSION_SHOWN_KEY);
  } else {
    sessionStorage.setItem(SESSION_SHOWN_KEY, 'true');
  }

  window.dispatchEvent(new CustomEvent('consentChange', { detail: { status } }));
}

export function clearConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_SHOWN_KEY);
}

export function shouldShowBanner(): boolean {
  const consent = getConsent();
  if (consent === 'accepted') return false;
  if (consent === 'rejected') {
    return !sessionStorage.getItem(SESSION_SHOWN_KEY);
  }
  return true;
}


export interface TrackedScript {
  id: string;
  src: string;
  inline?: boolean;
  async?: boolean;
  defer?: boolean;
  attributes?: Record<string, string>;
  onLoad?: () => void;
}

const loadedScripts = new Set<string>();

function injectScript(script: TrackedScript): void {
  if (loadedScripts.has(script.id)) return;

  const el = document.createElement('script');

  if (script.inline) {
    el.textContent = script.src;
  } else {
    el.src = script.src;
    if (script.async !== false) el.async = true;
    if (script.defer) el.defer = true;
  }

  if (script.attributes) {
    Object.entries(script.attributes).forEach(([k, v]) => el.setAttribute(k, v));
  }

  el.id = `tracked-script-${script.id}`;
  document.head.appendChild(el);
  loadedScripts.add(script.id);
  script.onLoad?.();
}


export function loadConsentedScripts(scripts: TrackedScript[]): void {
  if (getConsent() !== 'accepted') return;
  scripts.forEach(injectScript);
}

export function onConsentAccepted(
  scripts: TrackedScript[],
  callback?: () => void
): () => void {
  const handler = (e: Event) => {
    const { status } = (e as CustomEvent<{ status: ConsentStatus }>).detail;
    if (status === 'accepted') {
      scripts.forEach(injectScript);
      callback?.();
    }
  };
  window.addEventListener('consentChange', handler);
  return () => window.removeEventListener('consentChange', handler);
}