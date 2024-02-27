import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../../About.css"


function About() {


    return (
        <section className="about-container" id="home">
            <div className="about-text-container">
                <div className="about-title">
                    <p>sobre nós</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="white" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48" /></svg>
                </div>
                <div className="about-text">
                    <p>
                        Fundada em 2024, a Lumos Studios representa uma <br />
                        fusão inovadora entre arte e tecnologia. Somos um <br />
                        estúdio de design contemporâneo que atua como <br />
                        ponte entre esses dois mundos, unindo-os com um <br />
                        propósito comum: transformar visões em <br />
                        experiências digitais excepcionais.
                    </p>
                </div>
            </div>
            <div className="image-ex"></div>
            <div className="expertise-text-container">
                <div className="expertise-title">
                    <p>expertises</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="white" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48" /></svg>
                </div>
                <div className="expertise-text">
                    <p>
                        WEBDESIGN <br />
                        SOCIAL MEDIA <br />
                        IDENTIDADE VISUAL <br />
                        BRANDING <br />
                        EMBALAGEM
                    </p>
                </div>
            </div>
            <div className="valores-container">
                <p>
                    Iluminando caminhos através de <br />
                    inovação e minimalismo, assim <br />
                    transformando conhecimento em <br />
                    soluções.
                </p>
                <div className="div-vertical"></div>
                <span>
                    DESIGN MODERNO <br />
                    DESIGN EMPÁTICO <br />
                    CONHECIMENTO <br />
                    ILUMINAR
                </span>
            </div>
            <div className="container-timeline">
                <div className="timeline-title">
                    <p>Processos</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="white" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48" /></svg>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', boxShadow: '0px 0px', paddingLeft: '10%'}}
                        iconStyle={{ background: '#D3051E', width: '40px', height: '40px', left: '50.9%', top: '-40%', boxShadow: '0px 0px'}}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">1. Conhecer</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">
                            Consta em uma profunda imersão para entendermos diversos pontos que servirão como base para o plano de ação/estratégia
                        </h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', boxShadow: '0px 0px', paddingRight: '10%'}}
                        iconStyle={{ background: '#D3051E', width: '40px', height: '40px', left: '50.9%', top: '7%', boxShadow: '0px 0px', opacity: '0'}}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">2. Estruturar</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">
                            DEFINIMOS OS ELEMENTOS-CHAVE DO PROJETO, DELINEANDO A ARQUITETURA DE INFORMAÇÕES PARA GARANTIR UMA EXPERIÊNCIA DE USUÁRIO INTUITIVA E EFICAZ
                        </h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', boxShadow: '0px 0px', paddingLeft: '10%'}}
                        iconStyle={{ background: '#D3051E', width: '40px', height: '40px', left: '50.9%', top: '7%', boxShadow: '0px 0px', opacity: '0'}}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">3. Visualizar</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">
                            DAMOS VIDA AOS CONCEITOS VISUAIS QUE CAPTURAM A ESSÊNCIA DA SUA MARCA
                        </h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', boxShadow: '0px 0px', paddingRight: '10%'}}
                        iconStyle={{ background: '#D3051E', width: '40px', height: '40px', left: '50.9%', top: '7%', boxShadow: '0px 0px', opacity: '0'}}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">4. Materializar</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">
                            TRANSFORMAMOS OS CONCEITOS VISUAIS EM REALIDADE. CONSTRUINDO SITES, IDENTIDADES VISUAIS MARCANTES E CONTEÚDO ENVOLVENTE PARA SUAS REDES SOCIAIS
                        </h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'transparent', color: '#fff', boxShadow: '0px 0px', paddingLeft: '10%'}}
                        iconStyle={{ background: '#D3051E', width: '40px', height: '40px', left: '50.9%', top: '110%', boxShadow: '0px 0px'}}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">5. Integrar</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">
                            Com o projeto finalizado e aprovado, iremos implanta-lo em seu negócio, integrando o design com o cliente.
                        </h4>

                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
            <a href="#home" className="back-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
                </svg>
            </a>
        </section >
    )

}

export default About; 