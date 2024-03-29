import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/splide/dist/css/splide.min.css';

function SplideSlider() {

    return (
        <Splide options={{
            type: 'loop',
            gap: '-15rem',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: true,
                rewind: true,
                speed: 2, 
            }
        }}
            extensions={{ AutoScroll }}

        >
            <SplideSlide className="container-image">
                <img src="/projects/agil/LUMOS PROJETOS AGIL CAPA 1.png" alt="Representação gráfica de um notebook com um site demonstrando" /> 
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="/projects/Social Media/Sushi Social/CAPA SOCIAL MEDIA SUSHI.png" alt="Representação gráfica de um post no instagram com artes relacioado a sushi" /> 
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="/projects/CoffeeCube/CAPA COFFEE CUBE.png" alt="Representação gráfica de um notebook com um site demonstrando" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="/projects/Social Media/Coffee Social/CAPA SOCIAL MEDIA COFFEE.png" alt="Representação gráfica de um post no instagram com artes relacioado a café" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="/projects/VandelsonAdv/LUMOS PROJETOS CAPA ADVOCACIA.png" alt="Representação gráfica de um notebook com um site demonstrando" />
            </SplideSlide>
            <SplideSlide className="container-image"> 
                <img src="/projects/Social Media/Advocacia Social/CAPA SOCIAL MEDIA ADV.png" alt="Representação gráfica de um post no instagram com artes relacioado a advocacia" />
            </SplideSlide>
        </Splide>

    );

}

export default SplideSlider; 