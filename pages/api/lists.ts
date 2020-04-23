// Figure out where came from
// Figure out how to redirect without .redirect available

import prisma, { ListHelper } from "~/prisma";
import handleForm from "~/handlers/form";

/*
 * I like that handleForm does not wrap the entire thing and take a callback.
 * However, the issue is that top-level 500 errors from this application code
 * Are not caught in that. That is okay, but I would prefer to not have to wrap all my endpoints in
 * a manual try catch and handle them individually.
 * Callback may end up being the way to go I suppose :/
 */

async function handle(req, res): Promise<void> {
  const done = handleForm(req, res);
  const list = await prisma.list.create({ data: {} });
  if (done) {
    return done(null, ListHelper.path(list));
  }
}

export default handle;
