export type UserId = string;
export type RoleId = number;
export type RoleName = 'user' | 'admin';

export type User = {
  id: UserId;
  name: string;
  email: string;
  image: string;
  isSuspended: boolean;
  role: {
    id: RoleId;
    name: RoleName;
  };
};

export type Role = {
  id: number;
  name: RoleName;
  description: string;
};
