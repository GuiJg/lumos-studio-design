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
                    A Coffee Cube é uma cafeteria diferenciada com especialidade em brunch e eventos.
                </p>
            </div>
            <div className="content-image">
                <img src="../projects/agil/MOCKUP AGIL.png" alt="" />
                <img src="../projects/agil/LUMOS PROJETOS AGIL TELAS.png" alt="" />
                <img src="../projects/agil/LUMOS PROJETOS AGIL PALETA DE CORES.png" alt="" />
                <img src="../projects/agil/HOME PAGE CONTADOR.png" alt="" />
            </div>
            <NavLink to={"/portfolio"} className={"button-content"}>Outros Projetos</NavLink>
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
                <ContactSection/>
            </div>
        </section>
    )

}

export default Coffee;