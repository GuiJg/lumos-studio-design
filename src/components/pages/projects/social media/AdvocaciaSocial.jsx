import React from "react";
import '../../../../project.css'
import { NavLink } from "react-router-dom";
import ContactSection from "../../../layouts/ContactSection";

function AdvocaciaSocial() {

    return (
        <section className="project-content">
            <div className="content-title">
                <h1>Advocacia Social Media</h1>
                <br />
                <p>
                    Após uma análise minuciosa da paleta de cores e do estilo mais adequado, nossa equipe criou postagens chamativas e elegantemente elaboradas para o Instagram de um renomado escritório de advocacia. <br /> <br />
                    A estratégia adotada consistiu em mesclar conteúdos relacionados à própria empresa, destacando seus valores e diferenciais, com temas relevantes da área jurídica.
                    O objetivo principal era informar e engajar a audiência, oferecendo não apenas insights sobre os serviços oferecidos pelo escritório, mas também dicas legais e esclarecimentos sobre questões jurídicas atuais. A abordagem equilibrada entre conteúdo informativo e promocional foi fundamental para construir uma presença online sólida e confiável, alinhada com a reputação e os valores da marca do cliente.

                </p>
            </div>
            <div className="content-image">
                <img src="../projects/Social Media/Advocacia Social/SOCIAL MEDIA ADV.png" alt="" />
                <img src="../projects/Social Media/Advocacia Social/SOCIAL MEDIA ADV 2.png" alt="" />
                <img src="../projects/Social Media/Advocacia Social/SOCIAL MEDIA ADV 3.png" alt="" />
                <img src="../projects/Social Media/Advocacia Social/SOCIAL MEDIA ADV MOCKUP.png" alt="" />
            </div>
            <div className="buttons-container">
                <NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "button-content" : "non-active button-content"}>Outros Projetos</NavLink>
                <NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "button-content" : "non-active button-content"}>Próximo <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0" /></path></g></g></svg></NavLink>
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

export default AdvocaciaSocial;