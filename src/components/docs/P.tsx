import React from 'react';
import { css } from '@emotion/react';
import { fontSizeStyle } from '@/styles';

interface IP {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
}

export const P = ({ children, mt = 20, mb = 20, }: IP) => {
  const PStyle = css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    font-weight: 500;
    text-align: justify;
    letter-spacing: -1px;
    line-height: 1.5;
    color: #333333;

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
      <p css={PStyle}>{children}</p>
    </>
  );
};
