import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, profile } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#16130f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Rakesh Lal Das",
  },
  description: site.description,
  applicationName: "Rakesh Lal Das — Portfolio",
  authors: [{ name: profile.name }],
  keywords: [
    "Rakesh Lal Das",
    "film editor",
    "television editor",
    "Faltu",
    "Flight Attendant",
    "Nazar",
    "video editing",
    "post-production",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: profile.name,
    images: [{ url: profile.image, width: 960, height: 1280, alt: profile.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [profile.image],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.discipline,
  description: profile.bioShort,
  image: `${site.url}${profile.image}`,
  url: site.url,
  knowsAbout: ["Film Editing", "Television Editing", "Post-Production"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var handleChunkError = function(e) {
                  var msg = e && (e.message || (e.reason && e.reason.message) || '');
                  if (msg && (msg.indexOf('ChunkLoadError') !== -1 || msg.indexOf('Loading chunk') !== -1)) {
                    console.warn('Chunk load error detected. Reloading page...');
                    window.location.reload(true);
                  }
                };
                window.addEventListener('error', handleChunkError, true);
                window.addEventListener('unhandledrejection', handleChunkError);
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-graphite focus:px-5 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-label focus:text-ivory"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <div className="relative w-full overflow-x-hidden">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
