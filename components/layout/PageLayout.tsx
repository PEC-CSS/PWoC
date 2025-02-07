import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/button";
import Snowfall from "react-snowfall";
import Footer from "../Footer";

function PageLayout({ title = "PWOC | PEC Winter of Code", children, description }: any) {
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
            <nav className="relative px-6 py-4 bg-black/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <Image 
                            src="/assets/logo/pwoc_text.png" 
                            alt="Winter of Code" 
                            width={150} 
                            height={40} 
                            className="cursor-pointer"
                        />
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

            {/* Main Content with Flex Grow */}
            <div className="flex-grow">{children}</div>

            {/* Footer Sticking to Bottom */}
            <Footer />
        </div>
    );
}

export default PageLayout;
