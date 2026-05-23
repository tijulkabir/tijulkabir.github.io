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
  metadataBase: new URL('https://tijulkabir.me'),
  title: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
  description:
    "Portfolio of Tijul Kabir Toha (Froster). TryHackMe Top 1% globally, CTF player ranked #35 nationally, builder of NetForge, FSociety Lab, Vault 7, and more. Open to security research and collaboration.",
  keywords: [
    "Tijul Kabir Toha",
    "Froster",
    "cybersecurity portfolio",
    "CTF player Bangladesh",
    "offensive security",
    "TryHackMe top 1 percent",
    "competitive programming",
    "Codeforces",
    "security researcher",
    "PUST CSE",
  ],
  authors: [{ name: "Tijul Kabir Toha", url: "https://tijulkabir.me" }],
  creator: "Tijul Kabir Toha",
  alternates: {
    canonical: 'https://tijulkabir.me',
  },
  openGraph: {
    title: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
    description:
      "TryHackMe Top 1% globally. CTF player, competitive programmer, and builder of open-source security tools.",
    url: 'https://tijulkabir.me',
    siteName: 'Tijul Kabir Toha',
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tijul Kabir Toha — Offensive Security Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tijul Kabir Toha — Offensive Security Researcher",
    description: "TryHackMe Top 1% globally. CTF player & security tool builder.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise">
        {children}
      </body>
    </html>
  );
}
