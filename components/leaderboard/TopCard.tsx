import {Item} from "../../public/types";

export const TopCard = ({item}: {item: Item}) => {
    return (
        <img src={item.user.avatar_url}/>
    )
}