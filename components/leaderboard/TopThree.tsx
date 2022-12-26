import {Item} from "../../public/types";
import {TopCard} from "./TopCard";

export const TopThree = ({topList}: {topList: Item[]}) => {
    const [first, second, third] = topList
    return (
        <>      
        <div className="mt-4 mb-10 py-8 flex relative z-10 w-full place-content-center">
            <div className="relative left-[35px] top-[25px] scale-[0.9] z-10" >
                <TopCard item={second} color='#c0c0c0'/>
            </div>
            <div className="relative left-[0px] top-[0px] scale-[1] z-20" >
                <TopCard item={first} color='#ffd700'/>
            </div>
            <div className="relative -left-[35px] top-[50px] scale-[0.8] z-0" >
                <TopCard item={third} color='#bb8f4c'/>
            </div>
        </div>
       </>
    )
}