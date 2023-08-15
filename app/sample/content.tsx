function Content() {
  return (
    <div className="space-y-4 md:p-2">
      <div className="rounded-md bg-foreground p-2 md:mx-auto md:w-full md:max-w-3xl">
        <div className="text-background">text-background: var(--mauve1)</div>
        <div className="text-foreground">text-foreground: var(--mauve12)</div>
        <div className="text-card">text-card: var(--mauve1)</div>
        <div className="text-card-foreground">text-card-foreground: var(--mauve12)</div>
        <div className="text-popover">text-popover: var(--mauve1)</div>
        <div className="text-popover-foreground">text-popover-foreground: var(--mauve12)</div>
        <div className="text-primary">text-primary: var(--violet11)</div>
        <div className="text-secondary">text-secondary: var(--teal11)</div>
        <div className="text-secondary-foreground">text-secondary-foreground: var(--mauve12)</div>
        <div className="text-muted">text-muted: var(--teal11)</div>
        <div className="text-muted-foreground">text-muted-foreground: var(--mauve11)</div>
        <div className="text-accent">text-accent: var(--teal11)</div>
        <div className="text-accent-foreground">text-accent-foreground: var(--mauve12)</div>
        <div className="text-destructive">text-destructive: var(--tomato11)</div>
        <div className="text-destructive-foreground">text-destructive-foreground: var(--mauve12)</div>
      </div>

      <div className="rounded-md bg-background p-2 md:mx-auto md:w-full md:max-w-3xl">
        <div className="text-background">text-background: var(--mauve1)</div>
        <div className="text-foreground">text-foreground: var(--mauve12)</div>
        <div className="text-card">text-card: var(--mauve1)</div>
        <div className="text-card-foreground">text-card-foreground: var(--mauve12)</div>
        <div className="text-popover">text-popover: var(--mauve1)</div>
        <div className="text-popover-foreground">text-popover-foreground: var(--mauve12)</div>
        <div className="text-primary">text-primary: var(--violet11)</div>
        <div className="text-secondary">text-secondary: var(--teal11)</div>
        <div className="text-secondary-foreground">text-secondary-foreground: var(--mauve12)</div>
        <div className="text-muted">text-muted: var(--teal11)</div>
        <div className="text-muted-foreground">text-muted-foreground: var(--mauve11)</div>
        <div className="text-accent">text-accent: var(--teal11)</div>
        <div className="text-accent-foreground">text-accent-foreground: var(--mauve12)</div>
        <div className="text-destructive">text-destructive: var(--tomato11)</div>
        <div className="text-destructive-foreground">text-destructive-foreground: var(--mauve12)</div>
      </div>

      <div className="bg-background p-2 md:mx-auto md:w-full md:max-w-3xl">
        <div className="py-4">
          <div className="mb-4">
            <div className="text-dark">dark</div>
            <div className="text-medium">medium</div>
            <div className="text-light">light</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
