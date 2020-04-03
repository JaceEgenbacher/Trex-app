import { useSelector, Provider, ReactReduxContext } from 'react-redux';
import { useRef } from 'react';
import { Stage, Layer } from 'react-konva';

import React from 'react';

import TableShape from './TableShape';
const TablesCanvas = () => {
  const tables = useSelector((state) => state.tables, []);
  const canvasWrapperRef = useRef(null);

  const styles = {
    width: '1200px',
    height: '800px',
  };

  return (
    <div ref={canvasWrapperRef} style={styles}>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Stage width={1200} height={800} style={{ border: '1px solid grey' }}>
            <Provider store={store}>
              <Layer>
                {tables.map((table) => (
                  <TableShape table={table} key={table.id} />
                ))}
              </Layer>
            </Provider>
          </Stage>
        )}
      </ReactReduxContext.Consumer>
    </div>
  );
};

export default TablesCanvas;
