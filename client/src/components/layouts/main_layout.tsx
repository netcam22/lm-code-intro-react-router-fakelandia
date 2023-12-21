import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
    <>
    <Header/>
     <main className = "page">
        <Outlet/>
     </main>
    <Footer/>
    </>
    );
}

export default MainLayout;