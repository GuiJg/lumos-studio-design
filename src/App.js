import { Outlet } from 'react-router-dom' 
import NavBar from './pages/navbar'
import Header from './pages/header'

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