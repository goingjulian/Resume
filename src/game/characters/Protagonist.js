import React, { useState, useEffect } from 'react';
import prot from '../assets/sprites/prot.png'
import { Sprite } from 'react-konva';
import Konva from 'konva';
import InputManager from '../InputManager.js';

let tempX = 0;
let sprite = null;

const fps60TimerValue = 17

export default props => {
    const [image, setImage] = useState(null);
    if (sprite === null) sprite = React.createRef();

    const [spriteX, setSpriteX] = useState(0);

    useEffect(() => {
        if (image === null) {
            window.setInterval(update, fps60TimerValue)
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
        const keys = InputManager.getInput()

        if (keys.left) {
            tempX -= 20
            sprite.current.start()
        }
        else if (keys.right) {
            tempX += 20
            sprite.current.start()
        }
        else sprite.current.stop()

        if (tempX !== spriteX) {
            setSpriteX(tempX)
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