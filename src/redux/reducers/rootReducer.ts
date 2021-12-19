import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { modalReducer } from "./modalReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  modalReducer,
  postsReducer,
  appReducer,
});
