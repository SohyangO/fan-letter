import { createStore } from "redux";
import { combineReducers } from "redux";
import letterCollect from "./LetterReducer";

const rootReducer = combineReducers({
  letterCollect,
});

const store = createStore(rootReducer);

export default store;
