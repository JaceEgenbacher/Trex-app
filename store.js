import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';

import actionTypes from './lib/actionTypes';

const theInitialState = {
  tables: [],
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TABLES:
      return {
        ...state,
        tables: action.tables,
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
