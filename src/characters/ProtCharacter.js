import React, { useState, useEffect } from 'react';
import prot from '../assets/sprites/prot.png'
import { Sprite } from 'react-konva';

export default props => {
    const [image, setImage] = useState(null);
    const [spriteX, setSpriteX] = useState(0);
    const sprite = React.createRef();

    useEffect(() => {
        const img = new window.Image();
        img.src = prot
        img.onload = () => {
            setImage(img)
        }
    })

    window.addEventListener('keydown', event => {
        if (event.keyCode === 37) {
            setSpriteX(spriteX - 10); //LEFT
            if (sprite.current) {
                sprite.current.start();
            }
        }
        else if (event.keyCode === 39) {
            setSpriteX(spriteX + 10); //RIGHT
        }
    });

    const animations = {
        idle: [
            //  x  y  w   h
            0, 0, 30, 40,
            30, 0, 30, 40,
            60, 0, 30, 40
            // 90, 0, 30, 40,
            // 120, 0, 30, 40
        ],
        punch: [
            160, 3, 30, 40,
            190, 3, 30, 40,
            220, 3, 30, 40
        ]
    }

    return <Sprite
        ref={sprite}
        x={spriteX}
        y={image ? props.y - (image.height * 5) + 30 : 0}
        scaleX={5}
        scaleY={5}
        image={image}
        animation='idle'
        animations={animations}
        frameRate={5}
        frameIndex={0}
    />
}