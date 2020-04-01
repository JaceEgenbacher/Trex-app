import { Layer, Rect, Text, Circle, Line } from 'react-konva';
import PropTypes from 'prop-types';

const TableShape = ({ table }) => {
  return <Rect x={table.x} y={table.y} width={100} height={100} fill="green" />;
};

TableShape.propTypes = {
  table: PropTypes.object,
};

export default TableShape;
