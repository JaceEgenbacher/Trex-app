import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Table = () => {
  const currentState = useSelector((state) => state);

  const [viewableTables, setViewableTables] = useState([]);

  return <div></div>;
};

export default Table;
