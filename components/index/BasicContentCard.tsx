import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
    title: string;
    content: string;
    img?: any; // TODO: Define explicit type for img. Type JSON is not working.
    containerClass?: string;
    titleClass?: string;
    children?: JSX.Element;
};

export const BasicContentCard = ({ title, content, img, containerClass, titleClass, children }: Props) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className={`${containerClass} glassmorphism bg-[#14000600]`}>
            <div className={`text-[#ef8220] uppercase ${titleClass} text-center bg-[#1795f098] glassmorphism`}>
                {title}
            </div>
            <div className={`grid ${img ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
                <div className="text-lg mt-3 md:my-auto md:text-xl">{content}</div>
                {img && isClient && (
                    <div className="flex justify-center mt-6 h-[400px]">
                        <Lottie animationData={img} loop className="object-contain" />
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};