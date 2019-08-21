import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import slides from "./slides.json";
import "./Main.css";
import NavButtons from './NavButtons';

const artificialHeightIncrease = 2000;
const slidesArrLength = Object.keys(slides).length;

export default props => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.addEventListener("scroll", determineCurrentSlide);
    }, []);

    function determineCurrentSlide() {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const maxScrollTopValue = document.body.clientHeight - window.innerHeight;
        const slidePXHeight = maxScrollTopValue / slidesArrLength;

        slides.forEach((slide, index) => {
            if (scrollTop >= slidePXHeight * index && scrollTop < slidePXHeight * (index + 1)) {
                setCurrentSlide(index)
            }
        });
    }

    function scrollToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < slidesArrLength) {
            const maxScrollTopValue = document.body.clientHeight - window.innerHeight;
            const slidePXHeight = maxScrollTopValue / slidesArrLength;

            document.documentElement.scrollTop = slidePXHeight * (slideIndex) + slidePXHeight / 2;
            document.body.scrollTop = slidePXHeight * (slideIndex) + slidePXHeight / 2;
        }
    }
    return <section style={{ height: `${window.innerHeight + artificialHeightIncrease}px` }}>
        <div className="main">
            <Slide {...slides[currentSlide]} />
        </div>
        <aside className="scrollPos">
            {slides.map((slide, index) => <div key={index} className={`progressDot ${currentSlide === index ? "active" : ""}`} />)}
        </aside>
        <NavButtons currentSlide={currentSlide} slidesArrLength={slidesArrLength} scrollToSlide={scrollToSlide}/>
    </section>
}