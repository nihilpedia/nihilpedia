import React from 'react';
import { css } from '@emotion/react';
import { AiFillPicture } from 'react-icons/ai';
import { fontSizeStyle } from '@/styles';

interface IImage {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, }: IImage) => {
  const ImageStyle = css`
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #33333305;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #33333350;

    & > img {
      display: block;
      margin: 0 auto 10px auto;
      border-radius: 10px;
      border: 5px solid #333333;
      box-sizing: border-box;
      max-width: 100%;
    }

    & > figcaption {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;
      font-weight: 500;
      color: #333333;

      & > svg {
        margin-right: 2px;
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
  `;

  return (
    <>
      <figure css={ImageStyle}>
        <img src={src} alt={alt} />
        <figcaption><AiFillPicture />{alt}</figcaption>
      </figure>
    </>
  );
};
