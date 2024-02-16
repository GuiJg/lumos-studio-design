import { Outlet } from 'react-router-dom';
import NavBar from './components/pages/Navbar';
import Header from './components/pages/Header';
import Footer from './components/layouts/Footer';

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