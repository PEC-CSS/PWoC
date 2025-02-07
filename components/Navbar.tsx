"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Snowflake, Code, BookOpen, Users, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Code", icon: Code },
  { name: "Docs", icon: BookOpen },
  { name: "Community", icon: Users },
  { name: "Chat", icon: MessageCircle },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0B1120]/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Snowflake className="h-8 w-8 text-blue-400" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                WinterCode
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.name.toLowerCase() === "home" ? "/" : `/${item.name.toLowerCase()}`}
                className="text-blue-100 hover:bg-blue-500/10 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}

            </div>
          </div>
        </div>
      </div>
      <SnowAnimation />
    </motion.nav>
  )
}

function SnowAnimation() {
  return (
    <div className="snow-container absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="snow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: "100vh" }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  )
}

