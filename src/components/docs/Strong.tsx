import React from 'react';
import { css } from '@emotion/react';
import { fontColorStyle } from '@/styles';

interface IStrong {
  children: React.ReactNode;
}

export const Strong = ({ children, }: IStrong) => {
  const StrongStyle = css`
    font-weight: 900;
    color: ${fontColorStyle.black};
  `;

  return (
    <>
      <strong css={StrongStyle}>{children}</strong>
    </>
  );
};
