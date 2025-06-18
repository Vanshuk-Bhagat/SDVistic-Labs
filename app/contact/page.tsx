"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, X, MessageCircle } from "lucide-react"
import Link from "next/link"

// Background Animation Components (same as homepage)
const FloatingOrb = ({ delay = 0, duration = 20, size = "w-32 h-32", className = "" }) => (
  <motion.div
    className={`absolute ${size} rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl ${className}`}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -100, 50, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

const GridPattern = () => (
  <motion.div
    className="absolute inset-0 opacity-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.05 }}
    transition={{ duration: 2 }}
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </motion.div>
)

const ParticleField = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0">
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      animate={{
        background: [
          "linear-gradient(45deg, #0f172a, #1e293b, #0f172a)",
          "linear-gradient(90deg, #0f172a, #1e293b, #334155, #1e293b, #0f172a)",
          "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
    <GridPattern />
    <ParticleField />

    {/* Floating Orbs */}
    <FloatingOrb delay={0} duration={25} size="w-64 h-64" />
    <FloatingOrb delay={5} duration={30} size="w-48 h-48" />
    <FloatingOrb delay={10} duration={20} size="w-32 h-32" />
    <FloatingOrb delay={15} duration={35} size="w-96 h-96" />

    {/* Additional animated elements */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400/50 rounded-full"
      animate={{
        scale: [1, 2, 1],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-400/40 rounded-full"
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 2,
      }}
    />
  </div>
)

// Chat Widget Component
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
          whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 30px rgba(147, 51, 234, 0.4)",
              "0 0 20px rgba(59, 130, 246, 0.3)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.div>
        </motion.button>

        {/* Floating label */}
        <motion.div
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg border border-slate-700 whitespace-nowrap"
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? 10 : 0,
            scale: isOpen ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: "none" }}
        >
          <span className="text-sm font-medium">💬 Chat with our AI Agent</span>
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl z-40 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-64 overflow-y-auto">
              <motion.div
                className="bg-slate-700 p-3 rounded-lg mb-3 max-w-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-sm text-slate-200">
                  👋 Hi! I'm the SDVistic Labs AI assistant.
                  <br />
                  I'm currently under development. Sorry for the inconvenience!
                </p>
              </motion.div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden relative">
      <AnimatedBackground />

      {/* All content with relative z-index */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                SDVistic Labs
              </Link>
              <Link href="/" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </motion.header>

        {/* Contact Form Section */}
        <section className="pt-32 pb-20 px-4 bg-slate-800/50 relative overflow-hidden">
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-10 left-10 w-4 h-4 border border-blue-400/30 rotate-45"
            animate={{
              y: [0, -20, 0],
              rotate: [45, 225, 45],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-6 h-6 border border-purple-400/30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-400/40 rounded-full"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 10, 0],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let's Work Together
              </motion.h1>
              <motion.div
                className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="mb-2">Have a project in mind or need help with automation, AI, or your website?</p>
                <p>We'd love to hear from you — fill out the form and we'll get in touch.</p>
              </motion.div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                      placeholder="Your full name"
                      whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-slate-400"
                    placeholder="Tell us about your project..."
                    whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                  ></motion.textarea>
                </motion.div>
                <motion.div
                  className="text-center pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-slate-400 mb-4">Or reach out directly:</p>
              <motion.a
                href="mailto:contact@sdvisticlabs.com"
                className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                contact@sdvisticlabs.com
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Chat Widget */}
        <ChatWidget />
      </div>
    </div>
  )
}
