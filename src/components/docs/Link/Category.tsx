import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { fontColorStyle } from '@/styles';

interface ICategory {
  children: React.ReactNode;
  category: string;
}

export const Category = ({ children, category, }: ICategory) => {
  const CategoryStyle = css`
    color: ${fontColorStyle.blue};

    &:hover {
      color: ${fontColorStyle.blue2};
      text-decoration: underline;
    }
  `;

  return (
    <>
      <Link href={`/category/${category}`} passHref>
        <a css={CategoryStyle}>{children}</a>
      </Link>
    </>
  );
};
