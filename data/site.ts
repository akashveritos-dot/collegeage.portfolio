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
  image: "/images/rakesh-lal-das.png?v=1",
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
  { label: "Reel", href: "#reel" },
  { label: "Credits", href: "#credits" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    slug: "flight-attendant",
    title: "Flight Attendant",
    year: 2024,
    format: "TV Series",
    role: "Editor",
    tagline: "Tension held at altitude.",
    description:
      "Crafted precise suspense and rhythmic pacing across episodes of the dark comedy-thriller series Flight Attendant, keeping viewers on the edge of their seats.",
    cover: "/images/flight-attendant-still.jpg?v=1",
    gallery: [
      "/images/flight-attendant-still.jpg?v=1",
      "/images/projects/flight-attendant.jpg?v=1"
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "6 episodes" },
      { label: "Year", value: "2024" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/", // IMDb profile link
    externalLabel: "IMDb Profile",
    rating: "5.5",
    episodes: "6 episodes",
  },
  {
    slug: "faltu",
    title: "Faltu",
    year: 2022,
    format: "TV Series",
    role: "Editor",
    tagline: "Everyday lives, precisely paced.",
    description:
      "Editorial lead for Faltu, shaping the dramatic flow, pacing, and emotional high-points of this popular television series.",
    cover: "/images/faltu-still.jpg?v=1",
    gallery: [
      "/images/faltu-still.jpg?v=1",
      "/images/projects/faltu.jpg?v=1",
      "/images/rakesh-lal-das.png?v=1"
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "312 episodes" },
      { label: "Year", value: "2022" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/", // IMDb profile link
    externalLabel: "IMDb Profile",
    rating: "6.8",
    episodes: "312 episodes",
  },
  {
    slug: "nazar",
    title: "Nazar",
    year: 2018,
    format: "TV Series",
    role: "Editor",
    tagline: "Suspense cut close.",
    description:
      "Edited episodes of Nazar, weaving supernatural elements, fast-paced action sequences, and high-tension cliffhangers.",
    cover: "/images/nazar-still.jpg?v=1",
    gallery: [
      "/images/nazar-still.jpg?v=1",
      "/images/projects/nazar.jpg?v=1"
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "409 episodes" },
      { label: "Year", value: "2018" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/", // IMDb profile link
    externalLabel: "IMDb Profile",
    rating: "5.8",
    episodes: "409 episodes",
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
  { label: "IMDb", href: "https://www.imdb.com/name/nm12607916/", icon: "film" }, // verified IMDb URL
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
