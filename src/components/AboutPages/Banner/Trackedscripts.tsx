import type { TrackedScript } from './Consent';

export const trackedScripts: TrackedScript[] = [
  {
    id: 'test-analytics',
    inline: true,
    src: `
      console.log('%cCargo de script', 'color:#c9b97a;font-weight:bold');
    `,
    onLoad: () => {
      (window as any).__analyticsReady = true;
    },
  },

];