import { Outlet } from 'react-router-dom';
import NavBar from './pages/Navbar';
import Header from './pages/Header';
import Footer from './sections/Footer';

import './style.css'

function App(){

    return ( 
        <>  
            <NavBar/> 
            <Header/>
            <Outlet /> 
            <Footer/>
        </>
    )
} 

export default App;