import { Rect, Group, Text } from 'react-konva';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../lib/actionTypes';

const cupSize = 50;

function levelToColor(level) {
  const perc = level * 100;

  let r = 0;
  let g = 0;
  const b = 0;

  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    r = Math.round(510 - 5.1 * perc);
    g = 255;
  }

  const h = r * 0x10000 + g * 0x100 + b * 0x1;
  return '#' + ('000000' + h.toString(16)).slice(-6);
}

function organizeData({ cups, x, y }) {
  const cupsClone = [...cups];

  const cupsLength = cupsClone.length;
  const halfCupsLength = Math.ceil(cupsLength / 2);

  const bottom = cupsClone.splice(halfCupsLength, cups.length);
  const top = cupsClone;

  const cupRows = [top, bottom];

  const coordCupRows = _.map(cupRows, (row, rowIndex) => {
    const yPixelOffset = cupSize * rowIndex;

    return _.map(row, (cup, cupIndex) => {
      const xPixelOffset = cupSize * cupIndex;

      const newCup = {
        ...cup,
        xPixelOffset,
        yPixelOffset,
      };

      return newCup;
    });
  });

  return coordCupRows.flat();
}

function updateTablePos(tables, id, x, y) {
  const newTables = _.map(tables, (theTable) => {
    if (theTable.id === id) {
      const newTable = { ...theTable };

      newTable.x = x;
      newTable.y = y;

      return newTable;
    }

    return theTable;
  });

  return {
    type: actionTypes.UPDATE_TABLES,
    tables: newTables,
  };
}

function roundToFifty(num) {
  return Math.round(num / 50) * 50;
}

const TableShape = ({ table }) => {
  const flattenedCups = organizeData(table);

  const tables = useSelector((state) => state.tables);
  const dispatch = useDispatch();

  function dragBounds(pos) {
    return {
      x: roundToFifty(pos.x),
      y: roundToFifty(pos.y),
    };
  }

  return (
    <Group
      draggable
      onDragEnd={(e) => {
        const x = e.target.x();
        const y = e.target.y();

        dispatch(updateTablePos(tables, table.id, x, y));
      }}
      key={table.id}
      x={table.x}
      y={table.y}
      dragBoundFunc={dragBounds}
    >
      {flattenedCups.map((cup) => (
        <Group x={cup.xPixelOffset} y={cup.yPixelOffset} key={cup.id}>
          <Rect
            width={cupSize}
            height={cupSize}
            fill={levelToColor(cup.level)}
            stroke="gray"
            strokeWidth={1}
          />
          <Text
            text={cup.id}
            fontSize={24}
            align="center"
            verticalAlign="middle"
            width={50}
            height={50}
          />
        </Group>
      ))}
    </Group>
  );
};

TableShape.propTypes = {
  table: PropTypes.object,
};

export default TableShape;
