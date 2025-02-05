// import Image from 'next/image';
// import Link from 'next/link';
// import logo from './../public/assets/logo/pwoc_logo.png';
// import pwoc_text_logo from './../public/assets/logo/pwoc_text.png';
// import {
// 	SiDiscord,
// 	SiFacebook,
// 	SiInstagram,
// 	SiGithub,
// 	SiTwitter,
// } from 'react-icons/si';
// import { IconContext } from 'react-icons/lib';

// export const Footer = () => {
// 	return (
// 		<div className='glassmorphism border-0 bg-[rgba(20,0,6,0.7)] mt-[10px] grid grid-cols-1 md:grid-cols-3 md:px-7 px-2 md:pt-5 sm:pt-2 pb-1 space-y-4 md:space-y-0'>
// 			<div className='flex flex-col'>
// 				<div className='flex justify-center md:justify-start space-x-2 h-[60px]'>
// 					<div
// 						className={`text-2xl md:text-[1.1rem] lg:text-2xl uppercase flex flex-col justify-center`}
// 					>
// 						Join us on discord
// 					</div>
// 					<IconContext.Provider
// 						value={{
// 							className:
// 								'bg-[#6370f4] md:bg-[#2f3136] hover:bg-[#6370f4] text-[40px] p-2 rounded-full',
// 						}}
// 					>
// 						<Link
// 							href='https://discord.gg/YcrXVhaBCZ'
// 							target='_blank'
// 							className='flex flex-col justify-center'
// 							aria-label='Join us on discord'
// 						>
// 							<SiDiscord />
// 						</Link>
// 					</IconContext.Provider>
// 				</div>

// 				<div className='flex flex-col justify-center'>
// 					<div>
// 						<Image
// 							src={pwoc_text_logo}
// 							alt='text logo'
// 							// className='w-[150px] h-[46px] md:h-[62.6px] md:w-[200px] mx-auto md:mx-0'
// 							className='w-[150px] h-auto md:w-[200px] mx-auto md:mx-0'
// 							height={135}
// 							width={435}
// 						/>
// 					</div>
// 					<div className='text-center md:text-left'>
// 						An initiative by PEC ACM CSS & GDSC PEC
// 					</div>
// 					<div className='flex space-x-4 justify-center w-full md:justify-start'>
// 						<Image src={"https://avatars.githubusercontent.com/u/54832562?s=200&v=4"} height={50} width={50} alt={'PECACM'} className='rounded-full' />
// 						<Image src={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/GDSC%20Punjab%20Engineering%20College%2C%20Chandigarh%20vertical%20color%20%281%29.png"} height={50} width={50} alt={'PECACM'} className='rounded-full'/>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='flex justify-center align-middle'>
// 				<div className='flex flex-col justify-evenly items-center margin-auto'>
// 					<Link
// 						href='/'
// 						className='md:hover:text-sky-500 tex md:mb-2 md:mt-0 mb-2 mt-1 transition text-md font-extralight hover:font-semibold'
// 					>
// 						Home
// 					</Link>
// 					<Link
// 						href='leaderboard'
// 						className='md:hover:text-sky-500 tex md:mt-0 my-3 transition text-md font-extralight hover:font-semibold'
// 					>
// 						Leaderboard
// 					</Link>
// 					<Link
// 						href='/projects'
// 						className='md:hover:text-sky-500 tex md:mt-0 my-3 transition text-md font-extralight hover:font-semibold'
// 					>
// 						Projects
// 					</Link>
// 					<Link
// 						href='/graveyard'
// 						className='md:hover:text-sky-500 tex md:mt-0 my-3 transition text-md font-extralight hover:font-semibold'
// 					>
// 						Graveyard
// 					</Link>
// 					<Link
// 						href='/faq'
// 						className='md:hover:text-sky-500 tex md:mt-0 my-3 transition text-md font-extralight hover:font-semibold'
// 					>
// 						FAQ
// 					</Link>
// 				</div>
// 			</div>

// 			<div className='flex flex-col justify-around'>
// 				<Image
// 					src={logo}
// 					alt='pwoc logo'
// 					// width={150}
// 					// height={150}
// 					className='self-center hidden sm:block md:mb-[15px] w-[150px] h-auto'
// 					width={295}
// 					height={290}
// 				/>
// 				<div className='flex justify-center'>
// 					{/* Facebook, Github, Insta and Twitter */}
// 					<IconContext.Provider
// 						value={{
// 							className:
// 								'text-[38px] md:text-[30px] mx-[8px] md:mx-[6px] text-[#fe009b] md:text-white md:hover:text-[#fe009b] md:hover:translate-y-[-4px] ease-out duration-300',
// 						}}
// 					>
// 						<Link
// 							href='https://www.instagram.com/pecacm/'
// 							target='_blank'
// 							aria-label='Instagram'
// 						>
// 							<SiInstagram />
// 						</Link>
// 					</IconContext.Provider>

// 					<IconContext.Provider
// 						value={{
// 							className:
// 								'text-[38px] md:text-[30px] md:text-white text-[#fe0b9bbbd09b] md:text-white md:hover:text-[#b9bbbd] mx-[8px] md:mx-[6px] md:hover:translate-y-[-4px] ease-out duration-300',
// 						}}
// 					>
// 						<Link
// 							href='https://github.com/PEC-CSS'
// 							target='_blank'
// 							aria-label='Github'
// 						>
// 							<SiGithub />
// 						</Link>
// 					</IconContext.Provider>

// 					<IconContext.Provider
// 						value={{
// 							className:
// 								'text-[38px] md:text-[30px] text-[#1977f3] md:text-white md:hover:text-[#1977f3] md:text-white md:hover:text-[#1977f3] mx-[8px] md:mx-[6px] md:hover:translate-y-[-4px] ease-out duration-300',
// 						}}
// 					>
// 						<Link
// 							href='https://www.facebook.com/pecacm/'
// 							target='_blank'
// 							aria-label='Facebook'
// 						>
// 							<SiFacebook />
// 						</Link>
// 					</IconContext.Provider>

// 					<IconContext.Provider
// 						value={{
// 							className:
// 								'text-[38px] md:text-[30px] text-[#1c9cf1] md:text-white md:hover:text-[#1c9cf1] mx-[8px] md:mx-[6px] md:hover:translate-y-[-4px] ease-out duration-300',
// 						}}
// 					>
// 						<Link
// 							href='https://www.twitter.com/pec_acm'
// 							target='_blank'
// 							aria-label='Twitter'
// 						>
// 							<SiTwitter />
// 						</Link>
// 					</IconContext.Provider>
// 				</div>
// 			</div>

// 			<div className='text-center md:mt-[30px] sm:mt-[5px] md:col-span-3'>
// 				Copyright © 2023 PEC ACM CSS. All Rights Reserved
// 			</div>
// 		</div>
// 	);
// };


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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <a href="mailto:contact@winterofcode.com" className="text-sm hover:text-white/80 transition-colors">
              contact@winterofcode.com
            </a>
          </div>
        </div>

        {/* Copyright and winter element */}
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">© {currentYear} Winter of Code. All rights reserved.</p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Snowflake size={24} className="text-white/60" />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


