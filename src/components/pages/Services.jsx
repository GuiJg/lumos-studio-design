import React from "react";
import "../../services.css"
import SplideSlider from "./AutoScroll";

function Services() {

    return (
        <section className="services-cont" id="home">
            <div className="service-title">
                <h2>
                    <strong>Designs com</strong> <br />
                    Personalidade.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                    elit. Sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div class="main__action">
                <a class="main__scroll" href="#service">
                    <div class="main__scroll-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path fill="white" d="m205.66 149.66l-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32" />
                        </svg>
                    </div>
                    <span class="main__scroll-text">Scroll</span>
                </a>
            </div>
            <div className="container-slider">
                <SplideSlider />
            </div>
            <div className="div" id="div-service"></div>
            <div className="services" id="service">
                <span>O que fazemos no estúdio?</span>

                <div className="service-item">
                    <div className="text-item">
                        <h2>Desenvolvimento de WebSites</h2>
                        <p>
                            Criamos sites impactantes que não apenas funcionam, mas também encantam seus visitantes, combinando criatividade e precisão técnica.
                        </p>
                    </div>
                    <div className="border"></div>
                </div>
                <div className="service-item">
                    <div className="text-item" id="reverse">
                        <h2>Social Media Design</h2>
                        <p>
                            Transformamos suas redes sociais em comunidades envolventes, contando sua história de maneira cativante e construindo relacionamentos genuínos com seu público.
                        </p>
                    </div>
                    <div className="border" id="reverse"></div>
                </div>
                <div className="service-item">
                    <div className="text-item">
                        <h2>Identidade Visual</h2>
                        <p>
                            Nossa identidade visual vai além de logotipos; é uma expressão autêntica da personalidade e valores da sua marca, deixando uma marca duradoura.
                        </p>
                    </div>
                    <div className="border"></div>
                </div>
            </div>
            <div className="lumos-different">
                <h3>
                    O que faz a <br />
                    <strong>Lumos</strong> ser diferente?
                </h3>
                <div className="different-container">
                    <div className="different-item">
                        <span>1.</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eaque perspiciatis culpa id odit doloribus officiis hic velit amet.
                        </p>
                    </div>
                    <div className="different-item">
                        <span>2.</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eaque perspiciatis culpa id odit doloribus officiis hic velit amet.
                        </p>
                    </div>
                    <div className="different-item">
                        <span>3.</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eaque perspiciatis culpa id odit doloribus officiis hic velit amet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom-section-service">
                <h2>
                    Fazemos tudo isso de forma <br />
                    significativa.
                </h2>
            </div>
        </section>
    );

}

export default Services; 