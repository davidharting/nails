import { PrismaClient } from "@prisma/client";

import ListHelper from "./helpers/list";

const prisma = new PrismaClient();

// TODO: On shutdown, disconnect

// TODO: Dynamically read all "models" and re-export them
// Also, "models" isn't really the best name. They are functional utilities to work with database records
// Since prisma is a query builder and returns regular JavaScript objects, it forces functional programming here
// rather than more of an Active Record model

export default prisma;
export { ListHelper };
