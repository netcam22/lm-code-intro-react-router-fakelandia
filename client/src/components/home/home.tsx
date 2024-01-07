import logo from './../../assets/images/logo.png';
import { MISDEMEANOUR_VIEWS } from '../../types/misdemeanour_client_types';
import FlipCard from './flip-card';

const Home:React.FC = () => { 

const date = new Date();
const dateString = date.toDateString();
return (
<>
<h1 className = "page__title">Home</h1>
<h2 className = "page__sub-title">Misdemeanours reported on {dateString}</h2>
<section className = "grid-container">
{Object.entries(MISDEMEANOUR_VIEWS).map(([key, value], index) => 
<FlipCard title={value.desc} alt={`Picture of ${value.desc} misdemenaour`} 
text={value.icon} image={logo} key={index.toString()} cssClassType ={key}/>
)}

</section>
)
</>
)
}
export default Home;