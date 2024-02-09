import React from 'react';
import Header from './header';
import BannerSection from './BannerSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <BannerSection/>
            <AboutSection/>
            <ServicesSection/>
        </div>
    );
}

export default App;
