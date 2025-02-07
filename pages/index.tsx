import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Button } from "../components/button";
import { Snowfall } from "../components/snowfall";
import About from "../components/AboutUs";
import Timeline from "../components/Timeline";
import Registration from "../components/index/RegistrationCard";
import Sponsor from "../components/index/Sponsor";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kk-JZXd8o1yBq7C2qdNzLUsFUILC2ipsI.webp"
          alt="Winter landscape with lighthouse"
          layout="fill"
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Snow Effect */}
      <Snowfall />

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="text-[#274495] text-2xl font-bold cursor-pointer">
              Winter of Code
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Leaderboard", "Projects", "Graveyard", "Faq"].map((item) => (
              <Link key={item} href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}>
                <span className="text-[#274495] text-[1.1rem] font-semibold hover:text-white transition-colors cursor-pointer">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 pt-20 pb-32 bg-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#274495] text-5xl md:text-7xl font-bold mb-6"
          >
            Embrace the Season of <span className="block mt-2">Coding</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#274495] font-bold text-xl md:text-2xl max-w-3xl mx-auto mb-12"
          >
            Join our winter coding challenge and build amazing projects while learning from the best mentors in the
            industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-white text-[#274495] hover:bg-white/90 hover:bg-[#0B4F6C] hover:text-white px-8">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#274495] hover:bg-[#0B4F6C] hover:text-white px-8"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        <About />
        <Registration />
        <Timeline />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
