function ContentRoot(props: ReactProps) {
  return <div className="overflow-hidden md:container md:mx-auto">{props.children}</div>;
}

export { ContentRoot };
