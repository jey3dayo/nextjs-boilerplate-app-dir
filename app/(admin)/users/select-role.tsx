import React from 'react';
import { Role, RoleId, UserId } from '@/types/user';
import { Select, SelectGroup } from '@/components/select';

async function SelectRole(props: {
  className: string;
  roles: Role[];
  userId: UserId;
  roleId: RoleId;
  onUpdateRole: (userId: string, roleId: string) => void;
}) {
  const selectGroup: SelectGroup[] = [
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
    />
  );
}
export default SelectRole;
