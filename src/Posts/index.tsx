import Post from "../Post";
import FormPost from "../FormPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { useEffect } from "react";
import { loadPostsAction } from "../redux/actions";
import Loader from "../Loader";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => {
    return state.postsReducer.posts;
  });

  useEffect(() => {
    dispatch(loadPostsAction());
  }, [dispatch]);

  return (
    <div>
      <FormPost />
      <Loader />
      {posts.map((post: IPost, index: number) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};
