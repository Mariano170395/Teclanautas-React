import { createStore, combineReducers } from "redux";
import { postReducer } from "../reducers/post";
import { notificationReducer } from "../reducers/notification";
import { admnCommentReducer } from "../reducers/admnComment";


const reducers = combineReducers({
  postReducer,
  notificationReducer,
  admnCommentReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
