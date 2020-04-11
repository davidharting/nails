import React from "react";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function AppLayout({ children, currentUser, title }) {
  return (
    <>
      <Head>
        <title>Nails 💅</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="mb-sm-3" bg="primary" variant="dark">
        <Navbar.Brand href="/home">Nails 💅</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link> */}
        </Nav>
      </Navbar>
      <Container fluid="sm">
        <Row>
          {typeof title === "string" && <h2>{title}</h2>}
          {typeof title === "object" && { title }}
        </Row>
        <Row>{children}</Row>
        <Row>
          <footer>
            <a
              href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
            </a>
          </footer>
        </Row>
      </Container>
    </>
  );
}

export default AppLayout;
