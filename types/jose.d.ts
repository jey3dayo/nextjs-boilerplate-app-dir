export type Payload = { id: string };

// TODO: 追記予定
declare module 'jose' {
  interface JWTPayload {
    id?: string;
  }
}
