import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/button";
import Snowfall from "react-snowfall";
import Footer from "../Footer";
import { useState } from "react";
import { Menu, X, Home, Trophy, FolderOpen, Skull, HelpCircle } from "lucide-react";

function PageLayout({ title = "PWOC | PEC Winter of Code", children, description }: any) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navItems = [
      { name: "Home", href: "/", icon: <Home size={20} /> },
      { name: "Leaderboard", href: "/leaderboard", icon: <Trophy size={20} /> },
      { name: "Projects", href: "/projects", icon: <FolderOpen size={20} /> },
      { name: "Graveyard", href: "/graveyard", icon: <Skull size={20} /> },
      { name: "FAQ", href: "/faq", icon: <HelpCircle size={20} /> },
    ];

    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kk-JZXd8o1yBq7C2qdNzLUsFUILC2ipsI.webp"
                    alt="Winter landscape with lighthouse"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black/15"></div>
            </div>

            {/* Snow Effect */}
            <Snowfall />

            {/* Navigation */}
            <nav className="relative z-10 px-6 py-4 bg-black/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/assets/logo/pwoc_text.png"
                alt="Winter of Code"
                width={150}
                height={40}
                className="cursor-pointer"
              />
            </Link>

            {/* Hamburger Menu Button for Mobile */}
            <button
              className="block md:hidden text-white"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ name, href, icon }) => (
                <Link key={name} href={href} className="flex items-center space-x-2">
                  <span className="text-[#274495] text-[1.1rem] font-semibold hover:text-white transition-colors cursor-pointer flex items-center">
                    {icon} <span className="ml-2">{name}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black/20 rounded-lg p-4 space-y-4 ">
              {navItems.map(({ name, href, icon }) => (
                <Link key={name} href={href} onClick={() => setIsMenuOpen(false)}>
                  <span className="flex items-center space-x-2 text-[#fbfbfb] text-[1.1rem] font-semibold hover:text-white transition-colors cursor-pointer justify-center text-center">
                    {icon} <span className="ml-2">{name}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </nav>

            {/* Main Content with Flex Grow */}
            <div className="flex-grow">{children}</div>

            {/* Footer Sticking to Bottom */}
            <Footer />
        </div>
    );
}

export default PageLayout;
