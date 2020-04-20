import React, { ReactNode } from "react";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface LandingLayoutProps {
  children: ReactNode;
}

function LandingLayout({ children }: LandingLayoutProps) {
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
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingLayout;
