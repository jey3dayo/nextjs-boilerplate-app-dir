export default function checkPath(path: string, whitelist: string[]): boolean {
  return whitelist.reduce((acc: boolean, pathname: string) => acc || path.startsWith(pathname), false);
}
