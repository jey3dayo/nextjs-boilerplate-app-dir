import { UserId } from '@/types/next-auth';
import { prismaClient } from '@/lib/prisma';

export async function getUser(userId: UserId) {
  return prismaClient.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: { select: { name: true } },
    },
    where: { id: userId },
  });
}
