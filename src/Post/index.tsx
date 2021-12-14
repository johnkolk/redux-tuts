import { Button, Card } from "react-bootstrap";
import { IPost } from "../Posts";
import { useDispatch } from "react-redux";
import { removePostAction } from "../redux/actions";

interface Props {
  post: IPost;
  index: number;
}

const Post = ({ post, index }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removePostAction(post.id));
  };

  const handleEdit = () => {
    console.log("Edit post");
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{index + 1 + ". " + post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>

        <Button variant="outline-success" onClick={handleEdit}>
          Edit
        </Button>
        <Button
          className="mx-2"
          variant="outline-danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
