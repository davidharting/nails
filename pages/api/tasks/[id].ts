import { NextApiRequest, NextApiResponse } from "next";

import handleForm from "~/handlers/form";
import prisma from "~/prisma";

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const done = handleForm(req, res);
  const id = parseInt(`${req.query.id}`, 10);
  console.log("id", id);
  const { completedAt } = req.body;
  console.log("body", req.body);
  const updates = { completedAt };
  console.log("updates", updates);
  const updated = await prisma.task.update({
    data: { completedAt },
    where: { id },
  });
  console.log("updated", updated);
  if (done) {
    return done(null, null);
  }
}

export default handle;
