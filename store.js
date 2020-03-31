import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const theInitialState = {
  tables: [
    {
      id: 1,
      x: 0,
      y: 0,
      cups: [
        { id: 1, level: 0.2 },
        { id: 2, level: 0.2 },
      ],
    },
    {
      id: 2,
      x: 100,
      y: 100,
      cups: [
        { id: 3, level: 0.2 },
        { id: 4, level: 0.2 },
      ],
    },
  ],
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
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
