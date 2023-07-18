'use client';

import React from 'react';
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectValue,
  SelectViewport,
} from '@radix-ui/react-select';
import { Icons } from '@/components/ui/icons';
import { SelectItem, SelectRoot, SelectTrigger } from '@/components/ui/select';
import { cx } from '@/lib/class-names';

export type SelectGroup = {
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
  selectGroups: SelectGroup[];
  id: string;
  value: string | number;
  placeholder?: string;
  onChange: (id: string, value: string) => void;
}) {
  const [value, setValue] = React.useState(`${props.value}`);
  function onSelect(v: string) {
    setValue(v);
    props.onChange(props.id, v);
  }

  return (
    <SelectRoot value={value} onValueChange={onSelect}>
      <SelectTrigger
        className={cx(
          'inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9',
          props.className,
        )}
        aria-label="Food"
      >
        <SelectValue aria-label={value} placeholder={props?.placeholder ?? ''} />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <SelectScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
            <Icons.chevronUp />
          </SelectScrollUpButton>
          <SelectViewport className="p-[5px]">
            {props.selectGroups.map((selectGroup, i) => {
              return (
                <div key={selectGroup.label}>
                  {i !== 0 && <SelectSeparator className="m-[5px] h-[1px] bg-violet6" />}
                  <SelectGroup>
                    <SelectLabel className="text-theme-neutral px-[25px] text-xs leading-[25px]">
                      {selectGroup.label}
                    </SelectLabel>
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
          <SelectScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
            <Icons.chevronDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
}
