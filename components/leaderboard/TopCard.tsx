import Image from "next/image";
import {Item} from "../../typings/types";


export const TopCard = ({item, color}: {item: Item, color: string}) => {

    return (
        <>
        <a href={item.user.html_url} target="_blank" rel="noreferrer">
            <Image className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] object-cover rounded-full" loading="lazy" src={item.user.avatar_url} alt="avatar" width={200} height={200} />
            <div className={`absolute left-1/2 -translate-x-2/4 w-[50px] -top-[30px]`} style={{fill: color}}>
                <svg viewBox="0 0 100 50">
                    <polygon
                        points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                    />
                </svg>
            </div>
            <div className="absolute text-center left-2/4 -translate-x-2/4 text-[20px]">
                {item.user.name.split(" ")[0]}
                <br />
                {item.points} Points
            </div>
        </a>
        </>
    )
}