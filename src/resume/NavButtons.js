import React from 'react';

export default props => {
    return <>
        <footer className="navMenu">
            <p>Scroll om te navigeren</p>
            <div className="navButtons">
                {props.currentSlide > 0 ?
                    <button onClick={() => props.scrollToSlide(props.currentSlide - 1)}>
                        <img src="assets/arrowUp.png" alt="Previous slide" />
                    </button>
                    : null}
                {props.currentSlide < props.slidesArrLength - 1 ?
                    <button onClick={() => props.scrollToSlide(props.currentSlide + 1)}>
                        <img src="assets/arrowDwn.png" alt="Next slide" />
                    </button>
                    : null}
            </div>

        </footer>
    </>
}