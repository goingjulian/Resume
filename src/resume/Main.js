import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import slides from "./slides.json";
import "./Main.css";

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
        console.log(slideIndex)

        if (slideIndex >= 0 && slideIndex < slidesArrLength) {
            const maxScrollTopValue = document.body.clientHeight - window.innerHeight;
            const slidePXHeight = maxScrollTopValue / slidesArrLength;

            document.documentElement.scrollTop = slidePXHeight * (slideIndex) + slidePXHeight / 2;
            document.body.scrollTop = slidePXHeight * (slideIndex) + slidePXHeight / 2;
        }
    }
    console.log("cur", currentSlide)
    return <section style={{ height: `${window.innerHeight + artificialHeightIncrease}px` }}>
        <div className="main">
            <Slide {...slides[currentSlide]} />
        </div>
        <aside className="scrollPos">
            {slides.map((slide, index) => <div key={index} className={`progressDot ${currentSlide === index ? "active" : ""}`} />)}
        </aside>
        <footer className="navButtons">
            {currentSlide > 0 ? <button onClick={() => scrollToSlide(currentSlide - 1)}>Previous</button> : null}
            {currentSlide < slidesArrLength - 1 ? <button onClick={() => scrollToSlide(currentSlide + 1)}>Next</button> : null}
        </footer>
    </section>
}