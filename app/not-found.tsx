'use client';

import ErrorPage from 'next/error';
import { HttpCodes, messages } from 'constants/api';

export default function NotFound() {
  return <ErrorPage statusCode={Number(HttpCodes.NotFound)} title={messages.pageNotFound} />;
}
