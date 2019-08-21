import React from 'react';
import { Rect } from 'react-konva';

export default props => {
    const height = props.height || 100;
    return <Rect
        x={0}
        y={window.innerHeight - height}
        width={window.innerWidth}
        height={height}
        fill={'green'} />
}