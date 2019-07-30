import React, { useState } from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';
import Protagonist from '../characters/Protagonist';
import Grass from './worldAssets/Grass';

export default props => {
    const grassHeight = 100;
    const yBaseLine = window.innerHeight - grassHeight;

    const [protX, setProtX] = useState(0);

    const [newPos, setNewPos] = useState(0);

    window.addEventListener('keydown', event => {
        // if (newPos === protX) setNewPos(0);

        if (event.keyCode === 39 && newPos === 0) {
            // setNewPos(protX + 10);
            setProtX(protX + 10);
        }
        // console.log('key')
        // console.log(event);
    });

    window.addEventListener('keyup', event => {
        console.log('stop')
        setNewPos(0);
    });

    return <>
        <Grass height={grassHeight} />

        <Protagonist x={protX} y={yBaseLine} />
    </>
}