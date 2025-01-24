import React from "react";
import Lottie from "react-lottie-player";

type Props = {
    title: string;
    content: string;
    img?: any; // TODO: Define explicit type for img. Type JSON is not working.
    containerClass?: string;
    titleClass?: string;
    children?: JSX.Element
}

export const BasicContentCard = ({title, content, img, containerClass, titleClass, children} : Props) => {
  return (
    <div className={`${containerClass} glassmorphism bg-[#14000600]`}>
        <div className={`text-[#ef8220] uppercase ${titleClass} text-center bg-[#1795f098] glassmorphism`}>{title}</div>
        <div className={`grid ${img ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
            <div className="text-lg mt-3 md:my-auto md:text-xl">
               {content}
            </div>
            {img && <div className="flex justify-center mt-6 h-[400px]">
                <Lottie
                    play
                    loop
                    animationData={img}
                    className="object-contain"
                />
            </div>}
        </div>
        {children}
    </div>
  )
}
