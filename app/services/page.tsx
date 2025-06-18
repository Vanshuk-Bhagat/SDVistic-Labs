"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, X, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
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

// Service data
const servicesData = [
  {
    id: 1,
    icon: "💻",
    title: "Smart Website Development",
    subtitle: "Custom websites that connect and convert",
    description:
      "Modern, mobile-friendly sites built with React, Next.js, or WordPress. We create responsive websites that not only look stunning but also drive conversions with integrated CRM forms, smooth animations, and optimized performance.",
    pricing: [
      { tier: "Lite Portfolio Site", price: "$149", description: "2-page site (Home + About)" },
      { tier: "Pro Business Site", price: "$249", description: "3–4 pages with contact form" },
      { tier: "Smart Site + CRM", price: "$399", description: "5 pages + Airtable CRM + automation" },
      { tier: "E-Commerce Store (Basic)", price: "$399", description: "WordPress store setup (10 products)" },
      { tier: "Pro Store + AI Chatbot", price: "$599", description: "Store + AI chatbot + CRM sync" },
    ],
  },
  {
    id: 2,
    icon: "🤖",
    title: "AI Agent & Chatbot Integration",
    subtitle: "Let AI handle questions & leads 24/7",
    description:
      "AI-powered chatbots using ChatGPT technology to answer customer queries, capture leads, provide instant support, and seamlessly integrate with your CRM systems or Slack workspace for automated follow-ups.",
    pricing: [
      { tier: "Basic AI Website Bot", price: "$199", description: "ChatGPT bot for FAQs and leads" },
      { tier: "AI Bot + CRM Sync", price: "$399", description: "Sends leads to Airtable + alerts" },
      { tier: "E-Com Product Assistant", price: "$499", description: "AI bot for orders & FAQs" },
      { tier: "Full AI Agent System", price: "$999+", description: "Chatbot + CRM + follow-ups" },
    ],
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Workflow Automation & CRM",
    subtitle: "Turn repetitive tasks into smart flows",
    description:
      "Streamline your business operations with custom Airtable CRM setups, automated lead handling, smart reminders, and powerful backend automation using n8n and Python to connect all your tools seamlessly.",
    pricing: [
      { tier: "Mini CRM Setup", price: "$199", description: "Airtable CRM with tags and views" },
      { tier: "Lead Automation Starter", price: "$349", description: "Form → CRM → Alert" },
      { tier: "CRM + Follow-Up Bot", price: "$499", description: "Smart follow-ups via n8n" },
      { tier: "Pro Automation Suite", price: "$699+", description: "CRM + dashboards + flows" },
    ],
  },
  {
    id: 4,
    icon: "🧠",
    title: "Custom Automation & AI Solutions",
    subtitle: "Connect everything. Automate anything.",
    description:
      "Tailored automation solutions that integrate your existing tools with cutting-edge AI technology. From custom dashboards to intelligent workflow bots, we adapt to your specific tech stack and business requirements.",
    pricing: [
      { tier: "Hourly Consultation", price: "$25/hr", description: "Starting rate for custom projects" },
      { tier: "Project-Based Quote", price: "Custom", description: "Quoted per scope and complexity" },
    ],
  },
]

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

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const expandVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

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

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our core offerings — click a card to see more details.
            </motion.p>
          </div>
        </section>

        {/* Services Cards Grid */}
        <section className="pb-12 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
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
                        className="text-blue-400/80 text-sm font-medium mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {service.subtitle}
                      </motion.p>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => toggleService(service.id)}
                    className="w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 border border-blue-500/30 hover:border-blue-400/50 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {expandedService === service.id ? (
                      <>
                        Hide Details <ChevronUp className="ml-2 w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expanded Service Details */}
        <AnimatePresence mode="wait">
          {expandedService && (
            <motion.section
              key={expandedService}
              variants={expandVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pb-20 px-4 overflow-hidden"
            >
              <div className="container mx-auto max-w-6xl">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
                  {servicesData
                    .filter((service) => service.id === expandedService)
                    .map((service) => (
                      <div key={service.id}>
                        {/* Service Header */}
                        <div className="flex items-start gap-6 mb-8">
                          <div className="text-5xl">{service.icon}</div>
                          <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                              {service.title}
                            </h2>
                            <p className="text-blue-400/80 text-xl font-medium mb-4">{service.subtitle}</p>
                            <p className="text-slate-300 text-lg leading-relaxed">{service.description}</p>
                          </div>
                        </div>

                        {/* Pricing Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Pricing Options:</h3>
                            <div className="space-y-4">
                              {service.pricing.map((price, priceIndex) => (
                                <motion.div
                                  key={priceIndex}
                                  className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-blue-500/30 transition-colors"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: priceIndex * 0.1 }}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-white">{price.tier}</h4>
                                    <span className="text-blue-400 font-bold text-lg">{price.price}</span>
                                  </div>
                                  <p className="text-slate-400 text-sm">{price.description}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Section */}
                          <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                            <p className="text-slate-300 mb-6 max-w-sm">
                              Let's discuss your project and find the perfect solution for your needs.
                            </p>
                            <Link href="/#contact">
                              <motion.button
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center"
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Book Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h2
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss your project and find the perfect solution for your needs.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/#contact">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Chat Widget */}
        <ChatWidget />
      </div>
    </div>
  )
}
