import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactSection() {

    const [state, handleSubmit] = useForm("xdoqzlle");
    if (state.succeeded) {
        return alert("Proposta enviada, aguarde que retornamos em breve!")
            
    }

    return (
        <section className="contact-page" id="contato">
            <div className="title-contact">
                <h2>Entre em contato</h2>
                <div className="div-middle"></div>
            </div>
            <form onSubmit={handleSubmit} method="POST" className="form">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome e
                 da sua empresa" required autoComplete="name"/>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite um e-mail válido" required autoComplete="email"/>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="phone">Telefone</label>
                <input type="text" name="phone" id="phone" placeholder="Digite um número para contato" required autoComplete="tel"/>
                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" placeholder="Digite sua descrição aqui" required></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit">Solicitar Proposta</button>
            </form>
        </section>
    )

}

export default ContactSection;