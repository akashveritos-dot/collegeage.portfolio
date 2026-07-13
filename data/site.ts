import type {
  Project,
  SocialLink,
  Capability,
  NavItem,
} from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for all editable content.
 * ------------------------------------------------------------------
 * Only three facts are confirmed about Rakesh Lal Das:
 *   - Role: Editor
 *   - Known for: Faltu (2022), Flight Attendant (2024), Nazar (2018)
 * Everything marked `// TODO:` below is an editable placeholder — the
 * public UI hides or neutralises anything left empty. Do NOT publish
 * invented awards, employers, quotes, contact details or social URLs.
 */

export const profile = {
  name: "Rakesh Lal Das",
  role: "Editor",
  discipline: "Film & Television Editor",
  // Positioning statement (presentational wording only — no invented facts)
  statement:
    "Shaping stories through rhythm, emotion and precise visual cuts.",
  bioShort:
    "Rakesh Lal Das is a film and television editor known for his editorial work on Faltu (2022), Flight Attendant (2024) and Nazar (2018).",
  bioLong: [
    "I am an editor working across film and television. My credits include Faltu (2022), Flight Attendant (2024) and Nazar (2018) — projects that move between grounded drama and heightened storytelling.",
    "My work is guided by a single question in every scene: what does the audience need to feel next? The answer decides where a shot begins, how long it breathes and the exact frame it lets go.",
  ],
  image: "/images/rakesh-lal-das.png",
  imageAlt: "Portrait of Rakesh Lal Das, film and television editor",
  // Optional — set to a real file in /public when available, else null
  resumeUrl: null as string | null,
  // Optional — shown only when provided
  location: null as string | null, // TODO: e.g. "Mumbai, India"
  availability: "Open to select projects", // TODO: confirm or set to null
  email: null as string | null, // TODO: add verified contact email, e.g. "hello@rakeshlaldas.com"
};

export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Credits", href: "#credits" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    slug: "flight-attendant",
    title: "Flight Attendant",
    year: 2024,
    format: "Series", // TODO: confirm exact format
    role: "Editor",
    tagline: "Tension held at altitude.",
    description:
      "Editorial work on Flight Attendant (2024). Detailed synopsis and scene notes to be added.", // TODO
    cover: null, // TODO: /images/projects/flight-attendant.jpg
    gallery: [], // TODO: add still frames
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Year", value: "2024" },
    ],
    externalUrl: null, // TODO: IMDb / trailer URL
    externalLabel: null,
  },
  {
    slug: "faltu",
    title: "Faltu",
    year: 2022,
    format: "Television", // TODO: confirm exact format
    role: "Editor",
    tagline: "Everyday lives, precisely paced.",
    description:
      "Editorial work on Faltu (2022). Detailed synopsis and scene notes to be added.", // TODO
    cover: null, // TODO: /images/projects/faltu.jpg
    gallery: [],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Year", value: "2022" },
    ],
    externalUrl: null, // TODO
    externalLabel: null,
  },
  {
    slug: "nazar",
    title: "Nazar",
    year: 2018,
    format: "Television", // TODO: confirm exact format
    role: "Editor",
    tagline: "Suspense cut close.",
    description:
      "Editorial work on Nazar (2018). Detailed synopsis and scene notes to be added.", // TODO
    cover: null, // TODO: /images/projects/nazar.jpg
    gallery: [],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Year", value: "2018" },
    ],
    externalUrl: null, // TODO
    externalLabel: null,
  },
];

/**
 * Capabilities — presentational categories describing the craft of
 * editing in general terms. These are NOT claims of specific software
 * expertise or production history. Edit freely.
 */
export const capabilities: Capability[] = [
  {
    title: "Narrative Editing",
    description:
      "Assembling footage into a coherent story that holds attention from first frame to last.",
  },
  {
    title: "Scene Structuring",
    description:
      "Ordering beats within a scene so intention, conflict and release land with clarity.",
  },
  {
    title: "Visual Rhythm",
    description:
      "Controlling the tempo of cuts so pace becomes an emotion the audience can feel.",
  },
  {
    title: "Story Continuity",
    description:
      "Keeping action, eyelines and time consistent so the world never breaks.",
  },
  {
    title: "Emotional Pacing",
    description:
      "Deciding when to linger and when to move — letting moments breathe or cutting them tight.",
  },
  {
    title: "Collaborative Post-Production",
    description:
      "Working alongside directors, sound and colour to bring the final vision together.",
  },
];

export const socials: SocialLink[] = [
  { label: "IMDb", href: null, icon: "film" }, // TODO: verified IMDb URL
  { label: "LinkedIn", href: null, icon: "linkedin" }, // TODO
  { label: "Instagram", href: null, icon: "instagram" }, // TODO
  { label: "YouTube", href: null, icon: "youtube" }, // TODO
  { label: "Vimeo", href: null, icon: "vimeo" }, // TODO
];

export const site = {
  title: "Rakesh Lal Das — Film & Television Editor",
  description:
    "Official portfolio of editor Rakesh Lal Das, known for Faltu, Flight Attendant and Nazar. Explore selected work, credits and professional information.",
  // Used for canonical / OG metadata. Update to the live domain.
  url: "https://rakeshlaldas.com",
};
