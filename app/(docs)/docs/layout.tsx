import Sidebar from '@/components/docs/sidebar';
import '@/styles/mdx.css';

export default function DocsLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <Sidebar />
      {children}
    </div>
  );
}
