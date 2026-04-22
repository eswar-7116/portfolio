import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
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

const title = "Eswar Dudi | Software Developer";
const description =
  "Eswar Dudi is a software developer specializing in full stack development, backend systems, and AI integrations. Explore projects like Guntainer, NexusChat, and SynapseLearn.";
const myName = "Eswar Dudi";
const url = "https://eswardudi.vercel.app";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    myName,
    "Eswar Dudi Portfolio",
    "Eswar Dudi Developer",
    "Go Developer",
    "Backend Engineer",
    "AI Integrations",
    "Systems Programming",
  ],
  authors: [{ name: myName }],
  creator: myName,
  icons: "/favicon.ico",
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    type: "website",
    url,
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
