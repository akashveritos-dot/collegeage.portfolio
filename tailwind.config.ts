import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // 60% base — warm ivory
        ivory: {
          DEFAULT: "#F3EEE3",
          soft: "#EAE3D4",
          deep: "#DED5C2",
        },
        // 30% secondary — muted film black / graphite
        graphite: {
          DEFAULT: "#16130F",
          soft: "#221E18",
          muted: "#3A342B",
        },
        // 10% accent — film-reel red
        reel: {
          DEFAULT: "#C63A24",
          soft: "#D9573F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      maxWidth: {
        shell: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
