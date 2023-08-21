import { Prisma, PrismaClient } from '@prisma/client';
import { debugQueryMode } from '@/config';

function onQuery(event: Prisma.QueryEvent) {
  console.log(`${event?.query} ${event?.params}`);
}

let client;
if (process.env.NODE_ENV === 'production') {
  client = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    if (debugQueryMode) {
      global.cachedPrisma = new PrismaClient({ log: [{ emit: 'event', level: 'query' }] });

      global.cachedPrisma.$on('query' as never, onQuery);
    } else {
      global.cachedPrisma = new PrismaClient();
    }
  }
  client = global.cachedPrisma;
}

export const prismaClient: PrismaClient = client;
