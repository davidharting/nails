import React from "react";

import prisma, { ListHelper } from "~/prisma";

import Layout from "~/layouts/App";
import ShowList from "~/views/list/show";

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
      <ShowList list={list} />
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

  const list = lists[0] || null;

  return { props: { list: list ? ListHelper.toProps(list) : null } };
}
