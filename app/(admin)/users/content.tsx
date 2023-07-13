import { titles } from '@/constants';
import { fetcher } from '@/lib/fetcher';

async function getUsers() {
  const res = await fetcher('/api/users');
  return res;
}

async function Content() {
  let users = [];
  try {
    users = await getUsers();
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="space-y-4 md:p-2">
      <div className="theme shadow-focus w-full p-2 shadow md:w-96 md:rounded">
        <h2>{titles.users}</h2>
        <div className="py-4">
          <div className="mb-4"></div>
          {users?.map((user: any) => (
            <div>{user.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
