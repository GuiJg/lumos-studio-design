import React from "react";
import "../../services.css"
import SplideSlider from "./AutoScroll";

function Services() {

    return (
        <section className="services-cont">
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
            <div className="services">
                <span>O que fazemos no estúdio?</span>

                <div className="service-item">
                    <h2>Desenvolvimento de WebSites</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                        commodo consequat.
                    </p>
                </div>
                <div className="service-item">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br />
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Social Media Design</h2>
                </div>
                <div className="service-item">
                    <h2>Identidade Visual</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                        commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    );

}

export default Services; 