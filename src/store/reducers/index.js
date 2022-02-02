import { combineReducers } from "redux";
//es el export de mi funcion anonima
import searchReducer from "./searchReducer";
import { postReducer } from "./postReducer";

export default combineReducers({
  searchReducer: searchReducer,
  postReducer: postReducer
});
