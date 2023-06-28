export function checkPath(path: string, allowList: string[]): boolean {
  return allowList.reduce((acc: boolean, pathname: string) => acc || path.startsWith(`/${pathname}`), false);
}
