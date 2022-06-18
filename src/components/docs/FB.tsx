import React from 'react';
import { css } from '@emotion/react';
import { fontColorStyle, fontSizeStyle } from '@/styles';

interface IFB {
  number: (number | string);
  children: React.ReactNode;
}

export const FB = ({ number, children, }: IFB) => {
  const FBStyle = css`
    font-weight: 500;
    letter-spacing: -1px;
    text-align: justify;
    color: #333333;
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 1.5;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > a.number {
      font-weight: 900;
      color: ${fontColorStyle.blue};
      margin-right: 10px;

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

  const LineStyle = css`
    background-color: transparent;
    border: none;
    border-bottom: 5px dotted #33333350;
    margin-top: 60px;
    margin-bottom: 60px;
  `;

  return (
    <>
      {number === 1 && (
        <hr css={LineStyle} />
      )}
      <p id={`fb-${number}`} className='fb' css={FBStyle}>
        <a href={`#ft-${number}`} className='number'>[{number}]</a>
        {children}
      </p>
    </>
  );
};
