import {Item} from "../../public/types";


export const TopCard = ({item, rank}: {item: Item, rank: string}) => {

    return (
        <>
        <a href={item.user.html_url}>
            <img className="h-[200px] w-[200px] object-cover rounded-full" loading="lazy" src={item.user.avatar_url} />
            <div className="absolute left-1/2 -translate-x-2/4 w-[50px] -top-[30px]">
                <svg viewBox="0 0 100 50" className={`fill-[${rank === '1' ? "#ffd700" : (rank === '2' ? "#c0c0c0" : "#bb8f4c")}]`}>
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