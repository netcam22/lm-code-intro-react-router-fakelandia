import {Misdemeanour} from "./../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
import { useMisdemeanourContext } from "../../hooks/use_context";


const MisdemeanourList : React.FC = () => {

    const misdemeanourData = useMisdemeanourContext();
    console.log("context", misdemeanourData);

return (
        <>
        {misdemeanourData.map((item: Misdemeanour) => 
        (<MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}/>))}
        </>
        )
}

export default MisdemeanourList;