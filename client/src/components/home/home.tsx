import logo from './../../assets/images/logo.png';
import { MISDEMEANOUR_VIEWS, MisdemeanourCountType } from '../../types/misdemeanour_client_types';
import FlipCard from './flip-card';
import { MISDEMEANOURS } from '../../types/misdemeanours.types';
import { useContext } from 'react';
import { MisdemeanourContext } from '../misdemeanours/misdemeanour-data-wrapper';

const Home:React.FC = () => { 

const [misdemeanourData] =  useContext(MisdemeanourContext);

const countValues: MisdemeanourCountType = 
{rudeness: 0, vegetables: 0, lift: 0, united: 0};

const totals = misdemeanourData?.map((row) => {
    return MISDEMEANOURS.filter((item) => 
    {return item === row.misdemeanour});
}).reduce((acc, item): MisdemeanourCountType => {
    return {...acc, [item[0]]: acc[item[0]]+1} 
}, countValues);

const key = "rudeness";
if (totals) {
console.log("totals", totals[key]);
}

const date = new Date();
const dateString = date.toDateString();
return (
    <>
    <h1 className = "page__title">Home</h1>
    <p className = "page__text">Welcome to the home of the Justice Department of Fakelandia.</p>
    <p className = "page__text">Here you can browse a list of recent misdemeanours committed
        by our citizens, or you can confess to your own misdemeanour.
    </p>
    <h2 className = "page__sub-title">Misdemeanours reported on {dateString}</h2>
    <section className = "grid-container">

        {totals && Object.entries(MISDEMEANOUR_VIEWS).map(([key, value], index) => 
        <FlipCard title={value.desc} alt={`Picture of ${value.desc} misdemenaour`} 
        icon ={value.icon} image={logo} key={index.toString()} cssClassType ={key} 
        count={totals[key]} />
        )}

    </section>
    </>
)
}
export default Home;