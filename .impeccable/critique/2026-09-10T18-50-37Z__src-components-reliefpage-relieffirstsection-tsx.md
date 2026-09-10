---
target: the hero of the Relief page
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\UlisesReyes\\Documents\\TRIASOMX\\TriasoMX\\src\\components\\ReliefPage\\ReliefFirstSection.tsx"
target_fingerprint: "sha256:7ff82df4b0d67ee061714687995cb25093c424e8b12510938f647870922990db"
target_path: "C:\\Users\\UlisesReyes\\Documents\\TRIASOMX\\TriasoMX\\src\\components\\ReliefPage\\ReliefFirstSection.tsx"
timestamp: 2026-09-10T18-50-37Z
slug: src-components-reliefpage-relieffirstsection-tsx
---
# Critique — Relief hero (ReliefFirstSection.tsx)

Method: single-context (DEGRADED — sub-agents harness-gated, no browser automation).
Detector: impeccable detect -> clean ([]). Mode: Persuade.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover feedback on CTAs; no focus-visible ring |
| 2 | Match System / Real World | 3 | "Relief" and "modulos" unexplained above the fold |
| 3 | User Control and Freedom | 3 | Non-destructive CTAs, anchor jump |
| 4 | Consistency and Standards | 2 | Two co-equal solid CTAs; oversized kicker; hero tone off vs rest of page |
| 5 | Error Prevention | n/a | No input in hero |
| 6 | Recognition Rather Than Recall | 3 | Labeled, visible; "modulos" needs prior model |
| 7 | Flexibility and Efficiency | n/a | Persuade surface |
| 8 | Aesthetic and Minimalist Design | 2 | h1/paragraph restate each other; decorative divider; dead dark wrapper |
| 9 | Help Recover from Errors | n/a | No error states |
| 10 | Help and Documentation | n/a | Persuade surface |
| Total | | 16/24 | Acceptable (67%) |

n/a heuristics: 5, 7, 9, 10. Applicable max: 24.

## Design Specificity Verdict
Category-interchangeable. Default B2B SaaS hero (kicker -> headline -> accent rule -> paragraph -> two pills -> floating device mock). No connection to "real-time control system for an asphalt plant." Rest of Relief page commits to a tech-industrial world (CountUp, magnetic, pointer glow, custom easings in reliefMotion.tsx); the hero uses none of it. Detector: 0 findings — problems are compositional/strategic, not CSS.

## What's Working
1. Performance/stability fundamentals: webp + intrinsic width/height (no CLS) + fetchPriority + decoding=async.
2. Genuinely descriptive alt text.
3. Motion discipline: useGsapReveal bails on reduced-motion and <1024px, leaves content visible.

## Priority Issues

[P1] Two co-equal solid CTAs — no primary. redBg vs blueMain, identical mass. "Ver los modulos" is a same-page anchor = secondary. Fix: only "Solicitar demostracion" stays solid; make the other a ghost/text link. -> /impeccable layout

[P1] Headline and paragraph say the same thing. h1 = capability list, near-verbatim the meta description; paragraph repeats "control + supervision". Fix: h1 carries the outcome, paragraph carries the how; surface one proof number (+10,000 recetas, monitoreo 24/7). -> /impeccable clarify

[P1] Product mockup is a 240px thumbnail on mobile (max-w-[240px] / sm:300px) and renders below the full text column. In-app detail is unreadable; it's the strongest persuasion asset on the most common device. Fix: enlarge (viewport bleed), move above paragraph on mobile, predictable width-driven sizing. -> /impeccable adapt

[P2] Hero doesn't belong to its own page's design world. No rlf-* styling, no CountUp, no magnetic CTAs, no pointer glow, no parallax. The red/#393939-25 split rule is the most generic element. Fix: bring 1-2 established motion primitives into the hero; replace divider with a product-grounded motif or cut it. -> /impeccable bolder

[P2] Dead wrapper + clip risk. div bg-[#111111] text-white wraps an opaque min-h-screen bg-bgMain section (never renders; leftover from old dark hero). lg:max-h-screen + overflow-hidden clips text-7xl h1 + divider + paragraph + CTA row on ~700px laptops. Fix: drop the dark classes; replace max-h-screen/overflow-hidden with natural flow. -> /impeccable polish

[P2] Paragraph fails WCAG AA contrast. text-grisP #727272 on #f4f5f6 ~= 4.4:1, under 4.5:1 for normal text (base 16px mobile). Fix: grisPPP (#5d5d5d) or grisPP (#343434), or darken --gris-textos. -> /impeccable audit

## Persona Red Flags
Jordan (first-timer): h1 never says it's software or where it runs; "Ver los modulos" assumes known modularity.
Casey (mobile/on-site): primary CTA deep below headline+divider+paragraph; full-width stacked buttons with hover:scale nudge layout on tap; mockup tiny and last; marginal contrast in daylight.
Riley (stress tester): 1280x720 -> max-h-screen + overflow-hidden + pt-24/pb-24 + text-6xl h1 likely clips CTAs with no scroll to reach; longer localized headline blows the height budget.

## Minor Observations
- Divider stacks flex gap-5 AND its own mt-2 mb-2 md:mt-4 md:mb-4 — compounding space, muddy rhythm; uniform gap = no visual grouping.
- Kicker text-base..md:text-xl font-bold is loud for an eyebrow; plain text-sm font-semibold text-blueMain per project convention.
- Buttons rely on hover: only; add focus-visible ring.
- lg:max-w-none on img with no upper bound — desktop size at mercy of source file width.
- hover:scale-[1.03] not gated by prefers-reduced-motion.

## Questions to Consider
- What would the confident version look like — a live-feeling dashboard instead of a capability list?
- Does the hero need one number that matters? Meta has them; hero doesn't.
- If you deleted either the h1 or the paragraph, which carries the pitch?
- Should the mockup be the hero on mobile — full-bleed, first — with text as caption?
