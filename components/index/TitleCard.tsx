type Props = {
    title: string;
    subtitle: string;
    content: string;
}

export const TitleCard = ({title, subtitle, content} : Props) => {
    return (
        <div className="glassmorphism border-0 bg-[rgba(20,0,6,0.7)] mt-[10px] grid grid-cols-1 p-4 md:p-9 text-center">
            {/* Title and Subtitle */}
            <div className="my-8">
                <div className="font-hammersmith text-[4rem] md:text-[7rem] leading-[0.8]">{title}</div>
                <div className="text-2xl md:text-4xl">{subtitle}</div>
            </div>
            {/* Content */}
            <div className='text-lg text-[#929ab3] italic'>
                {content}
            </div>
        </div>
    )
}