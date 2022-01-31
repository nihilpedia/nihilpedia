import React from 'react';
import { css } from '@emotion/react';
import { fontColorStyle, fontSizeStyle } from '@/styles';

interface IFT {
  number: (number | string);
}

export const FT = ({ number, }: IFT) => {
  const FTStyle = css`
    & > a {
      color: ${fontColorStyle.blue};
      font-size: 80%;
      letter-spacing: -1px;

      &:hover {
        color: ${fontColorStyle.blue2};
        text-decoration: underline;
      }
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
      <sup id={`ft-${number}`} css={FTStyle}>
        <a href={`#fb-${number}`}>[{number}]</a>
      </sup>
    </>
  );
};
