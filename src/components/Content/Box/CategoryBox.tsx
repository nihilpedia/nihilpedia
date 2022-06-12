import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { IoMdTime } from 'react-icons/io';
import { IAllPage } from '@/types';
import { Box, DocTitle } from '@/components/Content';
import { A } from '@/components/docs';
import { getTimeString } from '@/utils';
import { fontSizeStyle } from '@/styles';

interface ICategory {
  docs: IAllPage[];
  category: string;
}

export const CategoryBox = ({ docs, category, }: ICategory) => {
  const CategoryBoxStyle = css`
    padding: 10px;
    border-bottom: 1px solid #33333350;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    & > a {
      flex: 1;
    }

    & > div.update-date {
      color: #333333;
      letter-spacing: -1px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & > svg {
        margin-right: 5px;
      }
    }

    &:nth-of-type(1) {
      border-top: 1px solid #33333350;
    }

    &:hover {
      background-color: #f5f5f5;
    }

    @media all and (min-width: 1024px) {
      font-size: ${fontSizeStyle[3]};
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${fontSizeStyle[3]};
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${fontSizeStyle[2]};
    }
    @media all and (max-width: 479px) {
      font-size: ${fontSizeStyle[2]};
    }
  `;

  return (
    <>
      <Box mt={10} mb={10}>
        <DocTitle>분류: {category}</DocTitle>
      </Box>
      <Box mt={10} mb={10}>
        {docs.map(({ slug, frontMatter, }) => (
          <div key={uuid()} css={CategoryBoxStyle}>
            <A href={slug}>{frontMatter.title}</A>
            <div className='update-date'>
              <IoMdTime />{getTimeString(frontMatter.updatedAt as number)}
            </div>
          </div>
        ))}
      </Box>
    </>
  );
};
