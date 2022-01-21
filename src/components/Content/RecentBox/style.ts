import { css } from '@emotion/react';
import { fontSizeStyle } from '@/styles';

export const style = (mt: number, mb: number) => {
  return css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #33333350;

    & > div {
      padding: 10px;
      border-bottom: 1px solid #33333350;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      & > a {
        flex: 1;
      }

      & > div.update-date {
        color: #333333;
        letter-spacing: -1px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        & > svg {
          margin-right: 5px;
        }
      }

      &:nth-of-type(1) {
        border-top: 1px solid #33333350;
      }

      &:hover {
        background-color: #f5f5f5;
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
};
