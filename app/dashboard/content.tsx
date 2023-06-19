'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import classNames from '@/lib/class-names';

const DEFAULT_VOL = 50;
const DEFAULT_DESCRIPTION =
  "Tailwind CSS is the only framework that I've seen scale on large teams.It’s easy to customize, adapts to any design, and the build size is tiny.";

function Dashboard() {
  const [action, setAction] = useState('');
  const [text, setText] = useState('test');
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [vol, setVol] = useState(DEFAULT_VOL);

  return (
    <div className="space-y-4 md:p-2">
      <div className="theme shadow-focus w-full p-2 shadow md:w-96 md:rounded">
        <div className="py-4">
          <div className="mb-4">
            <Label htmlFor="text">Text</Label>
            <input
              className="shadow-focus w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              id="text"
              type="text"
              placeholder="Text"
              value={text}
              onChange={({ target: { value } }) => setText(value)}
            />
          </div>
        </div>

        <div className="py-4">
          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <input
              className="shadow-focus w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              id="description"
              type="text"
              placeholder="description"
              value={description}
              onChange={({ target: { value } }) => setDescription(value)}
            />
          </div>
        </div>

        <div className="py-4">
          <Label className="space-y-1" htmlFor="volume">
            Volume
          </Label>
          <div className="space-y-4">vol: {vol}</div>
          <input
            id="default-range"
            type="range"
            value={vol}
            onChange={({ target }) => {
              const v = Number(target?.value ?? 0);
              setVol(v);
            }}
            className="bg-input-range h-2 w-full cursor-pointer appearance-none rounded-lg"
          />
        </div>

        <Label htmlFor="text">{`Action: ${action}`}</Label>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1">
          <Button variant="default" size="md" onClick={() => setAction('Decline')}>
            Decline
          </Button>
          <Button variant="accent" size="md" onClick={() => setAction('Accept')}>
            Accept
          </Button>
        </div>
      </div>

      <figure className="theme p-8 md:flex md:rounded-xl md:p-0">
        <Image
          className="mx-auto h-auto w-24 rounded-full md:w-48 md:rounded-none"
          src="/image/sarah-dayan.jpg"
          alt=""
          width="384"
          height="512"
          priority
        />
        <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
          <blockquote>
            <p className="text-lg font-medium">{description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-theme-accent">{text}</div>
            <div className="text-theme-neutral">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Dashboard;
