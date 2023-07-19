import { Role, User } from '@/types/user';
import SelectRole from '@/app/(admin)/users/select-role';
import { Avatar } from '@/components/avatar';
import Switch from '@/components/switch';
import { titles } from '@/constants';
import { getRoles, getUsers } from '@/lib/fetch-helpers';
import { getCurrentUser } from '@/lib/next-auth/session';
import { prismaClient } from '@/lib/prisma';

async function Content() {
  let users: User[] = [];
  let roles: Role[] = [];
  try {
    users = await getUsers();
    roles = await getRoles();
  } catch (e) {
    console.error(e);
  }

  async function onUpdateRole(id: string, roleId: string) {
    'use server';
    await prismaClient.user.update({
      where: { id: id },
      data: { roleId: Number(roleId) },
    });
  }

  async function onUpdateIsSuspended(id: string, checked: boolean) {
    'use server';
    await prismaClient.user.update({
      where: { id: id },
      data: { isSuspended: checked },
    });
  }

  const currentUser = await getCurrentUser();
  return (
    <div className="min-h-[86vh] md:mx-auto md:min-h-[82vh] md:w-full md:max-w-3xl">
      <div className="pl-2 md:pr-4">
        <div className="md:max-w-md">
          <p className="text-subtitle">{titles.admin}</p>
          <h1 className="text-title mt-1">{titles.users}</h1>
          <p className="text-description mt-4">権限変更とユーザの停止が行えます</p>
        </div>
      </div>

      <div className="pl-2 pt-5 md:pr-4">
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
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
                <p className="text-theme text-sm font-medium">{user.name}</p>
                <p className="text-theme-neutral text-sm">{user.email}</p>
              </div>
              <SelectRole
                roles={roles}
                className="mx-3 w-[130px]"
                userId={user.id}
                roleId={user.role.id}
                onUpdateRole={onUpdateRole}
                aria-label="権限選択"
                disabled={user.id === currentUser?.id}
              />
              <Switch
                id={user.id}
                variant="warning"
                value={user.isSuspended}
                onChange={onUpdateIsSuspended}
                disabled={user.id === currentUser?.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
