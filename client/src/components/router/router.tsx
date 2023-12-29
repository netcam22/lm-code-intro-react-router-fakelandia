import { Routes, Route } from "react-router-dom";
import MainLayout from "../../components/layouts/main_layout";
import NotFound from "../not_found/not_found";
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
                <Route path = "misdemeanours/mild_public_rudeness" 
                element = {<MildPublicRudeness />}/>
                <Route path = "misdemeanours/speaking_in_a_lift" 
                element = {<SpeakingInALift />}/>
                <Route path = "misdemeanours/not_eating_your_vegetables" 
                element = {<NotEatingYourVegetables />}/>
                <Route path = "misdemeanours/supporting_manchester_united" 
                element = {<SupportingManchesterUnited />}/>
            <Route path = "confession" 
            element = {<Confession/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
    );
}