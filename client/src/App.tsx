import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import { MisdemeanourWrapper } from './components/misdemeanours/misdemeanour-wrapper';

function App() {
  return (
   <>
   <BrowserRouter>
     <MisdemeanourWrapper/>
    </BrowserRouter>
   </>
  );
}

export default App
