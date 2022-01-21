import React from 'react';
import { style } from './style';

interface IUl {
  children: React.ReactNode;
}

export const Ul = ({ children, }: IUl) => {
  const UlStyle = style();

  return (
    <>
      <ul css={UlStyle}>{children}</ul>
    </>
  );
};
