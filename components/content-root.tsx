export function ResponsiveRoot(props: ReactProps) {
  return <div className="flex min-h-screen flex-1 flex-col items-center p-0">{props.children}</div>;
}

// header: md:7vh h:8vh
// content: md:89vh h:88vh
// footer: md:4vh h:4vh
export function HeroContentRoot(props: ReactProps) {
  return <div className="text-theme h-[88vh] md:h-[89vh]">{props.children}</div>;
}
