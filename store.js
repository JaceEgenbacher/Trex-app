import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';

import actionTypes from './lib/actionTypes';

const theInitialState = {
  tables: [],
  displayTableId: null,
  dragTableId: null,
};

export const reducer = (state = exampleInitialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case actionTypes.UPDATE_TABLES:
      return {
        ...state,
        tables: action.tables,
      };
    case actionTypes.UPDATE_DISPLAY:
      return {
        ...state,
        displayTableId: action.displayTableId,
      };
    case actionTypes.UPDATE_DRAG:
      return {
        ...state,
        dragTableId: action.dragTableId,
      };
    default:
      return state;
  }
};

export function initializeStore(initialState = theInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
