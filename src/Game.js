import React from 'react';
import { Stage, Layer } from 'react-konva';
import BaseWorld from './worlds/BaseWorld';

export default props => {
  return <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <BaseWorld/>
    </Layer>
  </Stage>;
}