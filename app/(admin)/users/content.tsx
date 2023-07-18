import { User } from '@/types/user';
import { Avatar } from '@/components/avatar';
import Switch from '@/components/switch';
import { titles } from '@/constants';
import { fetcher } from '@/lib/fetcher';
import { prismaClient } from '@/lib/prisma';

async function getUsers() {
  const res = await fetcher('/api/users');
  return res;
}

async function Content() {
  let users: User[] = [];
  try {
    users = await getUsers();
  } catch (e) {
    console.error(e);
  }

  async function onUpdateRole(id: string, roleName: string) {
    'use server';
    // joinしたroleのidを取得
    const role = await prismaClient.role.findFirst({ where: { name: roleName } });
    // TODO: throw error
    if (!role) return;

    await prismaClient.user.update({
      where: { id: id },
      data: { roleId: role.id },
    });
  }

  async function onUpdateIsSuspended(id: string, checked: boolean) {
    'use server';
    await prismaClient.user.update({
      where: { id: id },
      data: { isSuspended: checked },
    });
  }

  return (
    <div className="md:mx-auto md:w-full md:max-w-3xl">
      <div className="pl-2 md:pr-4">
        <div className="md:max-w-md">
          <p className="text-subtitle">{titles.admin}</p>
          <h1 className="text-title mt-1">{titles.users}</h1>
          <p className="text-description mt-4">権限とユーザの停止が行えます</p>
        </div>
      </div>

      <div className="pl-2 pt-5 md:pr-4">
        <ul className="w-full divide-y divide-gray-200">
          <li className="flex items-center py-4">
            <div>&nbsp;</div>
            <div className="flex-1">&nbsp;</div>
            <div className="ml-3 w-10">&nbsp;</div>
            <div>無効化</div>
          </li>
          {users.map((user: User) => (
            <li key={user.email} className="flex items-center py-4">
              <Avatar
                name={user?.name ?? null}
                image={user?.image ?? null}
                aria-label={user?.name}
                className="h-11 w-11 rounded-full"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="ml-3 w-10 bg-blue-100">
                <p className="text-sm font-medium text-gray-900">{user.role.name}</p>
              </div>
              <Switch id={user.id} variant="warning" value={user.isSuspended} onChange={onUpdateIsSuspended} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
