import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../privacy.css'

function Privacy() {

    return (
        <section className="privacy-container" id='home'>
            <h1>Política de Privacidade</h1>
            <br />
            <p>
                A sua privacidade é importante para nós. É política do Lumos Studio Design respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <NavLink to={"/"} className={"navlink"}>Lumos Studio Design</NavLink> , e outros sites que possuímos e operamos.
            </p>
            <br />
            <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <br />
            <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <br />
            <p>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <br />
            <p>
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <br />
            <p>
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <br />
            <p>
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
            </p>
            <br />
            <span>
                Compromisso do Usuário
            </span>
            <br />
            <p>
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Lumos Studio Design oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <br />
            <ul>
                <li>
                    A- Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                </li>
                <li>
                    B- Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, 166bet ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                </li>
                <li>
                    C- Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Lumos Studio Design, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                </li>
            </ul>
            <br />
            <span>
                Mais informações
            </span>
            <br />
            <p>
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            <br />
            <p>
                Esta política é efetiva a partir de 13 Março 2024 03:42
            </p>
        </section>
    )

}

export default Privacy;