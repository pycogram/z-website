import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalEffects } from "@/components/effects/GlobalEffects";
import { SplashLayout } from "@/components/SplashLayout";
import "./globals.css";

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "ZeroicAI - Agent-Oriented Programming in Rust",
    template: "%s | ZeroicAI",
  },
  description:
    "Build intelligent, autonomous multi-agent systems with ZeroicAI. A comprehensive Rust framework featuring BDI cognitive architecture, FIPA-compliant messaging, swarm intelligence, and production-ready deployment for blockchain, trading, IoT, and enterprise automation.",

  // Keywords for SEO
  keywords: [
    "Rust",
    "multi-agent systems",
    "agent-oriented programming",
    "AOP",
    "autonomous agents",
    "BDI architecture",
    "swarm intelligence",
    "blockchain agents",
    "DeFi automation",
    "algorithmic trading",
    "IoT agents",
    "robotics",
    "FIPA ACL",
    "agent framework",
    "cognitive agents",
    "distributed systems",
    "fault tolerance",
    "agent coordination",
    "agents",
  ],

  // Author and Creator
  authors: [{ name: "ZeroicAI Contributors" }],
  creator: "ZeroicAI Team",
  publisher: "ZeroicAI",
  metadataBase: new URL("https://www.zeroicai.xyz/"),

  // Open Graph (for social media sharing including Telegram)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zeroicai.xyz/",
    siteName: "ZeroicAI",
    title: "ZeroicAI - Agent-Oriented Programming in Rust",
    description:
      "Build intelligent, autonomous multi-agent systems with Rust. Production-ready framework for blockchain, trading, IoT, and enterprise automation.",
    images: [
      {
        url: "/assets/ag-logo.png",
        width: 1200,
        height: 630,
        alt: "ZeroicAI - Multi-Agent Systems Framework",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ZeroicAI - Agent-Oriented Programming in Rust",
    description:
      "Build intelligent, autonomous multi-agent systems with Rust. Production-ready framework for blockchain, trading, IoT, and enterprise.",
    images: ["https://www.zeroicai.xyz/assets/twitter-card.png"],
    creator: "@zeroicai",
    site: "@zeroicai",
  },

  // Favicon and Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/ag-logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/assets/ag-logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical removed - will be set per page as needed
  category: "technology",
  classification: "Software Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google-specific meta tags */}
        <meta name="google-site-verification" content="1syAefYvq2BcaVmSLHptF6h9o3cARASFf4lQ4mo-ts8" />
        <meta name="application-name" content="ZeroicAI" />
        <meta name="theme-color" content="#000000" />
        
        {/* Telegram-specific tag (not covered by Next.js metadata export) */}
        <meta property="telegram:channel" content="@zeroicai" />
        
        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ZeroicAI",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Cross-platform",
              "description": "Build intelligent, autonomous multi-agent systems with ZeroicAI. A comprehensive Rust framework featuring BDI cognitive architecture, FIPA-compliant messaging, swarm intelligence, and production-ready deployment for blockchain, trading, IoT, and enterprise automation.",
              "url": "https://www.zeroicai.xyz/",
              "author": {
                "@type": "Organization",
                "name": "ZeroicAI Team"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "programmingLanguage": "Rust",
              "keywords": "Rust, multi-agent systems, agent-oriented programming, autonomous agents, BDI architecture, swarm intelligence, blockchain agents",
              "image": "https://www.zeroicai.xyz/assets/ag-logo.png",
              "screenshot": "https://www.zeroicai.xyz/assets/ag-logo.png"
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZeroicAI",
              "url": "https://www.zeroicai.xyz/",
              "logo": "https://www.zeroicai.xyz/assets/ag-logo.png",
              "description": "Open-source Rust framework for building intelligent multi-agent systems",
              "sameAs": [
                "https://x.com/ZeroicAI",
                "https://github.com/zeroicai"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="zeroicai-theme">
          <GlobalEffects />
          <SplashLayout>{children}</SplashLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
