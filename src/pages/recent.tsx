import React from 'react';
import { css } from '@emotion/react';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { getAllMdxCategories } from '@/utils/mdx';
import { IRecentPage } from '@/types';
import { RecentBox } from '@/components/Content';

const RecentPage = ({ docs, docSlugs, }: IRecentPage) => {
  const RecentPageStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '최근 문서',
    url: '/recent',
  });

  return (
    <>
      <AppLayout meta={meta} docSlugs={docSlugs}>
        <div id='recent-docs-page' css={RecentPageStyle}>
          <RecentBox docs={docs} />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const { docs, } = getAllMdxCategories();
  const { slugs, } = getAllMdxCategories();

  return {
    props: {
      docs: docs.splice(0, 50),
      docSlugs: slugs,
    },
  };
};

export default RecentPage;
