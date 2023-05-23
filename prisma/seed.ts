const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: 'user', description: '一般ユーザー' },
  });
  await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, name: 'admin', description: '管理者' },
  });

  const user = await prisma.user.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: '斎場 太郎',
      email: 'example@example.com',
      roleId: 1,
    },
  });
  console.log('Created user:', user);

  const account = await prisma.account.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      userId: '1',
      type: 'oauth',
      provider: 'dummy',
      providerAccountId: 'A00000',
    },
  });
  console.log('Created user:', account);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
