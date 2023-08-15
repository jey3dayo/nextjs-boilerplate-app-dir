'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { InView } from '@/components/ui/in-view';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const DEFAULT_VOL = 50;
const DEFAULT_DESCRIPTION =
  "Tailwind CSS is the only framework that I've seen scale on large teams.It’s easy to customize, adapts to any design, and the build size is tiny.";

function Dashboard() {
  const [action, setAction] = useState('');
  const [text, setText] = useState('test');
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [vol, setVol] = useState(DEFAULT_VOL);

  return (
    <div className="m-4 space-y-4 md:p-2">
      <div className="box w-full p-4 md:w-96">
        <div className="py-4">
          <div className="mb-4">
            <Label htmlFor="text">Text</Label>
            <Input
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
            <Input
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
          <Input
            id="default-range"
            type="range"
            value={vol}
            onChange={({ target }) => {
              const v = Number(target?.value ?? 0);
              setVol(v);
            }}
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

      <InView>
        <figure className="bg-background p-8 md:flex md:rounded-md md:p-0">
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
              <div className="text-primary">{text}</div>
              <div className="text-weak">Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </InView>
    </div>
  );
}

export default Dashboard;
