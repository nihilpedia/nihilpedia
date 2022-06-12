import React from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllMdxCategories } from '@/utils/mdx';
import { IAllPage } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { CategoryBox } from '@/components/Content';

interface ICategoryPage {
  category: string;
  docs: IAllPage[];
  docSlugs: string[];
}

const CategoryPage = ({ category, docs, docSlugs, }: ICategoryPage) => {
  const CategoryPageStyle = css``;

  const meta = useSiteMeta({
    title: `분류: ${category.replace(/ /g, ' ')}`,
    url: `/category/${category}`,
  });

  return (
    <>
      <AppLayout meta={meta} docSlugs={docSlugs}>
        <div id='category-page' css={CategoryPageStyle}>
          <CategoryBox docs={docs} category={category} />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesSet = new Set(getAllMdxCategories().docs
    .map((doc) => doc.frontMatter.categories.replace(/ /g, '_'))
    .filter((category) => category !== ''));

  const categories = Array.from(categoriesSet);

  return {
    paths: categories.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    category: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const { category, } = params;
  const { docs, slugs, } = getAllMdxCategories();

  return {
    props: {
      category: category.replace(/_/g, ' '),
      docs: docs.filter(({ frontMatter, }) => {
        return frontMatter.categories === category.replace(/_/g, ' ');
      }),
      docSlugs: slugs,
    },
  };
};

export default CategoryPage;
