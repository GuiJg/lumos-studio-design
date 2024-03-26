import React from "react";
import { NavLink } from "react-router-dom";

function ProjectSection() {
    return (
        <section className="project-page">
            <div className="title-page">
                <h2>Projetos</h2>
            </div>
            <div className="container-project">
                <NavLink to={'/portfolio'} className="item-project">
                    <div className="image-project">
                        <img src="/projects/agil/LUMOS PROJETOS AGIL CAPA 1.png" alt="" />
                    </div>
                    <div className="title-project">
                        <div className="title-div">
                            <h2>Ágil Gestão Contabil</h2>
                            <div className="div"></div>
                        </div>
                        <p>
                            A Ágil Contabilidade é um escritorio de contabilidade que se destaca por oferecer um atendimento personalizado e cuidado, com o objetivo de proporcionar a melhor gestão contábil para seus clientes.
                        </p>
                    </div>
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
                    <div className="image-project">
                        <img src="/projects/VandelsonAdv/LUMOS PROJETOS CAPA ADVOCACIA.png" alt="" />
                    </div>
                    <div className="title-project">
                        <div className="title-div">
                            <h2>Vandelson Junior Advocacia</h2>
                            <div className="div"></div>
                        </div>
                        <p>
                            O Escritório Vandelson Júnior é uma firma de advocacia comprometida com a excelência.
                        </p>
                    </div>
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
                    <div className="image-project">
                        <img src="/projects/CoffeeCube/CAPA COFFEE CUBE.png" alt="" />
                    </div>
                    <div className="title-project">
                        <div className="title-div">
                            <h2>Coffee Cube</h2>
                            <div className="div"></div>
                        </div>
                        <p>
                            A Coffee Cube é uma cafeteria especializada em expressos e brunchs.
                        </p>
                    </div>
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
                    <div className="image-project">
                        <img src="/projects/Social Media/Sushi Social/CAPA SOCIAL MEDIA SUSHI.png" alt="" />
                    </div>
                    <div className="title-project">
                        <div className="title-div">
                            <h2>Projeto 4</h2>
                            <div className="div"></div>
                        </div>
                        <p>
                            Neste projeto, elaboramos toda a estrutura do perfil do cliente, desenvolvendo sua identidade visual e definindo a mensagem transmitida pelas postagens.
                        </p>
                    </div>
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
                    <div className="image-project">
                        <img src="/projects/Social Media/Coffee Social/CAPA SOCIAL MEDIA COFFEE.png" alt="" />
                    </div>
                    <div className="title-project">
                        <div className="title-div">
                            <h2>Cafeteria Social Media</h2>
                            <div className="div"></div>
                        </div>
                        <p>
                            Neste projeto, buscamos representar os produtos e serviços da Cafeteria de forma vibrante e atrativa.
                        </p>
                    </div>
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
                    <div className="image-project">
                        <img src="/projects/Social Media/Advocacia Social/CAPA SOCIAL MEDIA ADV.png" alt="" />
                    </div>
                    <div className="title-project">
                        <div className="title-div">
                            <h2>Advocacia Social Media</h2>
                            <div className="div"></div>
                        </div>
                        <p>
                            Nossa equipe criou postagens chamativas e elegantemente elaboradas para o Instagram de um renomado escritório de advocacia.
                        </p>
                    </div>
                </NavLink>
            </div>
            <NavLink to={'/portfolio'} className="button-project">
                <p>
                    Saiba mais
                </p>
            </NavLink>
            <div className="phrase-brand">
                <p>
                    Com uma equipe capacitada <br />
                    e profissional...
                </p>
                <h2 id="contact">
                    Modernizamos <br />
                    <strong>a sua marca.</strong>
                </h2>
            </div>
        </section>
    )
}

export default ProjectSection;