export default function header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <div className="flex-1 sm:grow-0">search</div>
        </div>
      </div>
    </header>
  );
}
