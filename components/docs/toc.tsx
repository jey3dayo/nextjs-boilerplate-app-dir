export default function toc({ children }: ReactProps) {
  return (
    <div className="hidden text-sm xl:block">
      <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">{children}</div>
    </div>
  );
}
