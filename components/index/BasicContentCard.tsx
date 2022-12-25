import Image, { StaticImageData } from "next/image"
import React from "react";

type Props = {
    title: string;
    content: string;
    img?: StaticImageData;
    containerClass?: string;
    titleClass: string;
    children?: JSX.Element
}

export const BasicContentCard = ({title, content, img, containerClass, titleClass, children} : Props) => {
  return (
    <div className={`${containerClass} glassmorphism bg-[#14000600]`}>
        <div className={`text-[#ef8220] uppercase ${titleClass} text-center bg-[#cc66a298] glassmorphism`}>{title}</div>
        <div className={`grid grid-cols-1 ${img ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
            <div className="text-lg mt-3 md:my-auto md:text-xl">
               {content}
            </div>
            {img && <div className="hidden md:flex justify-center mt-6">
                <Image src={img} alt="linux logo" className="w-[250px] h-[250px]" />
            </div>}
        </div>
        {children}
    </div>
  )
}
