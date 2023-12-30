import { useState, createContext } from "react";
import MisdemeanourList from "./misdemeanour-list";
import ShowLoading from "./../loading/show_loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading} from "./../../data/misdemeanour_data";
import MisdemeanourTableHeading from "./misdemeanour-heading";
import FilterMisdemeanoursForm from "./filter-misdemeanours-form";
import { SelectOptions, initialValues} from "../../data/filter_misdemeanour_form_data";
import { useMisdemeanourContext } from "../../hooks/use_context";

export type FilterContextType = [SelectOptions, React.Dispatch<React.SetStateAction<SelectOptions>>] | [];

export const MisdemeanourFilterContext = createContext<FilterContextType>([]);

export const MisdemeanourContainer : React.FC = () => {

const misdemeanourData = useMisdemeanourContext();
const [selectedFilter, setSelectedFilter] = useState({...initialValues});

return (
<>
    <h2 className = "title">Misdemeanours</h2>
    {<MisdemeanourFilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
    <FilterMisdemeanoursForm />
    </MisdemeanourFilterContext.Provider>}
    <section className = "container">
    {MISDEMEANOUR_DATA_HEADINGS.map((heading: MisdemeanourHeading, index: number) => {
    return <MisdemeanourTableHeading key={index} heading={heading} />} 
    )}
    {misdemeanourData.length === 0 && 
	<ShowLoading /> }
    
    {misdemeanourData.length > 0 &&
    <MisdemeanourFilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
    <MisdemeanourList/>
    </MisdemeanourFilterContext.Provider>} 

    </section>
</>
)
}