import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { NavLink } from 'react-router-dom'

function ContactSection() {
    const [state] = useForm("xdoqzlle");
    const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsPrivacyPolicyChecked(!isPrivacyPolicyChecked);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isPrivacyPolicyChecked) {
            // Se a política de privacidade não estiver marcada, não envie o formulário
            alert("Por favor, concorde com a política de privacidade.");
            return;
        }
    };

    if (state.succeeded) {
        return alert("Proposta enviada, aguarde que retornamos em breve!");
    }

    return (
        <section className="contact-page" id="contato">
            <div className="title-contact">
                <h2>Entre em contato</h2>
                <div className="div-middle"></div>
            </div>
            <form onSubmit={onSubmit} method="POST" className="form">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome e da sua empresa" required autoComplete="name" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite um e-mail válido" required autoComplete="email" />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="phone">Telefone</label>
                <input type="text" name="phone" id="phone" placeholder="Digite um número para contato" required autoComplete="tel" />
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
                <div className="checkbox-input">
                    <input type="checkbox" id="privacyPolicyCheckbox" checked={isPrivacyPolicyChecked} onChange={handleCheckboxChange} />
                    <label htmlFor="privacyPolicyCheckbox">Concordo com a <strong> <NavLink to={"/privacidade"} className={"navlink"}>política de privacidade</NavLink> </strong> da Lumos Studio Design</label>
                </div>
                <button type="submit">Solicitar Proposta</button>
            </form>
        </section>
    )
}

export default ContactSection;
