import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services – SDVistic Labs",
  description:
    "Explore our AI, automation, and web development services. From smart websites to AI chatbots and workflow automation solutions.",
  openGraph: {
    title: "Our Services – SDVistic Labs",
    description: "AI & Automation solutions to streamline your business",
    url: "https://sdvisticlabs.com/services",
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
    title: "Our Services – SDVistic Labs",
    description: "AI & Automation solutions to streamline your business",
    images: ["https://sdvisticlabs.com/favicon.ico"],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
