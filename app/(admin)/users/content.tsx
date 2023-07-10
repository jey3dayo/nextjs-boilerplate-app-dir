import { titles } from '@/constants';

function Content() {
  return (
    <div className="space-y-4 md:p-2">
      <div className="theme shadow-focus w-full p-2 shadow md:w-96 md:rounded">
        <h2>{titles.users}</h2>
        <div className="py-4">
          <div className="mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
