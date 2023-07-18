'use client';

import React from 'react';
import { Icons } from '@/components/ui/icons';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@/components/ui/select';
import { cx } from '@/lib/class-names';

export type SelectGroupValue = {
  label: string;
  values: SelectValue[];
};

export type SelectValue = {
  label: string;
  value: string | number;
  text?: string;
};

export function Select(props: {
  className: string;
  selectGroups: SelectGroupValue[];
  id: string;
  value: string | number;
  placeholder?: string;
  onChange: (id: string, value: string) => void;
  'aria-label': string;
}) {
  const [value, setValue] = React.useState(`${props.value}`);
  function onSelect(v: string) {
    setValue(v);
    props.onChange(props.id, v);
  }

  return (
    <SelectRoot value={value} onValueChange={onSelect}>
      <SelectTrigger className={cx(props.className)} aria-label={props['aria-label']}>
        <SelectValue aria-label={value} placeholder={props?.placeholder ?? ''} />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectScrollUpButton>
            <Icons.chevronUp />
          </SelectScrollUpButton>
          <SelectViewport>
            {props.selectGroups.map((selectGroup, i) => {
              return (
                <div key={selectGroup.label}>
                  {i !== 0 && <SelectSeparator />}
                  <SelectGroup>
                    <SelectLabel>{selectGroup.label}</SelectLabel>
                    {selectGroup.values.map((v) => (
                      <SelectItem key={v.label} value={`${v.value}`}>
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </div>
              );
            })}
          </SelectViewport>
          <SelectScrollDownButton>
            <Icons.chevronDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
}
