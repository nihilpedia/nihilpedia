import React from 'react';
import { css } from '@emotion/react';

interface IBox {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
}

export const Box = ({
  children, mt = 0, mb = 0,
}: IBox) => {
  const BoxStyle = css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #33333350;
    box-sizing: border-box;
  `;

  return (
    <>
      <div css={BoxStyle}>{children}</div>
    </>
  );
};
