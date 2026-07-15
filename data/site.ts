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
    slug: "jagadhatri",
    title: "Jagadhatri",
    year: 2025,
    format: "TV Series",
    role: "Editor",
    tagline: "Unraveling mystery frame by frame.",
    description:
      "Editorial work for Jagadhatri, crafting high-stakes suspense, subtle drama transitions, and rhythmic scene cuts for this ongoing series.",
    cover: "/images/projects/jagadhatri.png",
    gallery: ["/images/projects/jagadhatri.png"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "51 episodes" },
      { label: "Year", value: "2025" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "6.9",
    episodes: "51 episodes",
  },
  {
    slug: "saru",
    title: "Saru",
    year: 2025,
    format: "TV Series",
    role: "Editor",
    tagline: "Dramatic storytelling with emotional resonance.",
    description:
      "Lead editorial rhythm for Saru, balancing dramatic tension, character arcs, and high-volume episode assembly.",
    cover: "/images/projects/saru.png",
    gallery: ["/images/projects/saru.png"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "230 episodes" },
      { label: "Year", value: "2025" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "6.0",
    episodes: "230 episodes",
  },
  {
    slug: "imlie",
    title: "Imlie",
    year: 2024,
    format: "TV Series",
    role: "Editor",
    tagline: "A multi-year saga of family, sacrifice, and resilience.",
    description:
      "Key editorial contributor to Imlie across 1,126 episodes from 2020 to 2024, shaping one of Indian television's longest-running prime-time dramas.",
    cover: "/images/projects/imlie.png",
    gallery: ["/images/projects/imlie.png"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "1126 episodes" },
      { label: "Years", value: "2020–2024" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "3.6",
    episodes: "1126 episodes",
  },
  {
    slug: "flight-attendant",
    title: "Flight Attendant",
    year: 2024,
    format: "TV Series",
    role: "Editor",
    tagline: "Tension held at altitude.",
    description:
      "Crafted precise suspense and rhythmic pacing across episodes of the dark comedy-thriller series Flight Attendant, keeping viewers on the edge of their seats.",
    cover: "/images/projects/flight-attendant.jpg",
    gallery: [
      "/images/flight-attendant-still.jpg",
      "/images/projects/flight-attendant.jpg",
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "6 episodes" },
      { label: "Year", value: "2024" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "5.5",
    episodes: "6 episodes",
  },
  {
    slug: "baalveer-4",
    title: "Baalveer 4",
    year: 2024,
    format: "TV Series",
    role: "Editor",
    tagline: "High-octane action & magical visual timing.",
    description:
      "Editorial cut for Baalveer 4, synchronizing visual effects timing, fantasy action sequences, and dynamic sound cues.",
    cover: "/images/projects/baalveer-4.png",
    gallery: ["/images/projects/baalveer-4.png"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "1 episode" },
      { label: "Year", value: "2024" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "6.7",
    episodes: "1 episode",
  },
  {
    slug: "dear-ishq",
    title: "Dear Ishq",
    year: 2023,
    format: "TV Series",
    role: "Editor",
    tagline: "Modern romance and sharp emotional beats.",
    description:
      "Edited episodes of Dear Ishq, weaving intimate relationship drama, rapid dialogue pacing, and stylish urban scene transitions.",
    cover: "/images/projects/dear-ishq.jpg",
    gallery: [
      "/images/projects/dear-ishq.jpg",
      "/images/projects/dear-ishq.png",
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "58 episodes" },
      { label: "Year", value: "2023" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "5.9",
    episodes: "58 episodes",
  },
  {
    slug: "faltu",
    title: "Faltu",
    year: 2023,
    format: "TV Series",
    role: "Editor",
    tagline: "Everyday lives, precisely paced.",
    description:
      "Editorial lead for Faltu (2022–2023), shaping dramatic flow, pacing, and emotional high-points across 269 episodes.",
    cover: "/images/projects/faltu.jpg",
    gallery: [
      "/images/faltu-still.jpg",
      "/images/projects/faltu.jpg",
      "/images/rakesh-lal-das.png",
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "269 episodes" },
      { label: "Years", value: "2022–2023" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "4.3",
    episodes: "269 episodes",
  },
  {
    slug: "i-am-not-down",
    title: "I Am Not Down",
    year: 2023,
    format: "Short Film",
    role: "Editor",
    tagline: "Overcoming odds in raw narrative detail.",
    description:
      "Edited the compelling short film I Am Not Down, focusing on raw performance cuts, atmospheric silence, and emotional weight.",
    cover: "/images/projects/i-am-not-down.jpg",
    gallery: ["/images/projects/i-am-not-down.jpg"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "Short Film" },
      { label: "Year", value: "2023" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
  },
  {
    slug: "baalveer-3",
    title: "Baalveer 3",
    year: 2023,
    format: "TV Series",
    role: "Editor",
    tagline: "Heroic fantasy and dynamic action cuts.",
    description:
      "Edited fantasy adventure episodes for Baalveer 3, structuring visual effects sequences and fast-paced superhero narrative beats.",
    cover: "/images/projects/baalveer-3.jpg",
    gallery: ["/images/projects/baalveer-3.jpg"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "28 episodes" },
      { label: "Year", value: "2023" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "5.4",
    episodes: "28 episodes",
  },
  {
    slug: "ishk-par-zor-nahin",
    title: "Ishk Par Zor Nahin",
    year: 2021,
    format: "TV Series",
    role: "Editor",
    tagline: "High chemistry, intense emotional rhythm.",
    description:
      "Edited 113 episodes of Ishk Par Zor Nahin (2021), delivering sharp comedic timing alongside passionate romantic climaxes.",
    cover: "/images/projects/ishk-par-zor-nahin.jpg",
    gallery: ["/images/projects/ishk-par-zor-nahin.jpg"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "113 episodes" },
      { label: "Year", value: "2021" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "8.0",
    episodes: "113 episodes",
  },
  {
    slug: "namak-issk-ka",
    title: "Namak Issk Ka",
    year: 2021,
    format: "TV Series",
    role: "Editor",
    tagline: "Dance, passion, and societal collision.",
    description:
      "Lead editor for 53 episodes of Namak Issk Ka (2020–2021), synchronizing high-energy dance numbers and dramatic confrontations.",
    cover: "/images/projects/namak-issk-ka.jpg",
    gallery: ["/images/projects/namak-issk-ka.jpg"],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "53 episodes" },
      { label: "Years", value: "2020–2021" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "7.8",
    episodes: "53 episodes",
  },
  {
    slug: "nazar",
    title: "Nazar",
    year: 2020,
    format: "TV Series",
    role: "Editor",
    tagline: "Suspense cut close.",
    description:
      "Edited 409 episodes of Nazar (2018–2020), weaving supernatural elements, fast-paced action sequences, and high-tension cliffhangers.",
    cover: "/images/projects/nazar.jpg",
    gallery: [
      "/images/nazar-still.jpg",
      "/images/projects/nazar.jpg",
    ],
    credits: [
      { label: "Role", value: "Editor" },
      { label: "Format", value: "TV Series" },
      { label: "Episodes", value: "409 episodes" },
      { label: "Years", value: "2018–2020" },
    ],
    externalUrl: "https://www.imdb.com/name/nm12607916/",
    externalLabel: "IMDb Profile",
    rating: "4.8",
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
  { label: "IMDb", href: "https://www.imdb.com/name/nm12607916/", icon: "film" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
];

export const site = {
  title: "Rakesh Lal Das — Film & Television Editor",
  description:
    "Official portfolio of editor Rakesh Lal Das, known for Faltu, Flight Attendant and Nazar. Explore selected work, credits and professional information.",
  // Used for canonical / OG metadata. Update to the live domain.
  url: "https://rakeshlaldas.com",
};
