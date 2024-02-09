import React from "react";

function ServicesSection() {
    return (
        <section className="services-page">
            <div className="title-services">
                <h2>
                    O <strong>design</strong> que transforma.
                </h2>
                <div className="text-title-services">
                    <p>
                        O que fazemos vai muito além do <br />
                        design - é sobre projetar experiências <br />
                        excepcionais e cultivar o crescimento <br />
                        sustentável para cada cliente.
                    </p>
                    <p>
                        Somos arquitetos de experiências e <br /> 
                        impulsionadores de crescimento. <br /> 
                        Estamos aqui para iluminar o caminho, <br />
                        transformando ideias em realidade.
                    </p>
                </div>
            </div>
            <div className="services-container">
                <p>Lhe proporcionamos um serviço personalizado.</p>
                <div className="services-home">
                    <div className="services-item">
                        <span>
                            Desenvolvimento <br />
                            de WebSites
                        </span>
                        <p>
                            Criamos sites impactantes que não apenas funcionam, mas também encantam seus visitantes, combinando criatividade e precisão técnica.
                        </p>
                    </div>
                    <div className="services-item">
                        <span>
                            Social Media
                        </span>
                        <p>
                            Transformamos suas redes sociais em comunidades envolventes, contando sua história de maneira cativante e construindo relacionamentos genuínos com seu público.
                        </p>
                    </div>
                    <div className="services-item">
                        <span>
                            identidade Visual
                        </span>
                        <p>
                            Nossa identidade visual vai além de logotipos; é uma expressão autêntica da personalidade e valores da sua marca, deixando uma marca duradoura.
                        </p>
                    </div>
                </div>
                <button className="button-services">
                    <p>
                        Saiba mais
                    </p>
                </button>
            </div>
        </section>
    )
}

export default ServicesSection;