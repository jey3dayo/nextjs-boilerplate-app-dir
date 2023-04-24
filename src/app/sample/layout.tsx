import '@/styles/globals.css';

export const metadata = {
  title: 'sample',
  description: 'description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
