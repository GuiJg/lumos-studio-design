import React from "react";

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
                    <p>Websites</p>
                    <p>Social Media</p>
                    <p>Identidade Visual</p>
                    <p>Portfólio</p>
                    <p>Sobre nós</p>
                </div>
                <div className="item-link">
                    <span>Social</span>
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>Linkedin</p>
                </div>
                <div className="item-link">
                    <span>Contato</span>
                    <p>lumostudio.dsgn@gmail.com</p>
                    <p>(81) 9 8339-5693</p>
                    <p>(81) 9 8692-7127</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;