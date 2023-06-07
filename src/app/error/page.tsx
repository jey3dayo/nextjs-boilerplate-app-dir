'use client';

import ErrorPage from 'next/error';

type PageProps = {
  searchParams: {
    code: string;
  };
};

const DEFAULT_CODE = 400;

async function Page(props: PageProps): Promise<JSX.Element> {
  const code: string = props?.searchParams?.code ?? DEFAULT_CODE;

  return <ErrorPage statusCode={Number(code)} />;
}

export default Page;
