import MisdemeanourItem from "./misdemeanour-item";
import { MisdemeanourObject } from "../../types/misdemeanour_client_types";
import ShowLoading from "../loading/show-loading";
import { useContext } from "react";
import { MisdemeanourFilterContext } from "./misdemeanour-container";
import { MisdemeanourContext } from "./misdemeanour-data-wrapper";

const MisdemeanourList : React.FC = () => {

const [misdemeanourData] =  useContext(MisdemeanourContext);

const [selectedFilter] = useContext(MisdemeanourFilterContext);

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