import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ShowTask({ task }) {
  return (
    <Row>
      <Col>{task.description}</Col>
    </Row>
  );
}

export default ShowTask;
