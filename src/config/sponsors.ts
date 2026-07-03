/**
 * Sponsor list rendered by `src/components/Sponsors.astro` in the strip right
 * below the site nav. Sponsors can optionally include a logo from `public/`.
 */

import type { Lang } from '../i18n/ui';

export interface Sponsor {
  id: string;
  name: string;
  /** Outbound (referral) link; the whole banner row links here. */
  url: string;
  /** Optional path under `public/`, e.g. `/sponsors/foo.png`. */
  logo?: string;
  /** Intrinsic logo size, used to reserve space and avoid layout shift. */
  logoWidth?: number;
  logoHeight?: number;
  /** Bold lead-in shown before the tagline. */
  headline: Record<Lang, string>;
  /** One-line pitch per language. */
  tagline: Record<Lang, string>;
  /** Per-sponsor CTA button label. */
  cta: Record<Lang, string>;
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'kevin-lab',
    name: 'Kevin Lab',
    url: 'https://kevintao1024.com/',
    headline: {
      zh: 'Kevin Lab',
      en: 'Kevin Lab',
    },
    tagline: {
      zh: 'A community dedicated to helping 1000 people turn ideas into business.',
      en: 'A community dedicated to helping 1000 people turn ideas into business.',
    },
    cta: {
      zh: 'Join us',
      en: 'Join us',
    },
  },
  {
    id: 'ai-build',
    name: 'AI Build',
    url: 'https://aibuild.dev/',
    headline: {
      zh: 'AI Build',
      en: 'AI Build',
    },
    tagline: {
      zh: 'Your One-Stop AI Learning and Building Platform.',
      en: 'Your One-Stop AI Learning and Building Platform.',
    },
    cta: {
      zh: 'Try it now',
      en: 'Try it now',
    },
  },
];
