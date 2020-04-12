const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// TODO: On shutdown, disconnect

module.exports = prisma;
