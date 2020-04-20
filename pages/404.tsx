import React from "react";

import Layout from "~/layouts/App";

function NotFound(): React.ReactElement {
  return (
    <Layout title="Not Found">
      <h1>Sorry, that is not a page.</h1>
    </Layout>
  );
}

export default NotFound;
