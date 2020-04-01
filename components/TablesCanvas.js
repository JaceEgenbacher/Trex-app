import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';

import TableShape from './TableShape';

const TablesCanvas = () => {
  const { tables } = useSelector((state) => ({ tables: state.tables }), []);

  const canvasWrapperRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (canvasWrapperRef.current) {
      setHeight(canvasWrapperRef.current.offsetHeight);
      setWidth(canvasWrapperRef.current.offsetWidth);
    }
  }, [canvasWrapperRef]);

  return (
    <div
      className="canvas-wrapper"
      ref={canvasWrapperRef}
      style={{ height: '100vh' }}
    >
      <Stage
        width={width}
        height={height}
        style={{ 'border-right': '1px solid grey' }}
      >
        <Layer>
          {tables.map((table) => (
            <TableShape table={table} key={table.id} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default TablesCanvas;
