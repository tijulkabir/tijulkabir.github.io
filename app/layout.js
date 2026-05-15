import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tijul Kabir Toha | Offensive Security Researcher & Developer",
  description:
    "Portfolio of Tijul Kabir Toha — Offensive Security Researcher, Competitive Programmer, and Software Developer. TryHackMe National Rank #66, CTF Player, and builder of secure systems.",
  keywords: [
    "Tijul Kabir Toha",
    "Froster",
    "cybersecurity",
    "CTF",
    "competitive programming",
    "portfolio",
    "offensive security",
    "TryHackMe",
    "Codeforces",
  ],
  authors: [{ name: "Tijul Kabir Toha" }],
  openGraph: {
    title: "Tijul Kabir Toha | Offensive Security Researcher",
    description:
      "Offensive Security Researcher | Competitive Programmer | Software Developer",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scanlines noise">
        {children}
      </body>
    </html>
  );
}
