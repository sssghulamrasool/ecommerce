import { createStore } from "redux";

import { CombineReducers } from "../reducer/CombineReducerss";

export const store = createStore(
  CombineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
