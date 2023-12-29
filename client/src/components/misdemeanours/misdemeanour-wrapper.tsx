import { useState, createContext } from "react";
import { useFetch} from "./../../hooks/use_fetch";
import { Router } from "../router/router";

import { MisdemeanourObject} from "./../../data/misdemeanour_data";

export const MisdemeanourContext = createContext<Array<MisdemeanourObject>>([]);

export const MisdemeanourWrapper : React.FC = () => {

const url = "http://localhost:8080/api/misdemeanours/10";

const [data, setData] = useState<Array<MisdemeanourObject>>([]);

useFetch<MisdemeanourObject>(url, "misdemeanours", data, setData);

return (
<>
        <MisdemeanourContext.Provider value={data}>
        <Router/>
        </MisdemeanourContext.Provider>
</>
)
}