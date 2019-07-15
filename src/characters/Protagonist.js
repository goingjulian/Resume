import React, { useState } from 'react';
import ProtCharacter from './ProtCharacter';

export default props => {
    // const [spriteX, setSpriteX] = useState(0);

    // window.addEventListener('keydown', event => {
    //     if(event.keyCode === 37) setSpriteX(spriteX - 5); //LEFT
    //     else if(event.keyCode === 39) setSpriteX(spriteX + 5); //RIGHT
    // });

    // console.log(spriteX)

    return <ProtCharacter y={props.y}
    />

}