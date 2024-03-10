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
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
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
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
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
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
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
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
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
                </NavLink>
                <NavLink to={'/portfolio'} className="item-project">
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