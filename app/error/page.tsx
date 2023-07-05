'use client';

import ErrorPage from 'next/error';

const errorMessages: Record<string, string> = {
  400: 'Bad Request',
  403: 'アクセス権がありません',
  404: 'ページが見つかりません',
  500: 'Internal Server Error.',
};

type PageProps = {
  searchParams: {
    code: string;
  };
};

const DEFAULT_CODE = 400;
const DEFAULT_MESSAGE = '不具合が発生しました';

function Page(props: PageProps) {
  const code: string = props?.searchParams?.code ?? DEFAULT_CODE;
  const title = errorMessages?.[code] ?? DEFAULT_MESSAGE;

  return <ErrorPage statusCode={Number(code)} title={title} />;
}

export default Page;
