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
  const [ classString, setClassString, ] = useState('');
  const [ docSlugs, ] = useState<string[]>(
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('docSlugs'))
      : []
  );

  useEffect(() => {
    if (type === 'page') {
      const hrefArray = decodeURI(href).split('#toc');
      let withOutToc: string;

      if (hrefArray.length > 1) {
        [ withOutToc, ] = hrefArray;
      } else {
        [ withOutToc, ] = hrefArray;
      }

      if (docSlugs.includes(withOutToc)) {
        setClassString('blue-link');
      } else {
        setClassString('red-link');
      }
    }
  }, [ type, ]);

  useEffect(() => {
    switch (type) {
      case 'toc':
        setTypeStyle(css`
          color: ${fontColorStyle.blue};

          &:hover {
            color: ${fontColorStyle.blue2};
            text-decoration: underline;
          }
        `);
        break;
      case 'page':
        setTypeStyle(css`
          &.blue-link {
            color: ${fontColorStyle.blue};

            &:hover {
              color: ${fontColorStyle.blue2};
              text-decoration: underline;
            }
          }

          &.red-link {
            color: ${fontColorStyle.red};

            &:hover {
              color: ${fontColorStyle.red2};
              text-decoration: underline;
            }
          }
        `);
        break;
      case 'external':
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
        <Link href='/page/[name]' as={`/page/${href}`} passHref>
          <a css={LinkStyle} className={classString}>{children}</a>
        </Link>
      )}
      {type === 'toc' && (
        <a href={href} css={LinkStyle}>{children}</a>
      )}
      {type === 'external' && (
        <a href={href} css={LinkStyle} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )}
    </>
  );
};
