import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { fontColorStyle } from '@/styles';

interface IA {
  href: string;
  children: React.ReactNode;
  type?: ('page' | 'external' | 'toc')
}

export const A = ({
  href, children, type = 'page',
}: IA) => {
  const [ typeStyle, setTypeStyle, ] = useState(css``);
  const [ typeHref, setTypeHref, ] = useState('/');

  useEffect(() => {
    switch (type) {
      case 'toc':
        setTypeHref(href);
        setTypeStyle(css`
          color: ${fontColorStyle.blue};

          &:hover {
            color: ${fontColorStyle.blue3};
            text-decoration: underline;
          }
        `);
        break;
      case 'page':
        setTypeHref(`/page/${href}`);
        setTypeStyle(css`
          color: ${fontColorStyle.blue};

          &:hover {
            color: ${fontColorStyle.blue3};
            text-decoration: underline;
          }
        `);
        break;
      case 'external':
        setTypeHref(href);
        setTypeStyle(css`
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
        `);
        break;
      default:
    }
  }, [ type, href, ]);

  const LinkStyle = css`
    ${typeStyle};

    & > strong {
      color: inherit;
    }
  `;

  return (
    <>
      {type === 'page' && (
        <Link href='/page/[slug]' as={typeHref} passHref>
          <a css={LinkStyle}>{children}</a>
        </Link>
      )}
      {type === 'toc' && (
        <Link href={typeHref} passHref>
          <a css={LinkStyle}>{children}</a>
        </Link>
      )}
      {type === 'external' && (
        <a href={typeHref} css={LinkStyle} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )}
    </>
  );
};
