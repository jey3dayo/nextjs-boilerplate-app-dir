import { Prisma, PrismaClient } from '@prisma/client';
import { debugQueryMode } from '@/config';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

async function onQuery(event: Prisma.QueryEvent) {
  console.log(`${event?.query} ${event?.params}`);
}

let client: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  client = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    if (debugQueryMode) {
      global.cachedPrisma = new PrismaClient({ log: [{ emit: 'event', level: 'query' }] });

      // @ts-ignore eslint-disable-next-line
      global.cachedPrisma.$on('query', onQuery);
    } else {
      global.cachedPrisma = new PrismaClient();
    }
  }
  client = global.cachedPrisma;
}

export const prismaClient: PrismaClient = client;
