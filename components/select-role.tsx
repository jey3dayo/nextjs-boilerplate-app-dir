import React from 'react';
import { Role, RoleId, UserId } from '@/types/user';
import { Select, SelectGroupValue } from '@/components/select';

export async function SelectRole(props: {
  className: string;
  roles: Role[];
  userId: UserId;
  roleId: RoleId;
  onUpdateRole: (userId: string, roleId: string) => Promise<boolean>;
  disabled: boolean;
  'aria-label': string;
}) {
  const selectGroup: SelectGroupValue[] = [
    {
      label: '権限',
      values: props.roles.map((role) => ({
        label: role.description,
        value: role.id,
      })),
    },
  ];

  return (
    <Select
      className={props.className}
      selectGroups={selectGroup}
      id={props.userId}
      value={`${props.roleId}`}
      onChange={props.onUpdateRole}
      aria-label={props['aria-label']}
      disabled={props.disabled}
    />
  );
}
