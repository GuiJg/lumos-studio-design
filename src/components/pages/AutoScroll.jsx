import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/splide/dist/css/splide.min.css';

function SplideSlider() {

    return (
        <Splide options={{
            type: 'loop',
            gap: '-8.5rem',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 2,
            }
        }}
            extensions={{ AutoScroll }}

        >
            <SplideSlide className="container-image">
                <img src="https://via.placeholder.com/150" alt="1" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="https://via.placeholder.com/150" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="https://via.placeholder.com/150" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="https://via.placeholder.com/150" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="https://via.placeholder.com/150" alt="2" />
            </SplideSlide>
            <SplideSlide className="container-image">
                <img src="https://via.placeholder.com/150" alt="2" />
            </SplideSlide>
        </Splide>

    );

}

export default SplideSlider; 