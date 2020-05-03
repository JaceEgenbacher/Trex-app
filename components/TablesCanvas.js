import { useSelector, Provider, ReactReduxContext } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import useResizeAware from 'react-resize-aware';

import React from 'react';

import TableShape from './TableShape';

const TablesCanvas = () => {
  const tables = useSelector((state) => state.tables, []);
  const [resizeListener, size] = useResizeAware();

  const styles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    border: '1px solid #fff',
  };

  const stageWidth = 1000;
  const stageHeight = 650;

  function getScale() {
    return size.width / stageWidth;
  }

  function getScaledWidth() {
    return stageWidth * getScale();
  }

  function getScaledHeight() {
    return stageHeight * getScale();
  }

  return (
    <div style={styles}>
      {resizeListener}
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Stage
            width={size.width}
            height={getScaledHeight()}
            scaleX={getScale()}
            scaleY={getScale()}
          >
            <Provider store={store}>
              <Layer>
                {tables.map((table) => (
                  <TableShape table={table} key={table.id} scale={getScale()} />
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
