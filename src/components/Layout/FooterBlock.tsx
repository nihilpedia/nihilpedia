import React from 'react';
import { css } from '@emotion/react';
import { FaRegCopyright, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { fontSizeStyle } from '@/styles';

export const FooterBlock = () => {
  const FooterBlockStyle = css`
    padding: 20px;
    background-color: #333333;

    & > .link {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #88888850;
      line-height: 1;
      letter-spacing: -1px;
      text-align: center;

      & > a {
        color: #bbbbbb;
        margin-right: 10px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &:nth-last-of-type(1) {
          margin-right: 0;
        }

        & > svg {
          margin-right: 2px;
        }

        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }

    & > .copy {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;
      color: #ffffff;
      letter-spacing: -1px;
      font-weight: 900;

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

  const year = `2004-${new Date().getFullYear()}`;

  return (
    <>
      <footer css={FooterBlockStyle}>
        <p className='link'>
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener'>
            <MdEmail />이메일
          </a>
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener'>
            <FaInstagram />인스타그램
          </a>
        </p>
        <p className='copy'><FaRegCopyright /> {year}. NIHILncunia.</p>
      </footer>
    </>
  );
};
