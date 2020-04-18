import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// Should probably rename to TaskListItem
// ShowTask would be more appropriate if this was a page with a single task on it
// Also could just do everything in pages and then let the abstractions form more naturally.

function ShowTask({ task }) {
  const isComplete = task.completedAt !== null;

  const [rightMeow, setRightMeow] = useState(new Date());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRightMeow(new Date());
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <p className={isComplete ? "completed" : ""}>{task.description}</p>
        </Col>
        {!isComplete && (
          <Col>
            <Form action={`/api/tasks/${task.id}`} method="post">
              <Form.Control
                type="hidden"
                name="completedAt"
                value={rightMeow.toISOString()}
              />
              <Button type="submit" variant="outline-secondary">
                <small>
                  <i>Mark done</i>
                </small>
              </Button>
            </Form>
          </Col>
        )}
      </Row>
      <style jsx>
        {`
          .completed {
            opacity: 0.5;
            text-decoration: line-through;
          }
        `}
      </style>
    </>
  );
}

export default ShowTask;
