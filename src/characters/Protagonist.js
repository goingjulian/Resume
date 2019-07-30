import React, { useState, useEffect } from 'react';
import prot from '../assets/sprites/prot.png'
import { Sprite } from 'react-konva';
import Konva from 'konva';

export default props => {
    const [image, setImage] = useState(null);
    const sprite = React.createRef();

    if(props.moving) sprite.current.start();

    useEffect(() => {
        const img = new window.Image();
        img.src = prot
        img.onload = () => {
            setImage(img)
        }
    })

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
        x={props.x}
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