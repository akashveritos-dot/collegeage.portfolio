export type Project = {
  /** URL slug, e.g. "faltu" */
  slug: string;
  title: string;
  year: number;
  /** Film / Television / Web Series etc. */
  format: string;
  /** Editorial role — placeholder-safe */
  role: string;
  /** Short one-line tagline */
  tagline: string;
  /** Longer description paragraph */
  description: string;
  /** Local cover image path, or null → styled placeholder is shown */
  cover: string | null;
  /** Gallery of local image paths (may be empty) */
  gallery: string[];
  /** Credits list — label/value pairs */
  credits: { label: string; value: string }[];
  /** Optional external link (trailer / IMDb). null hides the control */
  externalUrl: string | null;
  externalLabel: string | null;
  /** Optional IMDb rating */
  rating?: string;
  /** Optional episode count */
  episodes?: string;
};

export type SocialLink = {
  label: string;
  href: string | null; // null → placeholder, link hidden in UI
  icon: string; // lucide icon name key handled in component
};

export type Capability = {
  title: string;
  description: string;
};

export type NavItem = { label: string; href: string };
