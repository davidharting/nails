import React from "react";

import prisma from "../../prisma";

import Layout from "../../layouts/App";

// TODO: Lists should really have a name

function NotFound() {
  return (
    <Layout title="List Not Found">
      <p>Sorry, the list you are looking for does not exist.</p>
    </Layout>
  );
}

function List({ list }) {
  if (!list) {
    return <NotFound />;
  }

  return (
    <Layout title="List">
      <p>List content will go here.</p>
    </Layout>
  );
}

export default List;

export async function getServerSideProps(ctx) {
  const { secret } = ctx.query;
  const lists = await prisma.list.findMany({
    first: 1,
    include: { tasks: true },
    where: { secret },
  });

  // TODO: Handle not found

  return { props: { list: lists[0] || null } };
}
