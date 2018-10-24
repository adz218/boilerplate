import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";

const ADD_CAT = "ADD_CAT";

export const addCat = cat => {
  return {
    type: ADD_CAT,
    cat
  };
};

const initialState = { cats: [], oneCat: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAT:
      return { ...state, oneCat: action.cat };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);
