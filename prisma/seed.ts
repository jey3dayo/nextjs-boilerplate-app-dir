const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const role1 = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: 'user', description: '一般ユーザー' },
  });
  console.log('Created roles:', role1);

  const role2 = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, name: 'admin', description: '管理者' },
  });
  console.log('Created roles:', role2);

  const user1 = await prisma.user.upsert({
    where: { id: 'oauth2|CASSO|T00114' },
    update: {},
    create: {
      id: 'oauth2|CASSO|T00114',
      provider: 'CASSO',
      cynumber: 'T00114',
      familyName: '仲里',
      givenName: '淳矢',
      email: 'nakazato_junya@ca-adv.co.jp',
      picture: '',
      roleId: 1,
    },
  });
  console.log('Created user:', user1);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
