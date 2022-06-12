import React from 'react';
import { css } from '@emotion/react';
import { fontColorStyle } from '@/styles';

interface IExternalLink {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink = ({ children, href, }: IExternalLink) => {
  const ExternalLinkStyle = css`
    color: ${fontColorStyle.green};
    margin-right: 2px;

    &:after {
      content: '\\f360';
      font-weight: 900;
      margin-left: 5px;
      font-family: 'Font Awesome 5 Free', sans-serif;
    }

    &:hover {
      color: ${fontColorStyle.green2};
      text-decoration: underline;
    }

    & > strong {
      color: inherit;
    }
  `;

  return (
    <>
      <a href={href} css={ExternalLinkStyle} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    </>
  );
};
