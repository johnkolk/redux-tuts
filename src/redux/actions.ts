import { ADD_POST, OPEN, CLOSE, REMOVE_POST, POSTS_LOAD } from "./types";
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

export const loadPostsAction = () => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const jsonData = await response.json();

    dispatch({
      type: POSTS_LOAD,
      posts: jsonData,
    });
  };
};
