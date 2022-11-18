import {Item} from "../../public/types";
import {TopCard} from "./TopCard";

export const TopThree = ({topList}: {topList: Item[]}) => {
    const [first, second, third] = topList
    return (
        <div className="flex flex-row justify-evenly">
            <TopCard item={second} />
            <TopCard item={first}/>
            <TopCard item={third}/>
        </div>
    )
}