import React from 'react';
import BannerSection from './BannerSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import Footer from './footer';
import './style.css';
import Header from './Header.jsx'; 

function App() {
    return (
        <div className="App">
            <Header/>
            <BannerSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/> 
            <ContactSection/>
            <Footer/> 
        </div>
    );
}

export default App;
