import React from 'react';
import Header from './header';
import BannerSection from './BannerSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectSection from './ProjectSection';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <BannerSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/> 
        </div>
    );
}

export default App;
