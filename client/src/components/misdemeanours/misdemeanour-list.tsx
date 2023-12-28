import {Misdemeanour} from "./../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
import { useMisdemeanourContext } from "../../hooks/use_context";
import useFetch from "../../hooks/use_fetch";
import { useState } from "react";

type PicsumImage =
        {
        id: string,
        author: string,
        width: number,
        height: number,
        url: string,
        download_url: string
        }

const MisdemeanourList : React.FC = () => {

const misdemeanourData = useMisdemeanourContext();

const noOfImages = misdemeanourData.length;
const imageUrl = `https://picsum.photos/v2/list?page=1&limit=${noOfImages}`;
const [imageData, setImageData] = useState<Array<PicsumImage>>([]);
useFetch<PicsumImage>(imageUrl, null, imageData, setImageData);
console.log(imageData[0]);

return (
        <>
        {misdemeanourData.map((item: Misdemeanour) => 
        (<MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}/>))}
        </>
        )
}

export default MisdemeanourList;