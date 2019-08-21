import React, { useState } from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';
import Protagonist from '../characters/Protagonist';
import Grass from './worldAssets/Grass';

export default props => {
    const grassHeight = 100;
    const yBaseLine = window.innerHeight - grassHeight;

    return <>
        <Grass height={grassHeight} />

        <Protagonist x={20} y={yBaseLine} />
    </>
}