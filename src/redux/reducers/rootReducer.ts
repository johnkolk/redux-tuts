import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  modalReducer,
  postsReducer,
});
