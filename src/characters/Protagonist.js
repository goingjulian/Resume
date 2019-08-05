import React, { useState, useEffect } from 'react';
import prot from '../assets/sprites/prot.png'
import { Sprite } from 'react-konva';
import Konva from 'konva';
import InputManager from '../InputManager';
let x = 0;
export default props => {
    const [image, setImage] = useState(null);
    const sprite = React.createRef();

    const [spriteX, setSpriteX] = useState(0);
    useEffect(() => {
        console.log('call')
        // window.requestAnimationFrame(() => console.log('poo'))

        if (image === null) {
            window.setInterval(update, 10)
            const img = new window.Image();
            img.src = prot
            img.onload = () => {
                setImage(img)
            }
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

    function update() {
        // console.log(sprite)
        if (sprite !== null) {
            const keys = InputManager.getInput()

            if (keys.left) {
                // console.log('setL', x);
                x -= 20;
                // setSpriteX(spriteX - 10)
                // if (sprite) sprite.current.start();
            } else if (keys.right) {
                x += 20;
                // console.log(x + 10)
                // console.log('setR', x);

                // setSpriteX(spriteX + 10)
                // if (sprite) sprite.current.start();
            } else {
                // sprite.current.stop();
            }

            if(x !== spriteX) setSpriteX(x)
        }

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