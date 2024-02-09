// src/Header.js

import React from 'react';

function Header() {
    return (
        <header className="header-lumos">
            <nav className="header-menu">
                <a href="about.html" className="header-link">SOBRE</a>
                <a href="#services" className="header-link">SERVIÇOS</a>
            </nav>
            <a href="index.html" className="header-logo">
                <img src="/lumos icons/LUMUS STUDIO LOGO HORIZONTAL NEGATIVO.png" alt="Logotipo branca escrito lumos studio" />
            </a>
            <nav className="header-menu">
                <a href="portfolio.html" className="header-link">PORTFÓLIO</a>
                <a href="#contact" className="header-link">CONTATO</a>
                <div className="navbar-mobile">
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
