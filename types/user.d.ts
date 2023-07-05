import { prismaClient } from '@/lib/prisma';

export type UserId = PrismaClient.user['id'];

export type Role = 'user' | 'admin';

export type User = {
  id: UserId;
  name: string | null;
  email: string | null;
  image: string | null;
  role: {
    name: Role;
  };
};
