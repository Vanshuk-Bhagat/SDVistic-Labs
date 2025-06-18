import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SDVistic Labs – AI, Automation & Web Development",
  description: "We turn ideas into intelligent systems using AI, automation, and smart web development.",
  keywords: [
    "AI",
    "automation",
    "web development",
    "chatbots",
    "CRM",
    "smart websites",
    "artificial intelligence",
    "business automation",
  ],
  authors: [{ name: "SDVistic Labs" }],
  creator: "SDVistic Labs",
  publisher: "SDVistic Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdvisticlabs.com",
    siteName: "SDVistic Labs",
    title: "SDVistic Labs",
    description: "AI & Automation solutions to streamline your business",
    images: [
      {
        url: "https://sdvisticlabs.com/favicon.ico",
        width: 32,
        height: 32,
        alt: "SDVistic Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "SDVistic Labs",
    description: "AI & Automation solutions to streamline your business",
    images: ["https://sdvisticlabs.com/favicon.ico"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

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
