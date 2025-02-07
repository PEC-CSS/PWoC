import React, { JSX } from "react";
//import Lottie from "react-lottie-player";

type Props = {
    title: string;
    content: string;
    img?: any; // TODO: Define explicit type for img. Type JSON is not working.
    containerClass?: string;
    titleClass?: string;
    children?: JSX.Element;
};

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
        </div>
    </div>
    );
};