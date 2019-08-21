import React from 'react';

export default props => {
    return <footer className="navButtons">
        {props.currentSlide > 0 ? <button onClick={() => props.scrollToSlide(props.currentSlide - 1)}>Previous</button> : null}
        {props.currentSlide < props.slidesArrLength - 1 ? <button onClick={() => props.scrollToSlide(props.currentSlide + 1)}>Next</button> : null}
    </footer>
}