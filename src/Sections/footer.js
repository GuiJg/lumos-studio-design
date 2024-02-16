import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="logo-info">
                <img src="/lumos icons/LUMUS STUDIO LOGO HORIZONTAL NEGATIVO.png" alt="Logotipo com um Icone sendo um quadrado com um S no meio e Lumos Studio escrito" />
                <span>Design Luminoso - Sua jornada nossa prioridade.</span>
                <div className="info">
                    <p>Lumos Studio Design.</p>
                    <p>CNPJ: 53.890.098/0001-66</p>
                </div>
                <p>Copyright © | Lumos Studio Design</p>
            </div>
            <div className="links-container">
                <div className="item-link">
                    <span>Links Úteis</span>
                    <NavLink to={"/websites"} className="footer-link">Websites</NavLink>
                    <NavLink to={"/servicos"} className="footer-link">Social Media</NavLink>
                    <NavLink to={"/servicos"} className="footer-link">Identidade Visual</NavLink>
                    <NavLink to={"/portfolio"} className="footer-link">Portfólio</NavLink>
                    <NavLink to={"/sobre"} className="footer-link">Sobre nós</NavLink>
                </div>
                <div className="item-link">
                    <span>Social</span>
                    <NavLink to={"https://www.instagram.com/lumostudio.design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="blank_" className="footer-link">Instagram</NavLink>
                    <NavLink to={"https://www.behance.net/lumostudiodesign"} target="blank_" className="footer-link">Behance</NavLink>
                    <NavLink to={"https://www.linkedin.com/company/lumos-studio-dsgn/?viewAsMember=true"} target="blank_" className="footer-link">Linkedin</NavLink>
                    <NavLink to={"https://www.facebook.com/profile.php?id=61555248074804"} target="blank_" className="footer-link">Facebook</NavLink>
                </div>
                <div className="item-link">
                    <span>Contato</span>
                    <NavLink to={"mailto:lumostudio.dsgn@gmail.com"} target="blank_" className="footer-link">lumostudio.dsgn@gmail.com</NavLink>
                    <NavLink to={"https://api.whatsapp.com/send?phone=5581986927127"} target="blank_" className="footer-link">(81) 9 8692-7127</NavLink>
                    <NavLink to={"https://api.whatsapp.com/send?phone=5581983395693"} target="blank_" className="footer-link">(81) 9 8339-5693</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;