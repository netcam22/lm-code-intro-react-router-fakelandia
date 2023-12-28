import { useState, createContext } from "react";
import { useFetch} from "./../../hooks/use_fetch";
import MisdemeanourList from "./misdemeanour-list";
import ShowLoading from "./../loading/show_loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading, MisdemeanourObject} from "./../../data/misdemeanour_data";
import MisdemeanourTableHeading from "./misdemeanour-heading";
import FilterMisdemeanoursForm from "../form-components/filter-misdemeanours-form";
import { InitialValue, initialValues} from "../../data/filter_misdemeanour_form_data";

export type FilterContextType = [InitialValue, React.Dispatch<React.SetStateAction<InitialValue>>] | [];

export const MisdemeanourContext = createContext<Array<MisdemeanourObject>>([]);
export const MisdemeanourFilterContext = createContext<FilterContextType>([]);

export const MisdemeanourContainer : React.FC = () => {

const url = "http://localhost:8080/api/misdemeanours/10";

const [data, setData] = useState<Array<MisdemeanourObject>>([]);
const [input, setInput] = useState({...initialValues});

useFetch<MisdemeanourObject>(url, "misdemeanours", data, setData);

return (
<>
    <h2 className = "title">Misdemeanours</h2>
    {<MisdemeanourFilterContext.Provider value={[input, setInput]}>
    <FilterMisdemeanoursForm />
    </MisdemeanourFilterContext.Provider>}
    <section className = "container">
    {MISDEMEANOUR_DATA_HEADINGS.map((heading: MisdemeanourHeading, index: number) => {
    return <MisdemeanourTableHeading key={index} heading={heading} />} 
    )}
		{data.length === 0 && 
		<ShowLoading /> }

        {data.length > 0 && input.filterMisdemeanours === "all" &&
        <MisdemeanourContext.Provider value={data}>
        <MisdemeanourList/>
        </MisdemeanourContext.Provider> } 

        {data.length > 0 && input.filterMisdemeanours !== "all" &&
        <MisdemeanourContext.Provider 
        value={(data.filter(item => item.misdemeanour === input.filterMisdemeanours))}>
        <MisdemeanourList/>
        </MisdemeanourContext.Provider> } 
    </section>
</>
)
}