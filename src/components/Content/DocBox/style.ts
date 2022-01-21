import { css } from '@emotion/react';
import { fontColorStyle, fontSizeStyle } from '@/styles';

export const style = (mt: number, mb: number, error: boolean) => {
  return css`
    & > .doc-box {
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #33333350;
      box-sizing: border-box;

      &.header {
        margin-top: ${mt}px;
        margin-bottom: ${mb}px;

        & > #wiki-title {
          font-weight: 900;
          color: #333333;
          letter-spacing: -1px;
          ${!error && css`
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #88888850;
          `};

          & > span {
            color: inherit;
            font-weight: inherit;
            font-size: 140%;
          }

          @media all and (min-width: 1024px) {
            font-size: ${fontSizeStyle[6]};
          }
          @media all and (min-width: 768px) and (max-width: 1023px) {
            font-size: ${fontSizeStyle[6]};
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: ${fontSizeStyle[5]};
          }
          @media all and (max-width: 479px) {
            font-size: ${fontSizeStyle[4]};
          }
        }

        & > .update-date {
          color: #333333;
          font-weight: 500;
          letter-spacing: -1px;

          & > span {
            font-size: 90%;
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

      &.toc {
        margin-top: ${mt}px;
        margin-bottom: ${mb}px;
      }

      & > p {
        & > .page-name {
          font-weight: 900;
          color: ${fontColorStyle.red};
        }
      }
    }
  `;
};
