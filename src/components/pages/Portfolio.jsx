import React, { useState, useEffect } from "react";
import "../../portfolio.css";
import ContactSection from "../layouts/ContactSection";
import { NavLink } from "react-router-dom";

function Portfolio() {
    const [filter, setFilter] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [animateProjects, setAnimateProjects] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const projects = [
                {
                    link: "/portfolio/agil-gestao-contabil",
                    type: "website",
                    image: "/projects/agil/LUMOS PROJETOS AGIL CAPA 1.png",
                    title: "Agil Gestão Contabil",
                    description: "A Ágil Contabilidade é um escritorio de contabilidade que se destaca por oferecer um atendimento personalizado e cuidado, com o objetivo de proporcionar a melhor gestão contábil para seus clientes."
                },
                {
                    link: "/portfolio/vandelson-junior-advogados",
                    type: "website",
                    image: "/projects/VandelsonAdv/LUMOS PROJETOS CAPA ADVOCACIA.png",
                    title: "Vandelson Junior Advocacia",
                    description: "O Escritório Vandelson Júnior é uma firma de advocacia comprometida com a excelência."
                },
                {
                    link: "/portfolio/coffee-cube",
                    type: "website",
                    image: "/projects/CoffeeCube/CAPA COFFEE CUBE.png",
                    title: "Coffee Cube",
                    description: "A Coffee Cube é uma cafeteria especializada em expressos e brunchs."
                },
                {
                    link: "/portfolio/sushi-social-media",
                    type: "social-media",
                    image: "/projects/Social Media/Sushi Social/CAPA SOCIAL MEDIA SUSHI.png",
                    title: "Sushi Social Media",
                    description: "Neste projeto, elaboramos toda a estrutura do perfil do cliente, desenvolvendo sua identidade visual e definindo a mensagem transmitida pelas postagens."
                },
                {
                    link: "/portfolio/cafe-social-media",
                    type: "social-media",
                    image: "/projects/Social Media/Coffee Social/CAPA SOCIAL MEDIA COFFEE.png",
                    title: "Café Social Media",
                    description: "Neste projeto, buscamos representar os produtos e serviços da Cafeteria de forma vibrante e atrativa"
                },
                {
                    link: "/portfolio/advocacia-social-media",
                    type: "social-media",
                    image: "/projects/Social Media/Advocacia Social/CAPA SOCIAL MEDIA ADV.png",
                    title: "Advocacia Social Media",
                    description: "Nossa equipe criou postagens chamativas e elegantemente elaboradas para o Instagram de um renomado escritório de advocacia."
                }
            ];

            setVisibleProjects(
                projects.filter(project => !filter || project.type === filter)
            );
            setAnimateProjects(true);
        });

        return () => clearTimeout(timer);
    }, [filter]);

    useEffect(() => {
        if (animateProjects) {
            setTimeout(() => {
                setAnimateProjects(false);
            }, 600);
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
                        <NavLink to={project.link} key={index} className={`item-project ${project.type} ${animateProjects ? 'fade-slide-in' : 'item-project'}`}>
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
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="phrase-project">
                <h2>
                    Vamos criar um projeto incrível juntos?
                </h2>
            </div>
            <ContactSection />
        </section>
    );
}

export default Portfolio; 