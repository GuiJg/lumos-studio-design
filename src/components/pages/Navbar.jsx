import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../style.css';

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
                <NavLink to={"/"} className="header-logo">
                    <img src="/lumos icons/LUMUS STUDIO LOGO HORIZONTAL NEGATIVO.png" alt="Logotipo branca escrito lumos studio" />
                </NavLink>
                <NavLink to={"/"} className="logo-navbar">
                    <img src="/lumos icons/LUMUS STUDIO EGATIVO_1.png" alt="Logotipo branca escrito lumos studio" />
                </NavLink>
                <div className="menu-buttons">
                    <NavLink to={"https://api.whatsapp.com/send?phone=5581986927127"} target='blank_' className="button-mensage">
                        <p>Enviar Mensagem</p>
                    </NavLink>
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
                <NavLink to={"/"} className={({ isActive }) => isActive ? "menu-link active" : "non-active menu-link"}>Início</NavLink>
                <NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "menu-link active" : "non-active menu-link"}>Portfólio</NavLink>
                <NavLink to={"/websites"} className={({ isActive }) => isActive ? "menu-link active" : "non-active menu-link"}>Websites</NavLink>
                <NavLink to={"/sobre"} className={({ isActive }) => isActive ? "menu-link active" : "non-active menu-link"}>Sobre</NavLink>
                <NavLink to={"https://lumos-studio.vercel.app/#contact"} className="menu-link">Contato</NavLink>
            </div>
            <div className="social-description">
                <span>Copyright © | Lumos Studio Design</span>
                <div className="item-link">
                    <span>Social</span>
                    <NavLink to={"https://www.instagram.com/lumostudio.design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="blank_" className="footer-link">Instagram</NavLink>
                    <NavLink to={"https://www.behance.net/lumostudiodesign"} target="blank_" className="footer-link">Behance</NavLink>
                    <NavLink to={"https://www.linkedin.com/company/lumos-studio-dsgn/?viewAsMember=true"} target="blank_" className="footer-link">Linkedin</NavLink>
                    <NavLink to={"https://www.facebook.com/profile.php?id=61555248074804"} target="blank_" className="footer-link">Facebook</NavLink>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;
