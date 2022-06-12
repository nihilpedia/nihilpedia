import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { fontColorStyle } from '@/styles';

interface IHomeLink {
  children: React.ReactNode;
}

export const HomeLink = ({ children, }: IHomeLink) => {
  const HomeLinkStyle = css`
    color: ${fontColorStyle.blue};

    &:hover {
      color: ${fontColorStyle.blue2};
      text-decoration: underline;
    }
  `;

  return (
    <>
      <Link href='/src/pages' passHref>
        <a css={HomeLinkStyle}>{children}</a>
      </Link>
    </>
  );
};
