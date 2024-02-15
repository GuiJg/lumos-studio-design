import { Outlet } from 'react-router-dom' 
import NavBar from './sections/Navbar'
import Header from './sections/Header'

import './style.css'
import Footer from './sections/footer'

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