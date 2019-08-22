import React from 'react';

export default props => {
    return <footer className="navButtons">
        <button onClick={() => props.scrollToSlide(props.currentSlide - 1)} disabled={props.currentSlide > 0 ? false : true}>Previous</button>
        <button onClick={() => props.scrollToSlide(props.currentSlide + 1)} disabled={props.currentSlide < props.slidesArrLength - 1 ? false : true}>Next</button>
    </footer>
}