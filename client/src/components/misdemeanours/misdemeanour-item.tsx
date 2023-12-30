import {MisdemeanourKind} from "../../../types/misdemeanours.types";

type MisdemeanourItemProps = {
    citizenId: number,
    misdemeanour: MisdemeanourKind,
    date: string,
    indexValue: string
}

const MISDEMEANOUR_VIEWS = {
	rudeness: {icon: "🤪", desc: "Mild Public Rudeness"},
	vegetables:  {icon: "🥗", desc: "Not Eating Your Vegetables"},
	lift: {icon: "🗣", desc: "Speaking in a Lift"},
	united:  {icon: "😈", desc: "Supporting Manchester United"}
 }

 const picsumUrl = "https://picsum.photos/300/200?random=";
 
const MisdemeanourItem : React.FC<MisdemeanourItemProps> = ({citizenId, misdemeanour, date, indexValue}) => {

    return (
    <>
        <div className = "cell">Citizen Id: {citizenId}</div>
        <div className = "cell">Date: {date}</div>
        <div className = "cell">Misdemeanour: 
        {MISDEMEANOUR_VIEWS[misdemeanour].icon} {MISDEMEANOUR_VIEWS[misdemeanour].desc}</div>
        <div className = "cell">
            <img className = "cell__image" src={picsumUrl+indexValue} />
        </div>
    </>
    )
}
export default MisdemeanourItem;
