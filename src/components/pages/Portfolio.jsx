import React, { useState, useEffect } from "react";
import "../../portfolio.css";

function Portfolio() {
    const [filter, setFilter] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [animateProjects, setAnimateProjects] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const projects = [
                { type: "website", image: "project 1.png", title: "Projeto 1", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed ligula fermentum bibendum" },
                { type: "website", image: "project 2.png", title: "Projeto 2", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed ligula fermentum bibendum" },
                { type: "website", image: "project 3.png", title: "Projeto 3", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed ligula fermentum bibendum" },
                { type: "identidade-visual", image: "project 4.png", title: "Projeto 4", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed ligula fermentum bibendum" },
                { type: "identidade-visual", image: "project 5.png", title: "Projeto 5", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed ligula fermentum bibendum" },
                { type: "social-media", image: "project 6.png", title: "Projeto 6", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed ligula fermentum bibendum" }
            ];

            setVisibleProjects(
                projects.filter(project => !filter || project.type === filter)
            );
            setAnimateProjects(true); // Ativar a animação após atualizar os projetos visíveis
        });

        return () => clearTimeout(timer);
    }, [filter]);

    useEffect(() => {
        if (animateProjects) {
            setTimeout(() => {
                setAnimateProjects(false); // Desativar a animação após um intervalo de tempo
            }, 600); // Ajuste o valor conforme necessário para corresponder à duração da sua animação (em milissegundos)
        }
    }, [animateProjects]);

    const handleFilter = (type) => {
        setFilter(type);
    };
    
    return (
        <section className="portfolio-container" id="home">
            <div className="portfolio-title">
                <h2>
                    Confira alguns projetos <br />
                    <strong>luminosos</strong> que já realizamos.
                </h2>
            </div>
            <div className="project-container-filter">
                <div className="container-filters">
                    <button className="filter-btn" onClick={() => handleFilter(null)}>Todos</button>
                    <button className="filter-btn" onClick={() => handleFilter("website")}>Websites</button>
                    <button className="filter-btn" onClick={() => handleFilter("identidade-visual")}>Identidade Visual</button>
                    <button className="filter-btn" onClick={() => handleFilter("social-media")}>Social Media</button>
                    <button className="clear-filter-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z"></path>
                        </svg>
                        Limpar Filtro
                    </button>
                </div>
                <div className="projects">
                    {visibleProjects.map((project, index) => (
                        <div key={index} className={`item-project ${project.type} ${animateProjects ? 'fade-slide-in' : ''}`}>
                            <div className="image-project">
                                <img src={project.image} alt="" />
                            </div>
                            <div className="title-project">
                                <div className="title-div">
                                    <h2>{project.title}</h2>
                                    <div className="div"></div>
                                </div>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
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
                <form action="https://formspree.io/f/xdoqzlle" method="POST" className="form">
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
                        <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 14l-5-5l-5 5" />
                    </svg>
                </a>
            </div>
        </section>
    );
}

export default Portfolio; 