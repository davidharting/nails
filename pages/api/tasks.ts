// Figure out where came from
// Figure out how to redirect without .redirect available
import { NextApiRequest, NextApiResponse } from "next";

import prisma, { ListHelper } from "~/prisma";
import handleForm from "~/handlers/form";

// The more I think about it, the more I want to pass my function behavior into the handleForm
// "middleware" so that it can catch _all_ errors

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const done = handleForm(req, res);
  const { description, listId } = req.body;
  const list = await prisma.list.findOne({ where: { id: parseInt(listId) } });
  const task = await prisma.task.create({
    data: {
      completedAt: null,
      description,
      list: { connect: { id: parseInt(listId, 10) } },
    },
  });

  if (done) {
    return done(null, ListHelper.path(list));
  }
}

export default handle;
