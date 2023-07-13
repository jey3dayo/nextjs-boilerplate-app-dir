import { User, UserId } from '@/types/user';
import { prismaClient } from '@/lib/prisma';

export async function getUser(userId: UserId): Promise<User | null> {
  const user = await prismaClient.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: { select: { name: true } },
    },
    where: { id: userId },
  });

  return (user as User) ?? null;
}

export async function getUsers(): Promise<User[] | null> {
  const users = await prismaClient.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      isSuspended: true,
      role: { select: { name: true } },
    },
  });

  return (users as User[]) ?? null;
}
