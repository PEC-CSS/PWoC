import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiTemplate } from "react-icons/hi";
import { GiSellCard } from "react-icons/gi";
import { AiFillCrown } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";

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
                    <div className="pb-0 py-2 px-2 mx-auto ">
                        <div className="w-full flex justify-between items-center p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
                            {/* Logo */}
                            <div>
                                <span className="px-2 mr-2 md:border-r border-gray-800">
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/54832562?s=200&v=4"
                                        alt="PWoC"
                                        height={100}
                                        width={100}
                                        className="w-8 h-8 -mt-1 inline mx-auto"
                                    />
                                </span>
                            </div>
                            <div className="px-2 md:flex gap-x-5 items-center flex-1 text-gray-900 bg-white font-medium capitalize hidden">
                                {/* Links */}
                                {navLinks?.map(({ title, link, icon }, id) => (
                                    <Link key={id} href={link}>
                                        <p
                                            //   id={id}
                                            className={`px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded ${
                                                router.pathname == link
                                                    ? "text-gray-700 font-semibold"
                                                    : ""
                                            }`}
                                        >
                                            <span className="p-2 bg-gray-200 rounded-full">
                                                {icon}
                                            </span>
                                            <span className="mx-1">
                                                {title}
                                            </span>
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            {/* Hamberger Menu  */}
                            <div className="md:hidden transition-all mr-3 my-3 cursor-pointer hover:text-gray-700">
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
                        className={`pt-0 absolute top-2 z-100 mx-auto ${
                            isMobileNavOpen
                                ? "translate-x-0"
                                : "-translate-x-full"
                        } transition-all flex-wrap md:hidden`}
                    >
                        <div className="py-[.5px] w-64">
                            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-white rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
                                {/* Logo */}
                                <Image
                                    src="https://avatars.githubusercontent.com/u/54832562?s=200&v=4"
                                    alt="PWoC"
                                    className="w-8 h-8 mx-auto mb-5 "
                                    height={50}
                                    width={50}
                                />

                                {/* Links */}
                                {navLinks?.map(({ title, link, icon }, id) => (
                                    <Link key={id} href={link}>
                                        <p
                                            //   id={id}
                                            className={`px-2 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded ${
                                                router.pathname == link
                                                    ? "text-gray-700 font-semibold"
                                                    : ""
                                            }`}
                                        >
                                            <span className="p-2 bg-gray-200 rounded-full">
                                                {icon}
                                            </span>
                                            <span className="mx-1">
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
