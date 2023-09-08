'use client';

import React from 'react';
import { Icons } from '@/components/ui/icon';
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
import { toast } from '@/components/ui/use-toast';
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
  disabled: boolean;
  onChange: (id: string, value: string) => Promise<boolean>;
  'aria-label': string;
}) {
  const [value, setValue] = React.useState(`${props.value}`);

  function onSelect(v: string) {
    setValue(v);
    void props.onChange(props.id, v).then((result) => {
      if (result) {
        toast({
          title: `保存しました`,
        });
      }
    });
  }

  return (
    <SelectRoot value={value} onValueChange={onSelect} disabled={props.disabled}>
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
