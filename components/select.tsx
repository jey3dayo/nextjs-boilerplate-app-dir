'use client';

import React from 'react';
import { Icon } from '@/components/ui/icon';
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

  async function onSelect(v: string) {
    setValue(v);
    const result = await props.onChange(props.id, v);
    if (result) {
      toast({
        title: `保存しました`,
      });
    }
  }

  return (
    <SelectRoot value={value} onValueChange={onSelect} disabled={props.disabled}>
      <SelectTrigger className={cx(props.className)} aria-label={props['aria-label']}>
        <SelectValue aria-label={value} placeholder={props?.placeholder ?? ''} />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectScrollUpButton>
            <Icon name="chevron-up" />
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
            <Icon name="chevron-down" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
}
