export type UserId = string;

export type Role = 'user' | 'admin';

export type User = {
  id: UserId;
  name: string;
  email: string;
  image: string;
  isSuspended: boolean;
  role: {
    name: Role;
  };
};
