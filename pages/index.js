import Layout from "../layouts/Landing";

import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Layout>
      <h1 className="text-center">Nails 💅</h1>
      <p>
        I am exploring Next.js 9.3 and attempting to create a Rails-like
        development experience.
      </p>
      <Button className="w-100" variant="primary" href="/home">
        Get started
      </Button>
    </Layout>
  );
}

export default Home;
