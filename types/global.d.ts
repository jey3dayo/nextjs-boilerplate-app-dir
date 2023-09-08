import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

declare global {
  export type ReactProps = {
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>;

  // FIXME: 解決方法がわかったら対応
  export type RootLayoutProps = {
    children: React.ReactNode;
  };

  export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  export type valueof<T> = T[keyof T];
}

export {};
