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
                <img src="./mockup-services.png" alt="mockup escuro" /> 
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="./mockup-services.png" alt="2" /> 
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="./mockup-services.png" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="./mockup-services.png" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="./mockup-services.png" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="./mockup-services.png" alt="2" />
            </SplideSlide>
        </Splide>

    );

}

export default SplideSlider; 