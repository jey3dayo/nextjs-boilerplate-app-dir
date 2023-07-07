'use client';

import ErrorPage from 'next/error';
import { HttpCodes, messages } from 'constants/api';

function Page() {
  return <ErrorPage statusCode={Number(HttpCodes.NotFound)} title={messages.pageNotFound} />;
}

export default Page;
