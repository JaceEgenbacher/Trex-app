import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import _ from 'lodash';

const theInitialState = {
  tables: [],
};

export const actionTypes = {
  UPDATE_TABLE: 'UPDATE_TABLE',
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TABLE:
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

export const startClock = (dispatch) => {
  return setInterval(async () => {
    try {
      const { tables } = await fakeApiCall();
      dispatch({ type: actionTypes.UPDATE_TABLE, tables });
    } catch (err) {
      console.error(err);
    }
  }, 3000);
};

export function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        tables: [
          {
            id: 1,
            x: 100,
            y: 100,
            cups: [
              {
                id: 1,
                level: Math.round(_.random(0.0, 1.0, true) * 100) / 100,
              },
              {
                id: 2,
                level: Math.round(_.random(0.0, 1.0, true) * 100) / 100,
              },
            ],
          },
          {
            id: 2,
            x: 100,
            y: 100,
            cups: [
              {
                id: 3,
                level: Math.round(_.random(0.0, 1.0, true) * 100) / 100,
              },
              {
                id: 4,
                level: Math.round(_.random(0.0, 1.0, true) * 100) / 100,
              },
            ],
          },
        ],
      });
    }, 0);
  });
}
