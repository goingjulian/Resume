import React from 'react';
import "./GeneralInfo.css";

export default props => {
    return <>
        {props.img ? <img src={`assets/${props.img}`} alt="" className="slideImg" /> : null}
        <p>{props.text}</p>
    </>
}