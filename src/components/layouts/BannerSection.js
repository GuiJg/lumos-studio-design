import React, { useEffect } from "react";
import Splide from "@splidejs/splide";

import "../../style.css"

function BannerSection() {

    useEffect(() => {
        const splide = new Splide('.splide', {
            type: 'fade',
            rewind: true,
            autoplay: true,
            pauseOnHover: false,
            interval: 3000,
        });

        splide.mount();
    }, []);

    return (
        <section className="banner-main" id="home">
            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide slide-banner slider1">
                            <div className="text-banner">
                                <p>
                                    CREATIVE <br />
                                    STUDIO
                                </p>
                                <a href="#contact">
                                    <p>
                                        FAÇA O SEU<br />
                                        ORÇAMENTO!
                                    </p>
                                </a>
                            </div>
                            <div className="title-banner">
                                <h1>
                                    Um estúdio que <br />
                                    te faz crescer.
                                </h1>
                            </div>
                            <a href="#contact" id="reverse-banner">
                                <p>
                                    FAÇA O SEU<br />
                                    ORÇAMENTO!
                                </p>
                            </a>
                        </li>
                        <li className="splide__slide slide-banner slider2">
                            <div className="text-banner">
                                <p>
                                    CREATIVE <br />
                                    STUDIO
                                </p>
                                <a href="#contact">
                                    <p>
                                        FAÇA O SEU<br />
                                        ORÇAMENTO!
                                    </p>
                                </a>
                            </div>
                            <div className="title-banner">
                                <h1>
                                    Designs impactantes que transformam a sua marca.
                                </h1>
                            </div>
                            <a href="#contact" id="reverse-banner">
                                <p>
                                    FAÇA O SEU<br />
                                    ORÇAMENTO!
                                </p>
                            </a>
                        </li>
                        <li className="splide__slide slide-banner slider3">
                            <div className="text-banner">
                                <p>
                                    CREATIVE <br />
                                    STUDIO
                                </p>
                                <a href="#contact">
                                    <p>
                                        FAÇA O SEU<br />
                                        ORÇAMENTO!
                                    </p>
                                </a>
                            </div>
                            <div className="title-banner">
                                <h1>
                                    Sua tragetória é <br />
                                    a nossa prioridade.
                                </h1>
                            </div>
                            <a href="#contact" id="reverse-banner">
                                <p>
                                    FAÇA O SEU<br />
                                    ORÇAMENTO!
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;