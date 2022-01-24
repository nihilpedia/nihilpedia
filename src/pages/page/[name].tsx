import React from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getAllMdxCategories, getMdx } from '@/utils/mdx';
import { IPage } from '@/types';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { DocBox, MdxComponents } from '@/components/Content';

interface IPageName extends IPage {
  docSlugs: string[];
}

const PageName = ({ source, frontMatter, docSlugs, }: IPageName) => {
  const PageNameStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: frontMatter.title,
    url: `/page/${frontMatter.title}`,
  });

  return (
    <>
      <AppLayout meta={meta} docSlugs={docSlugs}>
        <div id='doc-page' css={PageNameStyle}>
          <DocBox frontMatter={frontMatter}>
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
  const docSlugs = getAllMdxCategories().map((doc) => doc.slug);

  return {
    props: {
      ...doc,
      docSlugs,
    },
  };
};

export default PageName;
