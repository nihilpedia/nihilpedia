import React from 'react';
import { css } from '@emotion/react';
import { IoMdTime } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { fontSizeStyle } from '@/styles';

interface IContentBox {
  children: React.ReactNode;
  error?: boolean;
  tocRef?: React.MutableRefObject<HTMLDivElement>;
  updateTime?: string;
  mt?: number;
  mb?: number;
}

export const ContentBox = ({
  children, error, tocRef, updateTime, mt = 0, mb = 0,
}: IContentBox) => {
  const ContentBoxStyle = css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #33333350;
    box-sizing: border-box;

    & > .update-date {
      color: #333333;
      font-weight: 500;
      letter-spacing: -1px;
      line-height: 1;
      margin-bottom: 40px;

      & > span {
        font-size: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        & > svg {
          margin-right: 2px;
        }
      }
    }

    & > .author {
      text-align: right;
      color: #333333;
      letter-spacing: -1px;
      font-weight: 500;
      line-height: 1;
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      & > svg {
        margin-right: 2px;
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

  return (
    <>
      <>
        {error && (
          <div css={ContentBoxStyle}>
            {children}
          </div>
        )}
        {error === false && (
          <div css={ContentBoxStyle} ref={tocRef}>
            <div className='update-date'>
              <span><IoMdTime />최근 수정 시각: {updateTime}</span>
            </div>
            {children}
            <div className='author'><FaUserCircle />NIHILncunia</div>
          </div>
        )}
      </>
    </>
  );
};
