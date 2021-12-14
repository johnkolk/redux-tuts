import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import { Posts } from "./Posts";
import ModalEdit from "./ModalEdit";

function App() {
  return (
    <>
      <Container>
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
