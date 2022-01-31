import { combineReducers } from "redux";
//es el export de mi funcion anonima
import searchReducer from "./searchReducer";

export default combineReducers({
  searchReducer: searchReducer,
});
