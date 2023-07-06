export type UserId = string;

export type Role = 'user' | 'admin';

export type User = {
  id: UserId;
  name: string | null;
  email: string | null;
  image: string | null;
  role: {
    name: Role;
  };
};
