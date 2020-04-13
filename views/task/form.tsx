import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TaskForm({}) {
  return (
    <Form action="/api/tasks" method="post">
      <Form.Control
        type="text"
        name="description"
        required
        placeholder="Your next task"
      />
      <Button type="submit" variant="primary">
        Add new task
      </Button>
    </Form>
  );
}

export default TaskForm;
