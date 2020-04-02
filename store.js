import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';

const theInitialState = {
  tables: [],
};
const actionTypes = {
  UPDATE_TABLES: 'UPDATE_TABLES',
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

function randomCupLevel() {
  const randomNum = _.random(0.0, 1.0, true);
  const randomNumRounded = _.round(randomNum, 2);
  return randomNumRounded;
}

export const startClock = (dispatch) => {
  return setInterval(async () => {
    try {
      const { tables } = await fakeApiCall();
      dispatch({ type: actionTypes.UPDATE_TABLES, tables });
    } catch (err) {
      console.error(err);
    }
  }, 3000);
};

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        tables: [
          {
            id: 1,
            x: 0,
            y: 0,
            cups: [
              {
                id: 1,
                level: randomCupLevel(),
              },
              {
                id: 2,
                level: randomCupLevel(),
              },
              {
                id: 3,
                level: randomCupLevel(),
              },
              {
                id: 4,
                level: randomCupLevel(),
              },
            ],
          },
          {
            id: 2,
            x: 250,
            y: 0,
            cups: [
              {
                id: 5,
                level: randomCupLevel(),
              },
              {
                id: 6,
                level: randomCupLevel(),
              },
              {
                id: 7,
                level: randomCupLevel(),
              },
              {
                id: 8,
                level: randomCupLevel(),
              },
            ],
          },
          {
            id: 3,
            x: 500,
            y: 0,
            cups: [
              {
                id: 9,
                level: randomCupLevel(),
              },
              {
                id: 10,
                level: randomCupLevel(),
              },
              {
                id: 11,
                level: randomCupLevel(),
              },
              {
                id: 12,
                level: randomCupLevel(),
              },
              {
                id: 13,
                level: randomCupLevel(),
              },
            ],
          },
        ],
      });
    }, 0);
  });
}
