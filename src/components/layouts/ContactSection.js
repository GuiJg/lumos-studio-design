import React from "react";

function ContactSection() {

    return (
        <section className="contact-page" id="contato">
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
                    <path id="path" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
                </svg>
            </a>
        </section>
    )

}

export default ContactSection;