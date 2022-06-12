import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { fontColorStyle } from '@/styles';

interface IDocsLink {
  children: React.ReactNode;
  href: string;
  docSlugs: string[];
}

export const DocsLink = ({ children, href, docSlugs, }: IDocsLink) => {
  const [ classString, setClassString, ] = useState('');

  useEffect(() => {
    const hrefArray = decodeURI(href).split('#toc');
    let withOutToc: string;

    if (hrefArray.length > 1) {
      [ withOutToc, ] = hrefArray;
    } else {
      [ withOutToc, ] = hrefArray;
    }

    if (docSlugs === null) {
      setClassString('blue-link');
    } else {
      // eslint-disable-next-line no-lonely-if
      if (docSlugs.includes(withOutToc)) {
        setClassString('blue-link');
      } else {
        setClassString('red-link');
      }
    }
  }, []);

  const DocsLinkStyle = css`
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

    & > strong {
      color: inherit;
    }
  `;

  return (
    <>
      <Link href='/page/[doc]' as={`/page/${href}`} passHref>
        <a css={DocsLinkStyle} className={classString}>{children}</a>
      </Link>
    </>
  );
};
