import { useSelector } from 'react-redux';

const TableDetails = () => {
  const isDisplayed = useSelector((state) => state.displayTableId, null);
  const isDrag = useSelector((state) => state.dragTableId, null);
  if (isDisplayed == 0) {
    return null;
  }
  return (
    <div>
      <h1> {isDisplayed} </h1> <h1> {isDrag} </h1>
    </div>
  );
};

export default TableDetails;
