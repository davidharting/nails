import React from "react";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

function AppLayout({ children, title }: AppLayoutProps): React.ReactElement {
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
        {typeof title === "string" && <h2>{title}</h2>}
        {/* {typeof title === "object" && { title }} */}
        {children}
      </Container>
    </>
  );
}

export default AppLayout;
