import React from 'react';
import { Stage, Layer } from 'react-konva';
import ColoredRect from './ColoredRect';
import BaseWorld from './worlds/BaseWorld';

function App() {
  return <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <BaseWorld>
        <ColoredRect />
      </BaseWorld>
    </Layer>
  </Stage>;
}

export default App;
