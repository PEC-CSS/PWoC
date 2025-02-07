import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa"; // Import Discord icon from react-icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glassmorphism bg-[rgba(32,38,87,0.89)] text-white mt-auto py-4">
      <div className="container mx-auto px-6 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image 
              src="/assets/logo/pwoc_logo.png" 
              alt="PWOC Logo" 
              width={150} 
              height={150} 
            />
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col items-center space-y-2 text-gray-300 text-sm">
            <Link href="/" className="hover:text-white transition-all">Home</Link>
            <Link href="/projects" className="hover:text-white transition-all">Projects</Link>
            <Link href="/leaderboard" className="hover:text-white transition-all">Leaderboard</Link>
            <Link href="/graveyard" className="hover:text-white transition-all">Graveyard</Link>
            <Link href="/faq" className="hover:text-white transition-all">FAQs</Link>
          </nav>

          {/* Social media */}
          <div className="flex justify-center md:justify-end space-x-4">
            {[
              { href: "https://discord.com/invite/XzE88EDYSC", Icon: FaDiscord },
              { href: "https://github.com/PEC-CSS", Icon: Github },
              { href: "https://www.linkedin.com/company/pec-acm-student-chapter", Icon: Linkedin },
            ].map(({ href, Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-0 pt-2 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-400">© {currentYear} PEC Winter of Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
