import React from 'react';
import { css } from '@emotion/react';
import { fontColorStyle, fontSizeStyle } from '@/styles';

interface IQBlock {
  children: React.ReactNode;
  who?: string;
  mt?: number;
  mb?: number;
}

export const QBlock = ({
  children, who, mt = 30, mb = 30,
}: IQBlock) => {
  const QBlockStyle = css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    padding: 10px;
    background-color: ${fontColorStyle.blue2}10;
    border: 2px solid ${fontColorStyle.blue2}50;
    border-left: 20px solid ${fontColorStyle.blue2};

    & > div {
      &:nth-of-type(1) {
        & > p {
          letter-spacing: -1px;
          color: #333333;
          margin: 10px 0;
          line-height: 1.5;
          text-indent: 0;

          & > strong {
            color: ${fontColorStyle.blue2};
          }

          &:nth-of-type(1) {
            margin-top: 0;
          }

          &:nth-last-of-type(1) {
            margin-bottom: 0;
          }
        }
      }

      &:nth-of-type(2) {
        padding-top: 20px;
        margin-top: 20px;
        border-top: 5px dotted ${fontColorStyle.blue2}70;

        & > p {
          letter-spacing: -1px;
          color: #333333;
          font-weight: 500;
          line-height: 1;

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
            font-size: ${fontSizeStyle[1]};
          }
        }
      }
    }
  `;

  return (
    <>
      <blockquote css={QBlockStyle}>
        <div>
          {children}
        </div>
        {who && (
          <div>
            <p>{who}</p>
          </div>
        )}
      </blockquote>
    </>
  );
};
