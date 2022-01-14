import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { getMdxAllPage } from '@/utils/mdx';

const IndexPage = ({ test, }: {test: string}) => {
  const style = css``;

  console.log(test);

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='index-page' css={style}>메인</div>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const pages = getMdxAllPage();
  // console.log(pages);

  return {
    props: {
      test: '',
    },
  };
};

export default IndexPage;
