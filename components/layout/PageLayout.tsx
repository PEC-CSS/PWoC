import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/button";
import Snowfall from "react-snowfall";
import Footer from "../Footer";

function PageLayout({ title = "PWOC | PEC winter of code", children, description }: any) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image with Black Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="fixed w-full h-full">
                    <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kk-JZXd8o1yBq7C2qdNzLUsFUILC2ipsI.webp"
                        alt="Winter landscape with lighthouse"
                        layout="fill"
                        objectFit="cover" // Ensures the image covers the entire screen
                    />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black/15"></div>
                </div>
            </div>

            {/* Snow Effect */}
            <Snowfall />

            {/* Navigation */}
            <nav className="relative z-30 px-6 py-4 bg-black/5">
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

            {/* Main Content */}
            <div className="relative z-20">{children}
                <Footer />
            </div>
        </div>
    );
}

export default PageLayout;
