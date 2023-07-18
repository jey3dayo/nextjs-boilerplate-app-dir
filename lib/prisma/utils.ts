import { Role, User, UserId } from '@/types/user';
import { prismaClient } from '@/lib/prisma';

export async function getUser(userId: UserId): Promise<User | null> {
  const result = await prismaClient.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: { select: { id: true, name: true } },
    },
    where: { id: userId },
  });

  return (result as User) ?? null;
}

export async function getUsers(): Promise<User[] | null> {
  const result = await prismaClient.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      isSuspended: true,
      role: { select: { id: true, name: true } },
    },
  });

  return (result as User[]) ?? null;
}

export async function getRoles(): Promise<Role[] | null> {
  const result = await prismaClient.role.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return (result as Role[]) ?? null;
}
