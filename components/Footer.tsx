import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Snowflake } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glassmorphism bg-[rgba(32,38,87,0.89)] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold mb-2">
              Winter of Code
            </Link>
            <p className="text-sm text-white/80">Embrace the season of coding</p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/about" className="hover:text-white/80 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-white/80 transition-colors">
              Projects
            </Link>
            <Link href="/leaderboard" className="hover:text-white/80 transition-colors">
              Leaderboard
            </Link>
            <Link href="/faqs" className="hover:text-white/80 transition-colors">
              FAQs
            </Link>
          </nav>

          {/* Social media and contact */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
            <Link href="mailto:contact@winterofcode.com" className="text-sm hover:text-white/80 transition-colors">
              contact@winterofcode.com
            </Link>
          </div>
        </div>

        {/* Copyright and winter element */}
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">© {currentYear} Winter of Code. All rights reserved.</p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Snowflake size={48} className="text-white/60" />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


