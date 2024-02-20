import React from "react";
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
            <a href="#home" className="back-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
                </svg>
            </a>
        </section>
    )

}

export default About; 