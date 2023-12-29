import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Outlet } from 'react-router-dom';
import logo from './../../assets/images/logo.png';

const MainLayout = () => {
    return (
    <>
    <Header image = {logo} />
     <main className = "page">
        <Outlet/>
     </main>
    <Footer/>
    </>
    );
}

export default MainLayout;