import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import '../style.css';

function Header() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isScrolling = scrollTop > 0;
            setScrolling(isScrolling);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openNavBar = () => {
        const navbar = document.getElementById("navbar")
        navbar.style.transform === "translateY(-100%)" ? (
            navbar.style.transform = "translateY(0)"
        ) : (
            navbar.style.transform = "translateY(-100%)"
        )
    }

    return (
        <header id="header-lumos" className={`${scrolling ? 'scrolled' : ''}`}>
            <nav className="header-menu">
                <NavLink to={"/"} className={({isActive}) => isActive ? "header-link active" : "non-active header-link"}>INÍCIO</NavLink>
                <NavLink to={"/sobre"} className={({isActive}) => isActive ? "header-link active" : "non-active header-link"}>SOBRE</NavLink>
                <NavLink to={"/servicos"} className={({isActive}) => isActive ? "header-link active" : "non-active header-link"}>SERVIÇOS</NavLink>
            </nav>
            <NavLink to={"/"} className="header-logo">
                <img src="/lumos icons/LUMUS STUDIO SEM ICON HORIZONTAL NEGATIVO.png" alt="Logotipo branca escrito lumos studio" />
            </NavLink>
            <nav className="header-menu">
                <NavLink to={"/portfolio"} className={({isActive}) => isActive ? "header-link active" : "non-active header-link"}>PORTFÓLIO</NavLink>
                <a href="#contact" className="header-link">CONTATO</a>
                <div onClick={openNavBar}>
                    <label className="hamburger">
                        <input type="checkbox" />   
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>
            </nav>
        </header>
    );
}

export default Header;
