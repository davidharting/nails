import Layout from "../layouts/Landing";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <Layout>
      <h1 className="text-center">Nails 💅</h1>
      <p>
        I am exploring Next.js 9.3 and attempting to create a Rails-like
        development experience.
      </p>
      <Button variant="primary" href="/home">
        Get started
      </Button>
    </Layout>
  );
}

export default Home;
