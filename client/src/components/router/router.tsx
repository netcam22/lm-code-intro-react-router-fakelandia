import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import NotFound from "../not-found/not-found";
import Home from "../../components/home/home";
import Confession from "../confession/confession";
import {MisdemeanourContainer} from "../misdemeanours/misdemeanour-container";
import MildPublicRudeness from "../misdemeanours/misdemeanour-kind/mild_public_rudeness";
import SpeakingInALift from "../misdemeanours/misdemeanour-kind/speaking_in_a_lift";
import NotEatingYourVegetables from "../misdemeanours/misdemeanour-kind/not_eating_your_vegetables";
import SupportingManchesterUnited from "../misdemeanours/misdemeanour-kind/supporting_manchester_united";


export const Router = () => {
    return (
    <Routes>
        <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "misdemeanours" element = {<MisdemeanourContainer />}/>
            <Route path = "confession" 
            element = {<Confession/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
    );
}