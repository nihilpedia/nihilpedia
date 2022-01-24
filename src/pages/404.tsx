import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { DocBox, ErrorBox } from '@/components/Content';
import { getAllMdxCategories } from '@/utils/mdx';

interface INotPoundPage {
  docSlugs: string[];
}

const NotPound404 = ({ docSlugs, }: INotPoundPage) => {
  const NotPound404Style = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '에러',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta} docSlugs={docSlugs}>
        <div id='wiki-not-pound-page' css={NotPound404Style}>
          <DocBox error>
            <ErrorBox />
          </DocBox>
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const docSlugs = getAllMdxCategories().map((doc) => doc.slug);

  return {
    props: {
      docSlugs,
    },
  };
};

export default NotPound404;
