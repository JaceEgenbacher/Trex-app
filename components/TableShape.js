import { Rect, Group } from 'react-konva';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { useDispatch } from 'react-redux';

const cupSize = 50;

const levelToColor = (level) => {
  let color = 'green';

  if (level < 0.5) {
    color = 'yellow';
  }

  if (level < 0.2) {
    color = 'red';
  }

  return color;
};

function organizeData({ cups, x, y }) {
  const cupsLength = cups.length;
  const halfCupsLength = Math.ceil(cupsLength / 2);

  const bottom = cups.splice(halfCupsLength, cups.length);
  const top = cups;

  const cupRows = [top, bottom];

  const coordCupRows = _.map(cupRows, (row, rowIndex) => {
    const yPixelOffset = cupSize * rowIndex;

    return _.map(row, (cup, cupIndex) => {
      const xPixelOffset = cupSize * cupIndex;

      const newCup = {
        ...cup,
        x,
        y,
        xPixelOffset,
        yPixelOffset,
      };

      return newCup;
    });
  });

  return coordCupRows.flat();
}

const TableShape = ({ table }) => {
  const cups = organizeData(table);
  const dispatch = useDispatch();

  return (
    <Group>
      {cups.map((cup) => (
        <Rect
          key={cup.id}
          x={cup.x + cup.xPixelOffset}
          y={cup.y + cup.yPixelOffset}
          width={cupSize}
          height={cupSize}
          fill={levelToColor(cup.level)}
        />
      ))}
    </Group>
  );
};

TableShape.propTypes = {
  table: PropTypes.object,
};

export default TableShape;
