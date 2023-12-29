import MisdemeanourItem from "./misdemeanour-item";
import { useMisdemeanourContext } from "../../hooks/use_context";
import { MisdemeanourObject } from "../../data/misdemeanour_data";

const MisdemeanourList : React.FC = () => {

const misdemeanourData = useMisdemeanourContext();

return (
        <>
        {misdemeanourData.map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}</>
        )
}

export default MisdemeanourList;