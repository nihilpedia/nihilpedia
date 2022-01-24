import React from 'react';
import { css } from '@emotion/react';
import { IChildren } from '@/types';

export const MainBlock = ({ children, }: IChildren) => {
  const style = css``;

  return (
    <>
      <main css={style}>
        {children}
      </main>
    </>
  );
};
