import React from "react";

import Button from "react-bootstrap/Button";

import Layout from "../layouts/App";

function Home() {
  return (
    <Layout title="Home">
      <p>
        Use this app to generate a secret link for a todo list. Anyone with the
        link can view and edit the list. The link URLs are randomly generated
        however, and very hard to guess.
      </p>

      <Button variant="primary">Create todo list</Button>
    </Layout>
  );
}

export default Home;
