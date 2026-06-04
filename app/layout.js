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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tijulkabir.me/#website",
      url: "https://tijulkabir.me",
      name: "Tijul Kabir Toha — Portfolio",
      description:
        "Portfolio of Tijul Kabir Toha (Froster). Offensive security researcher, CTF player, and competitive programmer.",
      publisher: { "@id": "https://tijulkabir.me/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://tijulkabir.me/#person",
      name: "Tijul Kabir Toha",
      alternateName: "Froster",
      url: "https://tijulkabir.me",
      image: "https://tijulkabir.me/og-image.png",
      jobTitle: "Offensive Security Researcher",
      description:
        "TryHackMe Top 1% globally, CTF player ranked #35 nationally in Bangladesh, competitive programmer, and builder of open-source security tools including NetForge, FSociety Lab, and Vault 7.",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Pabna University of Science & Technology",
        department: "Computer Science & Engineering",
      },
      knowsAbout: [
        "Penetration Testing",
        "Capture The Flag",
        "Reverse Engineering",
        "Competitive Programming",
        "Systems Programming",
        "Network Security",
        "Cryptography",
        "Web Application Security",
      ],
      sameAs: [
        "https://github.com/tijulkabir",
        "https://linkedin.com/in/tijulkabir1",
        "https://youtube.com/@bytefroster",
        "https://tryhackme.com/p/tijulkabir",
        "https://codeforces.com/profile/tijulkabir1",
        "https://www.codechef.com/users/tijulkabir",
      ],
      nationality: {
        "@type": "Country",
        name: "Bangladesh",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://tijulkabir.me/#profilepage",
      url: "https://tijulkabir.me",
      name: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
      mainEntity: { "@id": "https://tijulkabir.me/#person" },
      dateCreated: "2025-01-01",
      dateModified: "2026-06-04",
      inLanguage: "en-US",
    },
  ],
};

export const metadata = {
  metadataBase: new URL("https://tijulkabir.me"),
  title: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
  description:
    "Portfolio of Tijul Kabir Toha (Froster). TryHackMe Top 1% globally, CTF player ranked #35 nationally, builder of NetForge, FSociety Lab, Vault 7, and more. Open to security research and collaboration.",
  applicationName: "Tijul Kabir Toha — Portfolio",
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
    "NetForge",
    "penetration testing",
    "Bangladesh hacker",
  ],
  authors: [{ name: "Tijul Kabir Toha", url: "https://tijulkabir.me" }],
  creator: "Tijul Kabir Toha",
  publisher: "Tijul Kabir Toha",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "https://tijulkabir.me",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
    description:
      "TryHackMe Top 1% globally. CTF player, competitive programmer, and builder of open-source security tools.",
    url: "https://tijulkabir.me",
    siteName: "Tijul Kabir Toha",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tijulkabir.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tijul Kabir Toha — Offensive Security Researcher",
    description:
      "TryHackMe Top 1% globally. CTF player & security tool builder.",
    images: [
      {
        url: "https://tijulkabir.me/og-image.png",
        alt: "Tijul Kabir Toha — Offensive Security Researcher & CTF Player",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
