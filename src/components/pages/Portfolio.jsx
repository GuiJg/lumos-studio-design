import React, { useState, useEffect } from "react";
import "../../portfolio.css";
import ContactSection from "../layouts/ContactSection";

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
                </div>
                <div className="projects">
                    {visibleProjects.map((project, index) => (
                        <div key={index} className={`item-project ${project.type} ${animateProjects ? 'fade-slide-in' : ''}`}>
                            <div className="image-project">
                                <img src={project.image} alt="" />
                            </div>
                            <div className="title-project" id="portfolio">
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
            <ContactSection/>
        </section>
    );
}

export default Portfolio; 