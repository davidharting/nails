import React from "react";

import Layout from "../layouts/App";

function Home() {
  return <Layout title="Home">Home page goes here</Layout>;
}

export default Home;

// export async function getServerSideProps() {
//   return {
//     props: {
//       currentUser: { id: 1, email: "davideharting@gmail.com" },
//       requireAuth: true,
//     },
//   };
// }
