import React from 'react';
import "./ContactPage.css";

export default props => {
    return <div>
        <p>{props.text}</p>
        <ul className="socialMediaList">
            {props.socialMedia.map(item => {
                console.log(item)
                return <li key={item.name} className="socialMediaItem">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img src={`assets/${item.icon}`} alt="Social media icon"/>
                        <p>{item.name}</p>
                    </a>
                </li>
            })}
        </ul>
    </div>
}