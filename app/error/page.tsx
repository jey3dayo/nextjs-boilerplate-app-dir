'use client';

import ErrorPage from 'next/error';
import { errorMessages, HttpCodes, HttpCodeValue } from 'constants/api';
import { messages } from '@/constants/messages';

type PageProps = {
  searchParams: {
    code: string;
  };
};

function Page(props: PageProps) {
  const code = (props?.searchParams?.code ?? HttpCodes.BadRequest) as unknown as HttpCodeValue;
  const title = errorMessages?.[code] ?? messages.unknownError;

  return <ErrorPage statusCode={Number(code)} title={title} />;
}

export default Page;
