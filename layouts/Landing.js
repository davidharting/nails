import React from "react";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Nails 💅</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        fluid="sm"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row>{children}</Row>
      </Container>
    </>
  );
}

export default AppLayout;
