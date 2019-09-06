import React, { useState } from 'react';
import "./ProjectsOverview.css";

export default props => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = props.projects[currentProjectIndex];

    function goToNextProject() {
        if (currentProjectIndex < props.projects.length - 1) setCurrentProjectIndex(currentProjectIndex + 1);
        else setCurrentProjectIndex(0);
    }

    function goToPreviousProject() {
        if (currentProjectIndex > 0) setCurrentProjectIndex(currentProjectIndex - 1);
        else setCurrentProjectIndex(props.projects.length - 1);
    }

    return <>
        <button className="leftArrow" onClick={goToPreviousProject}>
            <img src="assets/arrowUp.png" alt="Previous project"/>
        </button>
        <article className="project">
            <h2>{currentProject.title} | {currentProject.year}</h2>
            <h3>{currentProject.tech}</h3>
            <p>{currentProject.subText}</p>
        </article>
        <button className="rightArrow" onClick={goToNextProject}>
            <img src="assets/arrowUp.png" alt="Next project"/>
        </button>
    </>
}