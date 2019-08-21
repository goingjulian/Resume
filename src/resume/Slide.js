import React from 'react';

export default props => {
    return <article>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </article>
}