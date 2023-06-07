'use client';

import { useState } from 'react';
import Label from '@/components/label';

function Content() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-4 md:p-2">
      <div className="w-full bg-white p-2 dark:bg-dark md:rounded">
        <div className="py-4">
          <div className="mb-4">
            <Label htmlFor="text">Text</Label>
            <input
              className="w-full appearance-none rounded border px-3 py-2 leading-tight  text-dark shadow focus:outline-none"
              id="text"
              type="text"
              placeholder="Text"
              value={text}
              onChange={({ target: { value } }) => setText(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
