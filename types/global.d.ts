declare global {
  export type ReactProps = Required<{
    readonly children: React.ReactElement;
  }>;

  export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
}

export {};
