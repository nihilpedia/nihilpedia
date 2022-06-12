import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { fontSizeStyle } from '@/styles';
import { siteData } from '@/data';

export const HeaderBlock = () => {
  const HeaderBlockStyle = css`
    background-color: #333333;
    padding: 20px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 1;
      padding-bottom: 10px;
      border-bottom: 1px solid #88888850;
      margin-bottom: 10px;
      letter-spacing: -1px;

      & > div.header-image {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        & > img {
          margin-right: 5px;
          width: 40px;
          height: 40px;
          display: block;
        }

        & > span {
          font-weight: 900;
          font-size: 120%;
          color: #ffffff;
        }
      }

      & > div.version {
        & > p {
          color: #ffffff;
          font-size: 70%;
          font-weight: 500;
        }
      }

      @media all and (min-width: 1024px) {
        font-size: ${fontSizeStyle[6]};
      }
      @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: ${fontSizeStyle[5]};
      }
      @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${fontSizeStyle[5]};
      }
      @media all and (max-width: 479px) {
        font-size: ${fontSizeStyle[4]};
      }
    }

    & > nav {
      text-align: center;

      & > a {
        color: #bbbbbb;
        line-height: 1;
        letter-spacing: -1px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 10px;

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
      }
    }
  `;

  return (
    <>
      <header css={HeaderBlockStyle}>
        <div>
          <div className='header-image'>
            <img src='/images/nihil-logo.svg' alt='니힐 로고' />
            <span>니힐라 위키</span>
          </div>
          <div className='version'>
            <p>버전 {siteData.siteVersion}</p>
          </div>
        </div>
        <nav>
          <Link href='/' passHref>
            <a><FaHome />홈</a>
          </Link>
          <Link href='/about' passHref>
            <a><FaInfoCircle />소개</a>
          </Link>
          <Link href='/recent' passHref>
            <a><IoMdTime />최근 문서</a>
          </Link>
        </nav>
      </header>
    </>
  );
};
