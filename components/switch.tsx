'use client';

import React from 'react';
import { SwitchRoot, SwitchRootVariants, SwitchThumb } from '@/components/ui/switch';

function Switch({
  variant,
  label,
  value,
  id,
  onChange: _onChange,
  disabled,
}: {
  variant?: SwitchRootVariants['variant'];
  id: string;
  label?: string;
  value: boolean;
  onChange: (id: string, checked: boolean) => void;
  disabled: boolean;
}) {
  const [checked, setChecked] = React.useState(value);

  function onChange(checked: boolean) {
    setChecked(checked);
    _onChange(id, checked);
  }

  return (
    <div className="flex items-center justify-center">
      {label && (
        <label className="text-theme pr-[15px] text-[15px] leading-none" htmlFor="airplane-mode">
          {label}
        </label>
      )}
      <SwitchRoot
        variant={variant}
        className="peer h-[24px] w-[42px] rounded-full"
        id="user"
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <SwitchThumb variant={variant} className="h-[21px] w-[21px]" />
      </SwitchRoot>
    </div>
  );
}

export default Switch;
