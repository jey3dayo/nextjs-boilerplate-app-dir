export function debug(...props: any) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...props);
  }
}
