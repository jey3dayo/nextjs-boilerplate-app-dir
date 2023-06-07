import { SWRConfig } from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function SwrProvider(props: ReactProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        fetcher,
      }}
    >
      {props.children}
    </SWRConfig>
  );
}
