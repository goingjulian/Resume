import React from 'react';
import "./ContactPage.css";
import Button from '../../sharedComponents/Button';

export default props => {
    return <div>
        <p>{props.text}</p>
        <ul className="socialMediaList">
            {props.socialMedia.map(item => {
                return <li key={item.name} className="socialMediaItem">
                    <Button href={item.url}>
                        <img src={`assets/${item.icon}`} alt="Social media icon" className="icon"/>
                        <p>{item.name}</p>
                    </Button>
                </li>
            })}
        </ul>
    </div>
}