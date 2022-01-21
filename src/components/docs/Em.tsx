import React from 'react';
import { css } from '@emotion/react';

interface IEm {
  children: React.ReactNode;
}

export const Em = ({ children, }: IEm) => {
  const EmStyle = css`
    margin-right: 4px;
    color: inherit;
    font-weight: inherit;
  `;

  return (
    <>
      <em css={EmStyle}>{children}</em>
    </>
  );
};
