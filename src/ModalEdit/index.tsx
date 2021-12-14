import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { closeModalAction } from "../redux/actions";

const ModalEdit = (props: any) => {
  const dispatch = useDispatch();

  const isVisible = useSelector((state: RootState) => {
    return state.modalReducer.isVisible;
  });

  const handleCloseModal = () => {
    dispatch(closeModalAction());
  };

  return (
    <Modal
      show={isVisible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Post
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="my-2 w-50">
            <Form.Label>Title</Form.Label>

            <Form.Control type="text" placeholder="Title" />
            <Form.Text className="text-muted">Enter title you post</Form.Text>
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Label>Description</Form.Label>

            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
