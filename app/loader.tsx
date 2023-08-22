import { Spinner } from '@/components/ui/spinner';

export default function loader() {
  return (
    <div className="flex h-[86vh] w-full grow flex-col items-center justify-center">
      <Spinner />
    </div>
  );
}
