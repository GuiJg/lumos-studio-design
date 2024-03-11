import React from 'react';
import { Outlet } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";

import NavBar from './components/pages/Navbar';
import Header from './components/pages/Header';
import BackToTopButton from './components/pages/BackToTopButton';
import Footer from './components/layouts/Footer';

import './style.css';
import './responsive.css';

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <Outlet />
            <BackToTopButton />
            <Footer />
            <SpeedInsights />
        </>
    )
}

export default App;
