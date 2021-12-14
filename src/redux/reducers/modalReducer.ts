import { AnyAction } from "redux";
import { CLOSE, OPEN } from "../types";

const initialState = {
  isVisible: false,
};

export const modalReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case OPEN:
      return { ...state, isVisible: true };
    case CLOSE:
      return { ...state, isVisible: false };
    default:
      return state;
  }
};
