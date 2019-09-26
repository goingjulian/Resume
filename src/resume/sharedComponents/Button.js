import React from 'react';
import "./Button.css";

export default props => {
    return <button className="animatedButton">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    </button>
}