declare global {
  export type ReactProps = {
    className?: string;
    children: React.ReactNode;
  };

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
