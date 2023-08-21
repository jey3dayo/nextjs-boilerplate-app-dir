export function debug(...props: unknown[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...props);
  }
}
