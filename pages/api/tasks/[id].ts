import { NextApiRequest, NextApiResponse } from "next";

import handleForm from "~/handlers/form";
import prisma from "~/prisma";

async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const done = handleForm(req, res);
  const id = parseInt(`${req.query.id}`, 10);
  const { completedAt } = req.body;
  const updates = { completedAt };
  await prisma.task.update({
    data: updates,
    where: { id },
  });
  if (done) {
    return done(null, null);
  }
}

export default handle;
