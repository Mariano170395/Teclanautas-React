import { createStore, combineReducers } from "redux";
import { postReducer } from "../reducers/post";

const reducers = combineReducers({
  postReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
