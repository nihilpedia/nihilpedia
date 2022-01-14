import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

export const MainBlock = ({ children, }: IHaveChildren) => {
  const style = css``;

  return (
    <>
      <main css={style}>
        {children}
      </main>
    </>
  );
};
