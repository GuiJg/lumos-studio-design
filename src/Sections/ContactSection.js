import React from "react";

function ContactSection() {

    return (
        <section className="contact-page">
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
        </section>
    )

}

export default ContactSection;