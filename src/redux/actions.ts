import {
  ADD_POST,
  OPEN,
  CLOSE,
  REMOVE_POST,
  POSTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_IS_VISIBLE,
} from "./types";
import { IPost } from "../Posts";

export function openModalAction() {
  return { type: OPEN };
}

export const closeModalAction = () => {
  return { type: CLOSE };
};

export const addPostAction = (post: IPost) => {
  return { type: ADD_POST, post };
};

export const removePostAction = (id: number) => {
  return { type: REMOVE_POST, id };
};

export const loadingOnAction = () => {
  return { type: LOADER_DISPLAY_ON };
};

export const loadingOffAction = () => {
  return { type: LOADER_DISPLAY_OFF };
};

export const errorAction = (text: string, visible: boolean) => {
  return (dispatch: any) => {
    dispatch({ type: ERROR_IS_VISIBLE, text, visible });

    setTimeout(() => {
      dispatch({ type: ERROR_IS_VISIBLE, visible: false });
    }, 2000);
  };
};

export const loadPostsAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch(loadingOnAction());

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const jsonData = await response.json();

      setTimeout(() => {
        dispatch({
          type: POSTS_LOAD,
          posts: jsonData,
        });

        dispatch(loadingOffAction());
      }, 1000);
    } catch (err) {
      dispatch(errorAction(String(err), true));
      dispatch(loadingOffAction());
    }
  };
};
