import React from "react";
import '../../../../project.css'
import { NavLink } from "react-router-dom";
import ContactSection from "../../../layouts/ContactSection";

function SushiSocial() {

    return (
        <section className="project-content">
            <div className="content-title">
                <h1>Sushi Social Media</h1>
                <br />
                <p>
                    Neste projeto, elaboramos toda a estrutura do perfil do cliente, desenvolvendo sua identidade visual e definindo a mensagem transmitida pelas postagens. Optamos por utilizar o Instagram como principal plataforma de divulgação das peças de sushi, destacando a qualidade e a excelência dos produtos oferecidos. <br /> <br />

                    Para manter a autenticidade e transmitir a essência da culinária japonesa, escolhemos um design com elementos orientais, criando uma conexão visual imediata com o público-alvo. Essa abordagem visualmente impactante foi essencial para atrair a atenção dos seguidores e destacar a singularidade do produto oferecido pelo cliente.

                </p>
            </div>
            <div className="content-image">
                <img src="../projects/Social Media/Sushi Social/SOCIAL MEDIA SUSHI 1.png" alt="" />
                <img src="../projects/Social Media/Sushi Social/SOCIAL MEDIA SUSHI 2.png" alt="" />
                <img src="../projects/Social Media/Sushi Social/SOCIAL MEDIA SUSHI 3.png" alt="" />
            </div>
            <div className="buttons-container">
                <NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "button-content" : "non-active button-content"}>Outros Projetos</NavLink>
                <NavLink to={"/portfolio/cafe-social-media"} className={({ isActive }) => isActive ? "button-content" : "non-active button-content"}>Próximo <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0" /></path></g></g></svg></NavLink>
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

export default SushiSocial;