import { VercelAnalytics } from '@/components/vercel-analytics';

export function TrackProvider(props: ReactProps) {
  return (
    <>
      {props.children}
      <VercelAnalytics />
    </>
  );
}
