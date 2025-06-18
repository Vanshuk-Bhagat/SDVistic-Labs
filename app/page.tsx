"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Mail, ChevronRight, MessageCircle } from "lucide-react"
import Link from "next/link"

// Background Animation Components
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

// Laptop Component
const LaptopGraphic = () => (
  <motion.div
    className="relative w-full max-w-md mx-auto mt-8 md:mt-0"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <motion.div
      className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-xl border border-slate-700 p-2"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="h-4 bg-slate-700 flex items-center px-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-4 h-48 overflow-hidden">
          <motion.div
            className="text-xs text-blue-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
              &gt; Initializing SDVistic Labs AI...
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.8 }}>
              &gt; Loading smart automation modules...
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 }}>
              &gt; Optimizing website performance...
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }}>
              &gt; AI assistant ready for deployment!
            </motion.div>
            <motion.div
              className="mt-2 text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.6 }}
            >
              &gt; System status: ONLINE
            </motion.div>
            <motion.div
              className="mt-4 h-3 w-16 bg-blue-500/50 rounded"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, delay: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
    <motion.div
      className="h-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-b-lg mx-4"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
    <motion.div
      className="h-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-b-lg mx-8"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-slate-700 rounded-full"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
  </motion.div>
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

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const services = [
    {
      icon: "💻",
      title: "Smart Website Development",
      subtitle: "Custom websites that connect and convert",
      description: "Modern sites built with React, Next.js, or WordPress — mobile-friendly and CRM-ready.",
    },
    {
      icon: "🤖",
      title: "AI Agent & Chatbot Integration",
      subtitle: "Let AI handle questions & leads 24/7",
      description: "ChatGPT-based bots that capture leads, answer FAQs, and sync with your tools.",
    },
    {
      icon: "🛒",
      title: "E-Commerce + AI Assistant",
      subtitle: "Smart online stores that sell more",
      description: "Online stores with AI support for product queries, orders, and customer service.",
    },
    {
      icon: "⚙️",
      title: "Custom Automation & AI Solutions",
      subtitle: "Connect everything. Automate anything.",
      description: "Automate tasks using AI — we build custom workflows adapted to your tools.",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden relative">
      <AnimatedBackground />
      {/* All existing content with relative z-index */}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                SDVistic Labs
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:flex space-x-8"
              >
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="mt-4 pb-4 border-t border-slate-800 pt-4">
                    <div className="flex flex-col space-y-4">
                      {[
                        { name: "Home", href: "#home" },
                        { name: "Services", href: "/services" },
                        { name: "Contact", href: "#contact" },
                      ].map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="hover:text-blue-400 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section id="home" ref={heroRef} className="pt-32 pb-20 px-4 relative overflow-hidden">
          <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
              animate={{
                scale: [1, 0.8, 1.2, 1],
                x: [0, -40, 20, 0],
                y: [0, 40, -20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>

          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="text-center md:text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
                >
                  Smarter Code. Seamless Automation.
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                >
                  Helping small and mid-size businesses grow with websites, AI agents, and workflow automation.
                </motion.p>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Book Free Consultation
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Laptop Graphic */}
              <LaptopGraphic />
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-400 rounded-full"
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-slate-800/50 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Transforming Ideas Into Digital Reality
                </motion.h2>
                <motion.p
                  className="text-lg text-slate-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  At SDVistic Labs, we specialize in creating cutting-edge digital solutions that propel your business
                  forward. Our team combines technical expertise with creative innovation to deliver results that exceed
                  expectations.
                </motion.p>
                <motion.p
                  className="text-lg text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  From responsive websites to intelligent automation systems, we're your partners in digital
                  transformation. Let's build something extraordinary together.
                </motion.p>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href="/services">
                    <motion.span
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Explore our services <ChevronRight className="ml-1 w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 border border-slate-700 overflow-hidden"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    style={{ borderRadius: "12px" }}
                    poster="/videos/homepage-video-poster.jpg"
                  >
                    <source src="/videos/homepage-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 relative overflow-hidden">
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

          <div className="container mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="text-xl text-slate-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Comprehensive digital solutions tailored to your business needs
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                >
                  <motion.div
                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-blue-400/80 text-sm mb-3 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {service.subtitle}
                  </motion.p>
                  <motion.p
                    className="text-slate-300 leading-relaxed mb-6 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                  <Link href="/services">
                    <motion.div
                      className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer mt-auto"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Our pricing</span>
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Book Your Free Consultation
              </motion.h2>
              <motion.p
                className="text-xl text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ready to transform your business? Let's discuss your project.
              </motion.p>
            </motion.div>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                  whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                ></motion.textarea>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          className="bg-slate-900 py-12 px-4 border-t border-slate-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="md:col-span-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  SDVistic Labs
                </div>
                <p className="text-slate-400 mb-4">
                  Transforming businesses through innovative digital solutions and intelligent automation.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "Services", href: "/services" },
                    { name: "Contact", href: "#contact" },
                  ].map((item, index) => (
                    <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <a href={item.href} className="hover:text-blue-400 transition-colors">
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-slate-400">
                  <motion.li className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Mail className="w-4 h-4 mr-2" />
                    contact@sdvisticlabs.com
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div
              className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2024 SDVistic Labs. All rights reserved.</p>
            </motion.div>
          </div>
        </motion.footer>

        {/* Chat Widget */}
        <ChatWidget />
      </div>{" "}
      {/* Close relative z-10 div */}
    </div>
  )
}
