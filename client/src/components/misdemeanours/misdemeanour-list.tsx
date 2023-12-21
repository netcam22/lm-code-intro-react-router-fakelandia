import { useState } from "react";
import { useFetch} from "../../hooks/use_fetch";
import {Misdemeanour} from "../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
import ShowLoading from "../loading/show_loading";

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
		{data.length === 0 && 
		<ShowLoading /> }
    <section className = "container">
    <div className = "cell cell--heading">Citizen Id</div>
    <div className = "cell cell--heading">Date</div>
    <div className = "cell cell--heading">Misdemeanour</div>
    <div className = "cell cell--heading">Punishment Idea</div>
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