import { useState, createContext } from "react";
import MisdemeanourList from "./misdemeanour-list";
import ShowLoading from "./../loading/show_loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading} from "./../../data/misdemeanour_data";
import MisdemeanourTableHeading from "./misdemeanour-heading";
import FilterMisdemeanoursForm from "../form-components/filter-misdemeanours-form";
import { InitialValue, initialValues} from "../../data/filter_misdemeanour_form_data";
import { useMisdemeanourContext } from "../../hooks/use_context";

export type FilterContextType = [InitialValue, React.Dispatch<React.SetStateAction<InitialValue>>] | [];

export const MisdemeanourFilterContext = createContext<FilterContextType>([]);

export const MisdemeanourContainer : React.FC = () => {

const misdemeanourData = useMisdemeanourContext();
const [input, setInput] = useState({...initialValues});

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
        {misdemeanourData.length === 0 && 
		<ShowLoading /> }

        {misdemeanourData.length > 0 &&
        <MisdemeanourList filterSelected = {input.filterMisdemeanours}/>} 

    </section>
</>
)
}