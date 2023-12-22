import { useState } from "react";
import { useFetch} from "../../hooks/use_fetch";
import {Misdemeanour} from "../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
import ShowLoading from "../loading/show_loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading} from "../../data/misdemeanour_data";
import MisdemeanourTableHeading from "./misdemeanour-heading";

interface MisdemeanoursProps {
    url: string;
}

const MisdemeanourList : React.FC<MisdemeanoursProps> = ({url}) => {

const [data, setData] = useState<Array<Misdemeanour>>([]);

const response = useFetch<Misdemeanour>(url, "misdemeanours", data, setData);
console.log(response);

return (
<>
    <h2 className = "title">Misdemeanours!</h2>
    <section className = "container">
    {MISDEMEANOUR_DATA_HEADINGS.map((heading: MisdemeanourHeading, index: number) => {
    return <MisdemeanourTableHeading key={index} heading={heading} />} 
    )}
		{data.length === 0 && 
		<ShowLoading /> }
        {data.length > 0 && 
        data.map((item: Misdemeanour) => {
        return <MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}/>
        })} 
    </section>
</>
)
}
export default MisdemeanourList;