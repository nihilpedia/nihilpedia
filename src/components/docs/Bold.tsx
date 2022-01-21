import React from 'react';
import { css } from '@emotion/react';

interface IBold {
  children: React.ReactNode;
}

export const Bold = ({ children, }: IBold) => {
  const BoldStyle = css`
    color: #333333;
    font-weight: 900;
  `;

  return (
    <>
      <span css={BoldStyle}>{children}</span>
    </>
  );
};
