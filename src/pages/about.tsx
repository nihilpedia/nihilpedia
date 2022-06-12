import React from 'react';
import { css } from '@emotion/react';
import { MDXRemote } from 'next-mdx-remote';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { getAllMdxCategories, getMdx } from '@/utils/mdx';
import { IPage } from '@/types';
import { DocBox, MdxComponents } from '@/components/Content';

interface IAboutPage extends IPage {
  docSlugs: string[];
}

const AboutPage = ({ source, frontMatter, docSlugs, }: IAboutPage) => {
  const AboutPageStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '소개',
    url: '/about',
  });

  return (
    <>
      <AppLayout meta={meta} docSlugs={docSlugs}>
        <div id='about-page' css={AboutPageStyle}>
          <DocBox frontMatter={frontMatter}>
            <MDXRemote {...source} components={MdxComponents} />
          </DocBox>
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const doc = await getMdx('소개');
  const { slugs, } = getAllMdxCategories();

  return {
    props: {
      ...doc,
      docSlugs: slugs,
    },
  };
};

export default AboutPage;
