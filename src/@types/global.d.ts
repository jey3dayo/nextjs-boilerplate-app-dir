declare global {
  export type ReactProps = Required<{
    readonly children: ReactElement;
  }>;

  export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
}

export {};
