import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import BaseWorld from './worlds/BaseWorld';
import InputManager from './InputManager';

export default props => {
  return <>
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <BaseWorld />
      </Layer>
    </Stage>
  </>
}