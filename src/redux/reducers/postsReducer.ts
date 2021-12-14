import { AnyAction } from "redux";
import { ADD_POST, POSTS_LOAD, REMOVE_POST } from "../types";
import { IPost } from "../../Posts";

const initialState = {
  posts: [],
};

export const postsReducer = (
  state: { posts: IPost[] } = initialState,
  action: AnyAction
) => {
  console.log("state >> ", action);
  switch (action.type) {
    case POSTS_LOAD:
      return { ...state, posts: action.posts };
    case ADD_POST:
      return { ...state, posts: [action.post, ...state.posts] };
    case REMOVE_POST:
      const { posts } = state;
      const postIndex = posts.findIndex((post) => post.id === action.id);
      const nextArray = [
        ...posts.slice(0, postIndex),
        ...posts.slice(postIndex + 1),
      ];
      return { ...state, posts: nextArray };
    default:
      return state;
  }
};
