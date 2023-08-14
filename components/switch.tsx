'use client';

import React from 'react';
import { SwitchRoot, SwitchRootVariants, SwitchThumb } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';

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
  onChange: (id: string, checked: boolean) => Promise<boolean>;
  disabled: boolean;
}) {
  const [checked, setChecked] = React.useState(value);

  async function onChange(checked: boolean) {
    setChecked(checked);
    const result = await _onChange(id, checked);

    if (result) {
      toast({
        title: '保存しました',
      });
    }
  }

  return (
    <div className="flex items-center justify-center">
      {label && (
        <label className="pr-[15px] text-[15px] leading-none text-theme" htmlFor="airplane-mode">
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
