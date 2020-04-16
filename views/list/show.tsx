import React from "react";

import TaskForm from "~/views/task/form";
import ShowTask from "~/views/task/show";

import Container from "react-bootstrap/Container";

function ShowList({ list }) {
  if (!list) {
    return null;
  }

  const tasks = list.tasks || [];

  return (
    <Container>
      <TaskForm listId={list.id} />
      {tasks.length < 1 && <p>This list is empty.</p>}
      {tasks.map((t) => (
        <ShowTask key={t.id} task={t} />
      ))}
    </Container>
  );
}

export default ShowList;
