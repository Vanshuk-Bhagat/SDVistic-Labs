import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us – SDVistic Labs",
  description:
    "Get in touch with SDVistic Labs for your AI, automation, and web development projects. Free consultation available.",
  openGraph: {
    title: "Contact Us – SDVistic Labs",
    description:
      "Get in touch with SDVistic Labs for your AI, automation, and web development projects. Free consultation available.",
    url: "https://sdvisticlabs.com/contact",
  },
  twitter: {
    title: "Contact Us – SDVistic Labs",
    description:
      "Get in touch with SDVistic Labs for your AI, automation, and web development projects. Free consultation available.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
