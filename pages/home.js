import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Layout from "~/layouts/App";

function Home() {
  return (
    <Layout title="Home">
      <p>
        Use this app to generate a secret link for a todo list. Anyone with the
        link can view and edit the list. The link URLs are randomly generated
        however, and very hard to guess.
      </p>

      <Form action="/api/lists" method="post">
        <Form.Control name="redirectTo" type="hidden" value="/lists/[id]" />
        <Button variant="primary" type="submit">
          Create todo list
        </Button>
      </Form>
    </Layout>
  );
}

export default Home;
