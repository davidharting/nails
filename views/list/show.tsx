import React from "react";

import TaskForm from "../task/form";
import ShowTask from "../task/show";

import Container from "react-bootstrap/Container";

function ShowList({ list }) {
  if (!list) {
    return null;
  }

  const tasks = list.tasks || [];

  return (
    <Container>
      <TaskForm />
      {tasks.length < 1 && <p>This list is empty.</p>}
      {tasks.map((t) => (
        <ShowTask task={t} />
      ))}
    </Container>
  );
}

export default ShowList;
