import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { getMdx } from '@/utils/mdx';
import { IPage } from '@/types';
import { DocBox, MdxComponents } from '@/components/Content';
import { getTimeString } from '@/utils';

const IndexPage = ({ source, frontMatter, }: IPage) => {
  const IndexPageStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  const updateTime = getTimeString(frontMatter.updatedAt as number);

  return (
    <>
      <AppLayout meta={meta}>
        <div id='index-page' css={IndexPageStyle}>
          <DocBox
            title={frontMatter.title}
            updateTime={updateTime}
            mt={10}
            mb={10}
          >
            <MDXRemote {...source} components={MdxComponents} />
          </DocBox>
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const doc = await getMdx('니힐라 위키');

  return {
    props: {
      ...doc,
    },
  };
};

export default IndexPage;
