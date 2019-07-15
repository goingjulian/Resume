import React, { useState } from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';

export default props => {
    const [color, setColor] = useState(Konva.Util.getRandomColor())

    const timer = setTimeout(() => {
        setColor(Konva.Util.getRandomColor())
    }, 1000)

    function handleClick() {
        setColor(Konva.Util.getRandomColor())
    }

    return <Rect
        x={500}
        y={20}
        width={125}
        height={200}
        fill={color}
        shadowBlur={5}
        onClick={handleClick}
        draggable
    />
}