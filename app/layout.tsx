import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SDVistic Labs – AI, Automation & Web Development",
  description: "We build intelligent systems using AI, automation, and smart web development.",
  keywords: ["AI", "automation", "web development", "chatbots", "CRM", "smart websites", "artificial intelligence"],
  authors: [{ name: "SDVistic Labs" }],
  creator: "SDVistic Labs",
  publisher: "SDVistic Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdvisticlabs.com",
    siteName: "SDVistic Labs",
    title: "SDVistic Labs – AI, Automation & Web Development",
    description: "We build intelligent systems using AI, automation, and smart web development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SDVistic Labs - AI, Automation & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDVistic Labs – AI, Automation & Web Development",
    description: "We build intelligent systems using AI, automation, and smart web development.",
    images: ["/og-image.jpg"],
    creator: "@sdvisticlabs",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon - will be added when uploaded */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sdvisticlabs.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
