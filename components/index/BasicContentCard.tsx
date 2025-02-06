<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
=======
import React from "react";
//import Lottie from "react-lottie-player";
>>>>>>> 0701992c5d31b2f3d69c56b8e68d6a9a7d5ba0c3

type Props = {
    title: string;
    content: string;
    img?: any; // TODO: Define explicit type for img. Type JSON is not working.
    containerClass?: string;
    titleClass?: string;
    children?: JSX.Element;
};

<<<<<<< HEAD
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
=======
export const BasicContentCard = ({title, content, img, containerClass, titleClass, children} : Props) => {
  return (
    <div className={`${containerClass} glassmorphism bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg `}>
        <div className={`text-white uppercase ${titleClass} text-center bg-blue-500 bg-opacity-50 glassmorphism p-4 rounded-lg shadow-md font-bold text-2xl`}>
            {title}
        </div>
        <div className={`grid ${img ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-4 mt-4`}>
            <div className="text-lg mt-3 md:my-auto md:text-xl text-white font-medium">
               {content}
            </div>
            {img && <div className="flex justify-center mt-6 h-[400px]">
                {/* <Lottie
                    play
                    loop
                    animationData={img}
                    className="object-contain"
                /> */}
            </div>}
>>>>>>> 0701992c5d31b2f3d69c56b8e68d6a9a7d5ba0c3
        </div>
    );
};