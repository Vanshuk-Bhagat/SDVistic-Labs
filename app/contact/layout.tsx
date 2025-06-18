import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us – SDVistic Labs",
  description:
    "Get in touch with SDVistic Labs for your AI, automation, and web development projects. Free consultation available.",
  openGraph: {
    title: "Contact Us – SDVistic Labs",
    description: "AI & Automation solutions to streamline your business",
    url: "https://sdvisticlabs.com/contact",
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
    title: "Contact Us – SDVistic Labs",
    description: "AI & Automation solutions to streamline your business",
    images: ["https://sdvisticlabs.com/favicon.ico"],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
