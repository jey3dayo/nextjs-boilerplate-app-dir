import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let client: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  client = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  client = global.cachedPrisma;
}

export const prismaClient: PrismaClient = client;
