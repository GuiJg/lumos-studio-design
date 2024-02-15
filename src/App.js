import { Outlet } from 'react-router-dom' 
import NavBar from './sections/Navbar'
import Header from './sections/Header'

import './style.css'

function App(){

    return ( 
        <>  
            <NavBar/> 
            <Header/>
            <Outlet /> 
        </>
    )
} 

export default App;