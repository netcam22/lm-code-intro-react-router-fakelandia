import {MisdemeanourKind} from "../../../types/misdemeanours.types";

type MisdemeanourItemProps = {
    citizenId: number,
    misdemeanour: MisdemeanourKind,
    date: string,
    indexValue: string
}

const MISDEMEANOUR_ICONS = {
	rudeness: "🤪",
	vegetables:  "🥗",
	lift: "🗣",
	united:  "😈",
 }

 const picsumUrl = "https://picsum.photos/300/200?random=";
 
const MisdemeanourItem : React.FC<MisdemeanourItemProps> = ({citizenId, misdemeanour, date, indexValue}) => {

    return (
    <>
        <div className = "cell">Citizen Id: {citizenId}</div>
        <div className = "cell">Date: {date}</div>
        <div className = "cell">Misdemeanour: 
        {MISDEMEANOUR_ICONS[misdemeanour]} {misdemeanour}</div>
        <div className = "cell">
            <img className = "cell__image" src={picsumUrl+indexValue} />
        </div>
    </>
    )
}
export default MisdemeanourItem;
