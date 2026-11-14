import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/data/site";
import NavBar from "@/components/layout/NavBar";
import printEasterEgg from "@/util/egg";
import AMAWrapper from "@/components/layout/AMAWrapper";
import MusicPlayerWrapper from "@/components/layout/MusicPlayerWrapper";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const title = "Eswar Dudi | Software Engineer";
const description =
  "Eswar Dudi is a software engineer focused on backend and systems: distributed services, runtimes, and backend-focused full-stack development. Explore projects like Glambdar, StreamGuard and Agent Gopher.";
const myName = "Eswar Dudi";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    myName,
    "Eswar Dudi Portfolio",
    "Eswar Dudi Developer",
    "Go Developer",
    "Backend Engineer",
    "Software Engineer",
    "Systems Engineer",
    "Full Stack Developer",
    "AI Integrations",
    "Systems Programming",
  ],
  authors: [{ name: myName }],
  creator: myName,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title,
    description,
    type: "website",
    url: SITE_URL,
    siteName: title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@EswarDudi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="9CtP8tQUXQwpU_i_OitrZ7zr3DYXQlICkJM1I24-yuU"
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${dmSans.variable} font-body antialiased selection:bg-accent selection:text-background`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(${printEasterEgg.toString()})();`,
          }}
        />
        {/* Navbar */}
        <NavBar />

        {/* AMA Floating Chat */}
        <AMAWrapper />

        {/* Background Music Player */}
        <MusicPlayerWrapper />

        {children}
      </body>
    </html>
  );
}
