import { useState, createContext } from "react";
import { useFetch} from "../../hooks/use_fetch";
import { Router } from "../router/router";

import { MisdemeanourObject} from "../../data/misdemeanour_data";

export const MisdemeanourContext = createContext<Array<MisdemeanourObject>>([]);

export const MisdemeanourDataWrapper : React.FC = () => {

const url = "http://localhost:8080/api/misdemeanours/10";

const [misdemeanourData, setMisdemeanourData] = useState<Array<MisdemeanourObject>>([]);

useFetch<MisdemeanourObject>(url, "misdemeanours", misdemeanourData, setMisdemeanourData);

return (
<>
        <MisdemeanourContext.Provider value={misdemeanourData}>
        <Router/>
        </MisdemeanourContext.Provider>
</>
)
}