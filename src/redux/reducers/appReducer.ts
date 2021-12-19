import { AnyAction } from "redux";
import {
  ERROR_IS_VISIBLE,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from "../types";

const initialState = {
  loading: false,
  error: null,
};

export const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return { ...state, loading: true };
    case LOADER_DISPLAY_OFF:
      return { ...state, loading: false };
    case ERROR_IS_VISIBLE:
      return { ...state, error: action.visible ? action.text : null };
    default:
      return state;
  }
};
