import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { getAllMdxCategories, getMdx } from '@/utils/mdx';
import { IPage } from '@/types';
import { DocBox, MdxComponents } from '@/components/Content';

interface IIndexPage extends IPage {
  docSlugs: string[];
  categories: string[];
}

const IndexPage = ({
  source, frontMatter, docSlugs, categories,
}: IIndexPage) => {
  const IndexPageStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta} docSlugs={docSlugs}>
        <div id='index-page' css={IndexPageStyle}>
          <DocBox frontMatter={frontMatter}>
            <MDXRemote {...source} components={MdxComponents} />
          </DocBox>
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const doc = await getMdx('니힐라 위키');
  const { slugs, } = getAllMdxCategories();

  const categoriesSet = new Set(getAllMdxCategories().docs
    .map((doc) => doc.frontMatter.categories)
    .filter((category) => category !== ''));

  const categories = Array.from(categoriesSet);

  return {
    props: {
      ...doc,
      docSlugs: slugs,
      categories,
    },
  };
};

export default IndexPage;
