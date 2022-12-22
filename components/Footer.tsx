import Image from "next/image";
import Link from "next/link";
import logo from "./../public/assets/logo/pwoc_logo.png";

export const Footer = () => {
    return (
        <div className="bg-gray-700 grid grid-cols-3 p-3 items-stretch">
            <div className="grid grid-cols-1">
                <div className="flex">
                    <div>JOIN US ON DISCORD</div>
                    <div>dc logo</div>
                </div>

                <div className="flex flex-col">
                    <div>PWOC alpha img</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex align-middle flex-col">
                    <Link href="/">Home</Link>
                    <Link href="leaderboard">Leaderboard</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/sponsers">Sponsers</Link>
                    <Link href="/faq">FAQ</Link>
                </div>
            </div>

            <div className="flex align-middle flex-col">
                <div>
                    <Image src={logo} alt="pwoc logo" width={150} height={150} />
                </div>
                <div>social media links</div>
            </div>

            <div className="text-center md:mt-4 sm:mt-1 col-span-3">
                Copyright maybe
            </div>
        </div>
    )
}