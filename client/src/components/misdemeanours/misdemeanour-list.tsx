import MisdemeanourItem from "./misdemeanour-item";
import { useContext } from "react";
import { MisdemeanourFilterContext } from "./misdemeanour-container";
import { MisdemeanourObject } from "../../types/misdemeanour_client_types";
import { MisdemeanourContext } from "./misdemeanour-data-wrapper";

const MisdemeanourList : React.FC = () => {

const [misdemeanourData] =  useContext(MisdemeanourContext);
const [selectedFilter] = useContext(MisdemeanourFilterContext);

return (
        <>

        {misdemeanourData && selectedFilter && selectedFilter.filterMisdemeanours === "all" &&
        misdemeanourData.map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.indexValue} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}

        {misdemeanourData && selectedFilter && selectedFilter.filterMisdemeanours !== "all" &&
        misdemeanourData.filter((row: MisdemeanourObject) => row.misdemeanour 
        === selectedFilter.filterMisdemeanours).map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.indexValue} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}
        </>
)
}

export default MisdemeanourList;