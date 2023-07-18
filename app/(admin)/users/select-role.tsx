import React from 'react';
import { Role, RoleId, UserId } from '@/types/user';
import { Select, SelectGroupValue } from '@/components/select';

async function SelectRole(props: {
  className: string;
  roles: Role[];
  userId: UserId;
  roleId: RoleId;
  onUpdateRole: (userId: string, roleId: string) => void;
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
    />
  );
}
export default SelectRole;
