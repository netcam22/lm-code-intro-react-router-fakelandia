import {Misdemeanour} from "../../../types/misdemeanours.types";

const MISDEMEANOUR_ICONS = {
	rudeness: "🤪",
	vegetables:  "🥗",
	lift: "🗣",
	united:  "😈",
 }
 
const MisdemeanourItem : React.FC<Misdemeanour> = ({citizenId, misdemeanour, date}) => {

    return (
    <>
        <div className = "cell">Citizen Id: {citizenId}</div>
        <div className = "cell">Date: {date}</div>
        <div className = "cell">Misdemeanour: 
        {MISDEMEANOUR_ICONS[misdemeanour]} {misdemeanour}</div>
        <div className = "cell">Images goes here</div>
    </>
    )
    }
export default MisdemeanourItem;
