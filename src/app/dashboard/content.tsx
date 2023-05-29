'use client';
import Image from 'next/image';
import { useState } from 'react';
import classNames from '@/lib/class-names';
import styles from '@/styles/dashboard.module.css';

const DEFAULT_VOL = 50;
const DEFAULT_DESCRIPTION =
  "Tailwind CSS is the only framework that I've seen scale on large teams.It’s easy to customize, adapts to any design, and the build size is tiny.";

function Label(props: { className?: string; htmlFor: string; children: string }) {
  return (
    <label
      className={classNames('mb-2 block text-sm font-bold text-dark dark:text-light', props.className ?? '')}
      htmlFor={props.htmlFor}
    >
      {props.children}
    </label>
  );
}

function Dashboard() {
  const [action, setAction] = useState('');
  const [text, setText] = useState('');
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [vol, setVol] = useState(DEFAULT_VOL);

  return (
    <div className="space-y-4 md:p-2">
      <div className="w-full bg-white p-2 shadow dark:bg-dark md:w-96 md:rounded">
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

        <div className="py-4">
          <div className="mb-4">
            <Label htmlFor="text">Description</Label>
            <input
              className="w-full appearance-none rounded border px-3 py-2 leading-tight text-dark shadow focus:outline-none"
              id="text"
              type="text"
              placeholder="Text"
              value={description}
              onChange={({ target: { value } }) => setDescription(value)}
            />
          </div>
        </div>

        <div className="py-4">
          <Label className="space-y-1" htmlFor="default-range">
            Volume
          </Label>
          <div className="space-y-4 text-dark dark:text-white">vol: {vol}</div>
          <input
            id="default-range"
            type="range"
            value={vol}
            onChange={({ target }) => {
              const v = Number(target?.value ?? 0);
              setVol(v);
            }}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary-100 dark:bg-primary-500"
          />
        </div>

        <Label htmlFor="text">{`Action: ${action}`}</Label>
        <div className="grid grid-cols-2 gap-x-6">
          <button
            onClick={() => setAction('Decline')}
            className={classNames(styles.btn, 'bg-slate-500 text-white hover:bg-slate-300 hover:text-dark')}
          >
            Decline
          </button>
          <button
            onClick={() => setAction('Accept')}
            className={classNames(styles.btn, 'bg-sky-500 text-white hover:bg-sky-400')}
          >
            Accept
          </button>
        </div>
      </div>

      <figure className="bg-primary-100 p-8 dark:bg-dark md:flex md:rounded-xl md:p-0">
        <Image
          className="mx-auto h-auto w-24 rounded-full md:w-48 md:rounded-none"
          src="/sarah-dayan.jpg"
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
            <div className="text-sky-500 dark:text-sky-400">{text}</div>
            <div className="text-primary-700 dark:text-primary-400">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Dashboard;
