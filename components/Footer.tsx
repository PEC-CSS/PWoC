import Image from "next/image";
import Link from "next/link";
import logo from "./../public/assets/logo/pwoc_logo.png";
import pwoc_text_logo from "./../public/assets/logo/pwoc_text.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiDiscord, SiFacebook, SiInstagram, SiGithub, SiTwitter } from 'react-icons/si';
import { IconContext } from "react-icons/lib";

export const Footer = () => {
    return (
        <div className="bg-[#140006] grid grid-cols-1 md:grid-cols-3 md:px-7 px-2 md:pt-5 sm:pt-2 pb-1 space-y-4 md:space-y-0">
            <div className="grid grid-cols-1">
                <div className="flex justify-center md:justify-start space-x-2">
                    <div className={`text-2xl md:text-[1.3rem] lg:text-2xl uppercase`}>Join us on discord</div>
                    <IconContext.Provider value={{ className: "hover:text-[#6370f4] text-[30px]" }}>
                        <Link href="/faq">
                            <SiDiscord />
                        </Link>
                    </IconContext.Provider>

                </div>

                <div className="flex flex-col justify-center">
                    <div>
                        <Image src={pwoc_text_logo} alt="text logo" className="w-[150px] h-[46px] md:h-[62.6px] md:w-[200px] mx-auto md:mx-0" />
                    </div>
                    <div className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusamus.</div>
                </div>
            </div>

            <div className="flex justify-center align-middle">
                <div className="flex flex-col margin-auto">
                    <Link href="/" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 transition text-md font-extralight hover:font-semibold">Home</Link>
                    <Link href="leaderboard" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-md font-extralight hover:font-semibold">Leaderboard</Link>
                    <Link href="/projects" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-md font-extralight hover:font-semibold">Projects</Link>
                    <Link href="/sponsers" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-md font-extralight hover:font-semibold">Sponsers</Link>
                    <Link href="/faq" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-md font-extralight hover:font-semibold">FAQ</Link>
                </div>
            </div>

            <div className="flex flex-col justify-around">
                <Image src={logo} alt="pwoc logo" width={150} height={150} className="self-center hidden sm:block" />
                <div className="flex justify-center">

                    <IconContext.Provider value={{ size: '30px', className: "hover:text-[#1977f3] mx-[6px]" }}>
                        <Link href="/faq">
                            <SiFacebook />
                        </Link>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '30px', className: "hover:text-[#b9bbbd] mx-[6px]" }}>
                        <Link href="/faq">
                            <SiGithub />
                        </Link>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '30px', className: "mx-[6px] hover:text-[#af3688]" }}>
                        <Link href="/faq">
                            <SiInstagram />
                        </Link>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '30px', className: "hover:text-[#1c9cf1] mx-[6px]" }}>
                        <Link href="/faq">
                            <SiTwitter />
                        </Link>
                    </IconContext.Provider>
                </div>
            </div>

            <div className="text-center md:mt-[30px] sm:mt-[5px] md:col-span-3">
                Copyright maybe
            </div>
        </div>
    )
}