import { useState, createContext } from "react";
import useFetch from "../../hooks/use_fetch";
import { Router } from "../router/router";

import { MisdemeanourObject} from "../../types/misdemeanour_client_types";
import ResponseError from "../response-error/response-error";

export type MisdemeanourContextType = [Array<MisdemeanourObject>, 
        React.Dispatch<React.SetStateAction<Array<MisdemeanourObject>>>] | [];

export const MisdemeanourContext = createContext<MisdemeanourContextType>([]);

export const MisdemeanourDataWrapper : React.FC = () => {

const url = "http://localhost:8080/api/misdemeanours/10";

const [misdemeanourData, setMisdemeanourData] = useState<Array<MisdemeanourObject>>([]);

const responseError = useFetch<MisdemeanourObject>(url, "misdemeanours", misdemeanourData, setMisdemeanourData);

return (
        <>
        {responseError === "" &&
        <MisdemeanourContext.Provider value={[misdemeanourData, setMisdemeanourData]}>
        <Router/>
        </MisdemeanourContext.Provider>
        }
        {responseError !== "" &&
        <ResponseError errorMessage={responseError}/>
        }           
        </>
)
}