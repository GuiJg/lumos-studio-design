// src/Header.js

import React from 'react';

function AboutSection() {
    return (
        <section className="about-page">
            <div className="title-about">
                <p>Olá, tudo bem? </p>
                <h2>
                    Somos a <br />
                    Lumos Studio.
                </h2>
                <button class="learn-more">
                    <span aria-hidden="true" class="circle">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Nos conheça melhor.</span>
                </button>
            </div>
            <div className="text-description">
                <p>
                    Um estúdio de design que busca iluminar o <br />
                    caminho para o sucesso de nossos clientes, <br />
                    destacando-se no cenário moderno com <br />
                    criações que transcendem as expectativas.
                </p>

                <span>
                    Acreditamos que o design é <br />
                    mais do que simplesmente <br />
                    estética - é uma poderosa <br />
                    ferramenta para impulsionar o <br />
                    crescimento e a visibilidade de <br />
                    nossos clientes.
                </span>
            </div>
        </section>
    );
}

export default AboutSection;
