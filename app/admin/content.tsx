'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';

function Content() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-4 md:p-2">
      <div className="w-full p-2 md:rounded">
        <div className="py-4">
          <div className="mb-4">
            <Label htmlFor="text">Text</Label>
            <input
              className="shadow-focus w-full appearance-none rounded border px-3 py-2 leading-tight text-dark shadow"
              id="text"
              type="text"
              placeholder="Text"
              value={text}
              onChange={({ target: { value } }) => setText(value)}
            />
          </div>

          <div className="text-dark">dark</div>
          <div className="text-medium">medium</div>
          <div className="text-light">light</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
