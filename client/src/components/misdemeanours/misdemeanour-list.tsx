import MisdemeanourItem from "./misdemeanour-item";
import { useMisdemeanourContext, useMisdemeanourFilterContext} from "../../hooks/use_context";
import { MisdemeanourObject } from "../../../types/misdemeanour_client_types";
import ShowLoading from "../loading/show-loading";

const MisdemeanourList : React.FC = () => {

const [misdemeanourData] = useMisdemeanourContext();

const [selectedFilter] = useMisdemeanourFilterContext();

return (
        <>
        {misdemeanourData && misdemeanourData.length === 0 && 
	<ShowLoading /> }

        {misdemeanourData && selectedFilter && selectedFilter.filterMisdemeanours === "all" &&
        misdemeanourData.map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}

        {misdemeanourData && selectedFilter && selectedFilter.filterMisdemeanours !== "all" &&
        misdemeanourData.filter((row: MisdemeanourObject) => row.misdemeanour 
        === selectedFilter.filterMisdemeanours).map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}
        </>
)
}

export default MisdemeanourList;