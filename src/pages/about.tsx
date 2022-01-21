import React from 'react';
import { css } from '@emotion/react';
import { MDXRemote } from 'next-mdx-remote';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { getMdx } from '@/utils/mdx';
import { IPage } from '@/types';
import { DocBox, MdxComponents } from '@/components/Content';
import { getTimeString } from '@/utils';

const AboutPage = ({ source, frontMatter, }: IPage) => {
  const AboutPageStyle = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '소개',
    url: '/about',
  });

  const updateTime = getTimeString(frontMatter.updatedAt as number);

  return (
    <>
      <AppLayout meta={meta}>
        <div id='about-page' css={AboutPageStyle}>
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

export const getStaticProps = async () => {
  const doc = await getMdx('소개');

  return {
    props: {
      ...doc,
    },
  };
};

export default AboutPage;
