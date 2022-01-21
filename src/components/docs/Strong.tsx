import React from 'react';
import { css } from '@emotion/react';

interface IStrong {
  children: React.ReactNode;
}

export const Strong = ({ children, }: IStrong) => {
  const StrongStyle = css`
    font-weight: 900;
    color: inherit;
  `;

  return (
    <>
      <strong css={StrongStyle}>{children}</strong>
    </>
  );
};
