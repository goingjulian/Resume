import React from 'react';

export default props => {
    return <article className={props.className} >
        <h1>{props.title}</h1>

        <div className="content">
            {props.img ? <img src={`assets/${props.img}`} alt="" className="slideImg" /> : null}
            <p>{props.text}</p>
        </div>
    </article>
}