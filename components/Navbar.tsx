import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { TbHome2, TbLayoutDashboard } from "react-icons/tb";
import { HiTemplate } from "react-icons/hi";
import { GiSellCard } from "react-icons/gi";
import { AiFillCrown } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import pwoc_text from "../public/assets/logo/pwoc_text.png"

export const Navbar = () => {
    const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
    const router = useRouter();

    const handleClick = () => {
        setisMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <div>
            <div className="flex flex-wrap ">
                <div className="w-full ">
                    <div className="pb-0 py-2 px-2 mx-auto">
                        <div className="glassmorphism bg-[#161a1dff] w-full flex justify-between items-center p-2 text-gray-900 rounded-lg shadow-lg font-medium capitalize">
                            {/* Logo */}
                            <Link href="/">
                                <span className="px-2 mr-2 md:border-r border-gray-800">
                                    <Image
                                        src={pwoc_text}
                                        alt="PWoC"
                                        height={100}
                                        width={400}
                                        className="w-[9rem] h-12 -mt-1 inline mx-auto"
                                    />
                                </span>
                            </Link>
                            <div className="px-2 md:flex gap-x-5 items-center flex-1 text-gray-900 font-medium capitalize hidden justify-end">
                                {/* Links */}
                                {navLinks?.map(({ title, link, icon }, id) => (
                                    <Link key={id} href={link}>
                                        <p
                                            //   id={id}
                                            className={`px-2 py-1 flex items-center cursor-pointer text-white hover:bg-gray-100 hover:text-[#2d363c] text-sm rounded ${router.pathname == link
                                                ? "underline underline-offset-4 decoration-2 text-[#2d363c] bg-gray-100"
                                                : ""
                                                }`}
                                        >
                                            <span className="p-2 bg-black rounded-full text-white">
                                                {icon}
                                            </span>
                                            <span className="mx-1 text-semibold">
                                                {title}
                                            </span>
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            {/* Hamburger Menu  */}
                            <div className="md:hidden transition-all mr-3 my-3 cursor-pointer text-white hover:text-gray-700">
                                {isMobileNavOpen ? (
                                    <AiOutlineMenuFold
                                        onClick={() => handleClick()}
                                        className="rounded text-2xl"
                                    />
                                ) : (
                                    <AiOutlineMenuUnfold
                                        onClick={() => handleClick()}
                                        className="rounded text-2xl"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Navbar */}
                    <div
                        id="navbar"
                        className={`pt-0 fixed z-[100] top-2 mx-auto ${isMobileNavOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                            } transition-all flex-wrap md:hidden`}
                    >
                        <div className="py-[.5px] w-64">
                            <div className="w-full py-4 space-y-6 px-2 text-gray-900 glassmorphism bg-[rgba(0,0,0,0.7)] rounded-lg min-h-screen text-left capitalize font-medium shadow-lg">
                                {/* Logo */}
                                <Link href="/">
                                    <div className="px-2 grid place-items-center md:border-r border-gray-800">
                                        <Image
                                            src={pwoc_text}
                                            alt="PWoC"
                                            height={100}
                                            width={300}
                                            className="w-[9rem] h-12 -mt-1 inline mx-auto"
                                        />
                                    </div>
                                </Link>

                                {/* Links */}
                                {navLinks?.map(({ title, link, icon }, id) => (
                                    <Link key={id} href={link}>
                                        <p
                                            //   id={id}
                                            className={`p-2 my-2 flex items-center cursor-pointer text-white text-sm rounded z-100 ${router.pathname == link
                                                ? "underline underline-offset-4 decoration-2 text-[#2d363c] bg-gray-100"
                                                : ""
                                                }`}
                                        >
                                            <span className="p-2 bg-black text-white rounded-full">
                                                {icon}
                                            </span>
                                            <span className="mx-1 text-semibold">
                                                {title}
                                            </span>
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const navLinks = [
    {
        title: "Home",
        link: "/",
        icon: <TbHome2 />,
    },
    {
        title: "Leaderboard",
        link: "/leaderboard",
        icon: <TbLayoutDashboard />,
    },
    {
        title: "Projects",
        link: "/projects",
        icon: <HiTemplate />,
    },
    {
        title: "Sponsors",
        link: "/sponsors",
        icon: <AiFillCrown />,
    },
    {
        title: "FAQ's",
        link: "/faq",
        icon: <GiSellCard />,
    },
];
