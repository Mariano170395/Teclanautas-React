import { createStore, combineReducers } from "redux";
import { postReducer } from "../reducers/post";
import { notificationReducer } from "../reducers/notification";

const reducers = combineReducers({
  postReducer,
  notificationReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
