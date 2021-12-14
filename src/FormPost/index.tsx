import { Button, Form } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addPostAction, openModalAction } from "../redux/actions";

const FormPost = (props: any) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleCreatePostBtn = () => {
    dispatch(openModalAction());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const post = {
      id: new Date().getTime(),
      userId: 0,
      title,
      body: "Default text for post",
    };

    dispatch(addPostAction(post));
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4 w-50">
      <Button variant="success" onClick={handleCreatePostBtn}>
        Create Post
      </Button>

      <Form.Group className="my-4">
        <Form.Label>Filter posts</Form.Label>

        <Form.Control
          type="text"
          placeholder="Filtering"
          value={title}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          You can just start enter something
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default FormPost;
