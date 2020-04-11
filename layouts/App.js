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
      <Container>
        <Row>Header</Row>
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
