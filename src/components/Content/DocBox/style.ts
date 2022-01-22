import { css } from '@emotion/react';
import { fontColorStyle, fontSizeStyle } from '@/styles';

export const style = (mt: number, mb: number) => {
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
      }

      &.toc {
        margin-top: ${mt}px;
        margin-bottom: ${mb}px;
      }

      &.content {
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
