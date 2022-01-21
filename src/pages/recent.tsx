import React from 'react';
import { css } from '@emotion/react';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { getAllMdxCategories } from '@/utils/mdx';
import { IRecentPage } from '@/types';
import { RecentBox } from '@/components/Content';

const RecentPage = ({ docs, }: IRecentPage) => {
  const RecentPageStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '최근 문서',
    url: '/recent',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='recent-docs-page' css={RecentPageStyle}>
          <RecentBox docs={docs} mt={10} mb={10} />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const docs = getAllMdxCategories();

  return {
    props: {
      docs: docs.splice(0, 50),
    },
  };
};

export default RecentPage;
