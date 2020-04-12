import React from "react";

import ShowTask from "../task/show";

import Container from "react-bootstrap/Container";

// TODO: Add ability to create a task

function ShowList({ list }) {
  if (!list) {
    return null;
  }

  if (!list.tasks || list.tasks.length < 1) {
    return <p>This list is empty.</p>;
  }

  return (
    <Container>
      {list.tasks.map((t) => (
        <ShowTask task={t} />
      ))}
    </Container>
  );
}

export default ShowList;
