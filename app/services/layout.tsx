import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services – SDVistic Labs",
  description:
    "Explore our AI, automation, and web development services. From smart websites to AI chatbots and workflow automation.",
  openGraph: {
    title: "Our Services – SDVistic Labs",
    description:
      "Explore our AI, automation, and web development services. From smart websites to AI chatbots and workflow automation.",
    url: "https://sdvisticlabs.com/services",
  },
  twitter: {
    title: "Our Services – SDVistic Labs",
    description:
      "Explore our AI, automation, and web development services. From smart websites to AI chatbots and workflow automation.",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
