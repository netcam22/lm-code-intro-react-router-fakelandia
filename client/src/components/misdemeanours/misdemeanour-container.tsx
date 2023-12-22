import { useState, createContext } from "react";
import { useFetch} from "./../../hooks/use_fetch";
import {Misdemeanour} from "./../../../types/misdemeanours.types";
import MisdemeanourList from "./misdemeanour-list";
import ShowLoading from "./../loading/show_loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading, MisdemeanourArray} from "./../../data/misdemeanour_data";
import MisdemeanourTableHeading from "./misdemeanour-heading";

export const MisdemeanourContext = createContext<MisdemeanourArray>([]);

export const MisdemeanourContainer : React.FC = () => {

const url = "http://localhost:8080/api/misdemeanours/10";

const [data, setData] = useState<MisdemeanourArray>([]);

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
        <MisdemeanourContext.Provider value={data}>
        <MisdemeanourList/>
        </MisdemeanourContext.Provider> } 
    </section>
</>
)
}