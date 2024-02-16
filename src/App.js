import { Outlet } from 'react-router-dom' 
import NavBar from './pages/Navbar'
import Header from './pages/Header'

import './style.css'
import Footer from './sections/Footer'

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