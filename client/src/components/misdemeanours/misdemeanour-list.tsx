import MisdemeanourItem from "./misdemeanour-item";
import { useMisdemeanourContext} from "../../hooks/use_context";
import { MisdemeanourObject } from "../../data/misdemeanour_data";
import ShowLoading from "../loading/show_loading";

interface MisdemeanourListProps {
 filterSelected: string;
}

const MisdemeanourList : React.FC<MisdemeanourListProps> = ({filterSelected}) => {

const misdemeanourData = useMisdemeanourContext();
const dataToDisplay = filterSelected === "all" ? misdemeanourData
: misdemeanourData.filter((row: MisdemeanourObject) => row.misdemeanour === filterSelected);

return (
        <>
        {misdemeanourData.length === 0 && 
	<ShowLoading /> }

        {dataToDisplay.map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}
        </>
   
)
}

export default MisdemeanourList;