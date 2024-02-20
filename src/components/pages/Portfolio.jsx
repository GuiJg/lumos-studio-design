import React from "react";
import "../../portfolio.css"

function Portfolio() {

    return (
        <section className="portfolio-container" id="home">
            <div className="portfolio-title">
                <h2>
                    Confira alguns projetos <br />
                    <strong>luminosos</strong> que já realizamos.
                </h2>
            </div>
            <div className="project-container-filter">
                <div class="container-filters">
                    <button class="filter-btn" data-type="website">Websites</button>
                    <button class="filter-btn" data-type="identidade-visual">Identidade Visual</button>
                    <button class="filter-btn" data-type="social-media">Social Media</button>
                    <button class="clear-filter-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z"></path>
                        </svg>
                        Limpar Filtro
                    </button>
                </div>
                <div className="projects">
                    <div className="item-project website">
                        <div className="image-project">
                            <img src="project 1.png" alt="" />
                        </div>
                        <div className="title-project">
                            <div className="title-div">
                                <h2>Projeto 1</h2>
                                <div className="div"></div>
                            </div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Sed ac risus sed ligula fermentum bibendum
                            </p>
                        </div>
                    </div>
                    <div className="item-project website">
                        <div className="image-project">
                            <img src="project 2.png" alt="" />
                        </div>
                        <div className="title-project">
                            <div className="title-div">
                                <h2>Projeto 2</h2>
                                <div className="div"></div>
                            </div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Sed ac risus sed ligula fermentum bibendum
                            </p>
                        </div>
                    </div>
                    <div className="item-project website">
                        <div className="image-project">
                            <img src="project 3.png" alt="" />
                        </div>
                        <div className="title-project">
                            <div className="title-div">
                                <h2>Projeto 3</h2>
                                <div className="div"></div>
                            </div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Sed ac risus sed ligula fermentum bibendum
                            </p>
                        </div>
                    </div>
                    <div className="item-project identidade-visual">
                        <div className="image-project">
                            <img src="project 4.png" alt="" />
                        </div>
                        <div className="title-project">
                            <div className="title-div">
                                <h2>Projeto 4</h2>
                                <div className="div"></div>
                            </div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Sed ac risus sed ligula fermentum bibendum
                            </p>
                        </div>
                    </div>
                    <div className="item-project identidade-visual">
                        <div className="image-project">
                            <img src="project 5.png" alt="" />
                        </div>
                        <div className="title-project">
                            <div className="title-div">
                                <h2>Projeto 5</h2>
                                <div className="div"></div>
                            </div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Sed ac risus sed ligula fermentum bibendum
                            </p>
                        </div>
                    </div>
                    <div className="item-project social-media">
                        <div className="image-project">
                            <img src="project 6.png" alt="" />
                        </div>
                        <div className="title-project">
                            <div className="title-div">
                                <h2>Projeto 6</h2>
                                <div className="div"></div>
                            </div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Sed ac risus sed ligula fermentum bibendum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="phrase-project">
                <h2>
                    Vamos criar um projeto incrível juntos?
                </h2>

            </div>
            <div className="contact-page" id="contact-page">
                <div className="title-contact">
                    <h2>Entre em contato</h2>
                    <div className="div-middle"></div>
                </div>
                <form action="https://formspree.io/f/mkndndkd" method="POST" className="form">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome ou da sua empresa" required />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite um e-mail válido" required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" placeholder="Digite sua descrição aqui" required></textarea>
                    <button type="submit">Solicitar Proposta</button>
                </form>
                <a href="#home" className="back-top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
                    </svg>
                </a>
            </div>
        </section>
    )

}

export default Portfolio; 