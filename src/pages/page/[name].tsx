import React from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getAllMdxCategories, getMdx } from '@/utils/mdx';
import { IPage } from '@/types';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { DocBox, MdxComponents } from '@/components/Content';
import { getTimeString } from '@/utils';

const PageName = ({ source, frontMatter, }: IPage) => {
  const PageNameStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: frontMatter.title,
    url: `/page/${frontMatter.title}`,
  });

  const updateTime = getTimeString(frontMatter.updatedAt as number);

  return (
    <>
      <AppLayout meta={meta}>
        <div id='doc-page' css={PageNameStyle}>
          <DocBox title={frontMatter.title} updateTime={updateTime} mt={10} mb={10}>
            <MDXRemote {...source} components={MdxComponents} />
          </DocBox>
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllMdxCategories().map(({ slug, }) => ({
      params: {
        name: slug,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    name: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const { name, } = params;

  const doc = await getMdx(name);

  return {
    props: {
      ...doc,
    },
  };
};

export default PageName;
