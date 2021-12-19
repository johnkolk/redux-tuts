import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import { Posts } from "./Posts";
import ModalEdit from "./ModalEdit";
import ErrorAlert from "./Error";
import { useSelector } from "react-redux";
import { RootState } from "./index";

function App() {
  const error = useSelector((state: RootState) => {
    return state.appReducer.error;
  });

  return (
    <>
      <Container>
        {error && <ErrorAlert />}
        <Row>
          <Col>
            <div className="mt-4">
              <h3>Redux tutorial</h3>
              <Posts />
            </div>
          </Col>
        </Row>
      </Container>
      <ModalEdit />
    </>
  );
}

export default App;
