import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface TaskFormProps {
  listId: number;
}

function TaskForm({ listId }: TaskFormProps) {
  return (
    <Form action="/api/tasks" method="post">
      <Form.Control type="hidden" name="listId" value={listId} />
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
