import React from "react";
import '../../../project.css'
import { NavLink } from "react-router-dom";
import ContactSection from "../../layouts/ContactSection";

function Coffee() {

    return (
        <section className="project-content">
            <div className="content-title">
                <h1>Coffee Cube</h1>
                <br />
                <p>
                    A Coffee Cube é uma cafeteria especializada em expressos e brunchs.
                    Com mais de 5 anos de experiência, a Coffee Cube buscou uma landing page que refletisse sua abordagem moderna. <br />
                    Nosso projeto teve como objetivo criar uma nova identidade visual que destacasse a empresa em seu ramo e exaltasse a alta qualidade de tudo o que a Coffee Cube oferece aos seus clientes.
                </p>
            </div>
            <div className="content-image">
                <img src="../projects/CoffeeCube/MOCKUP COFFEE CUBE.png" alt="" />
                <img src="../projects/CoffeeCube/LUMOS PROJETOS COFFEE CUBE TELAS.png" alt="" />
                <img src="../projects/CoffeeCube/LUMOS PROJETOS PALETA DE CORES COFFEE.png" alt="" />
                <img src="../projects/CoffeeCube/LANDING PAGE COFFEECUBE.png" alt="" />
            </div>
            <div className="buttons-container">
                <NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "button-content" : "non-active button-content"}>Outros Projetos</NavLink>
                <NavLink to={"/portfolio/sushi-social-media"} className={({ isActive }) => isActive ? "button-content" : "non-active button-content"}>Próximo<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0" /></path></g></g></svg></NavLink>
            </div>
            <div className="proposal">
                <div className="div-proposal">
                    <p>
                        Se interessou?
                        <br />
                        Vamos trabalhar juntos!
                        <br />
                    </p>
                    <NavLink to={"https://api.whatsapp.com/send?phone=5581986927127"} target="_blank" className="button-proposal">Faça uma Proposta</NavLink>
                </div>
                <ContactSection />
            </div>
        </section>
    )

}

export default Coffee;