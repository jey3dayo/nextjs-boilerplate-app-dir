'use client';

import ErrorPage from 'next/error';
import { HttpCodes } from 'constants/api';
import { messages } from '@/constants/messages';

export default function NotFound() {
  return <ErrorPage statusCode={Number(HttpCodes.NotFound)} title={messages.pageNotFound} />;
}
