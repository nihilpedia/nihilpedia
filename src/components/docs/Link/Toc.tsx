import React from 'react';
import { css } from '@emotion/react';
import { fontColorStyle } from '@/styles';

interface ITocLink {
  children: React.ReactNode;
  href: string;
}

export const TocLink = ({ children, href, }: ITocLink) => {
  const TocLinkStyle = css`
    color: ${fontColorStyle.blue};

    &:hover {
      color: ${fontColorStyle.blue2};
      text-decoration: underline;
    }

    & > strong {
      color: inherit;
    }
  `;

  return (
    <>
      <a href={href} css={TocLinkStyle}>{children}</a>
    </>
  );
};
