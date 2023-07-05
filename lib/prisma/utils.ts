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
