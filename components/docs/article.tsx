export default function article({ children }: ReactProps) {
  return <div className="prose prose-xl mx-auto w-full min-w-0">{children}</div>;
}
