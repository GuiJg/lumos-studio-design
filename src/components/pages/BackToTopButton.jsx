import React, { useState, useEffect } from 'react';
import '../../style.css'

function BackToTopButton() {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const threshold = 0.01 * windowHeight;

            if (scrollPosition > threshold) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <a href="#home" className="back-top" style={{opacity}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path id="path" fill="none" stroke="#e1e1e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
            </svg>
        </a>
    )

}

export default BackToTopButton;