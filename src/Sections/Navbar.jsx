import React from 'react';
import { NavLink } from 'react-router-dom'
import '../style.css';

function NavBar() {

    const closeNavBar = () => {
        const navbar = document.getElementById("navbar")
        navbar.style.transform === "translateY(0)" ? (
            navbar.style.transform = "translateY(-100%)"
        ) : (
            navbar.style.transform = ""
        )
    }

    return (
        <nav className="navbar" id='navbar'>

            <div className="navbar-logo">
                <a href="index.html" className="header-logo">
                    <img src="/lumos icons/LUMUS STUDIO LOGO HORIZONTAL NEGATIVO.png" alt="Logotipo branca escrito lumos studio" />
                </a>
                <div className="menu-buttons">
                    <a href="1" className="button-mensage">
                        <p>Enviar Mensagem</p>
                    </a>
                    <label onClick={closeNavBar} id='menu-button' className="hamburger">
                        <input type="checkbox" />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>
            </div>
            <div className="menu">
                <a href="index.html" className="menu-link">Início</a>
                <a href="Portfólio.html" className="menu-link">Portfólio</a>
                <a href="websites.html" className="menu-link">Websites</a>
                <NavLink to={"/sobre"} className={({isActive}) => isActive ? "menu-link active" : "non-active menu-link"}>SOBRE</NavLink>
                <a href="#contact" className="menu-link">Contato</a> 
            </div>
            <div className="social-description">
                <span>Copyright © | Lumos Studio Design</span>
                <div className="item-link">
                    <span>Social</span>
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>Linkedin</p>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;
