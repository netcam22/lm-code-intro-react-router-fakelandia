import { useState, createContext, useContext } from "react";
import MisdemeanourList from "./misdemeanour-list";
import ShowLoading from "../loading/show-loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading} from "../../types/misdemeanour_client_types";
import MisdemeanourTableHeading from "./misdemeanour-heading";
import FilterMisdemeanoursForm from "./filter-misdemeanours-form";
import { SelectOptions, initialValues} from "../../data/filter_misdemeanour_form_data";
import { MisdemeanourContext } from "./misdemeanour-data-wrapper";

export type FilterContextType = [SelectOptions, React.Dispatch<React.SetStateAction<SelectOptions>>] | [];

export const MisdemeanourFilterContext = createContext<FilterContextType>([]);

export const MisdemeanourContainer : React.FC = () => {

const [misdemeanourData] =  useContext(MisdemeanourContext);

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
    
    {misdemeanourData && misdemeanourData.length === 0 && 
	<ShowLoading /> }
    
    {misdemeanourData && misdemeanourData.length > 0 &&
    <MisdemeanourFilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
    <MisdemeanourList/>
    </MisdemeanourFilterContext.Provider>} 

    </section>
</>
)
}