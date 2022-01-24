import React from 'react';
import { css } from '@emotion/react';
import { IChildren } from '@/types';
import { fontSizeStyle } from '@/styles';

export const DocTitle = ({ children, }: IChildren) => {
  const DocTitleStyle = css`
    font-weight: 900;
    color: #333333;
    letter-spacing: -1px;

    & > span {
      color: inherit;
      font-weight: inherit;
      font-size: 140%;
    }

    @media all and (min-width: 1024px) {
      font-size: ${fontSizeStyle[6]};
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${fontSizeStyle[6]};
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${fontSizeStyle[5]};
    }
    @media all and (max-width: 479px) {
      font-size: ${fontSizeStyle[4]};
    }
  `;

  return (
    <>
      <h1 id='wiki-title' css={DocTitleStyle}>
        <span>{children}</span>
      </h1>
    </>
  );
};
