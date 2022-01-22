import { css } from '@emotion/react';
import { fontSizeStyle } from '@/styles';

export const style = () => {
  return css`
    margin-top: 30px;
    margin-bottom: 30px;

    & > li {
      font-weight: 500;
      letter-spacing: -1px;

      & > ul {
        & > li {
          & > ul {
            & > li {
              & > ul {
                & > li {
                  &:before {
                    content: '\\f0da';
                    font-weight: 900;
                  }

                  & li {
                    &:before {
                      content: '\\f0da';
                      font-weight: 900;
                    }
                  }
                }
              }

              &:before {
                content: '\\f054';
                font-weight: 900;
              }
            }
          }

          &:before {
            content: '\\f35a';
            font-weight: 500;
          }
        }
      }

      &:before {
        content: '\\f35a';
        font-weight: 900;
      }
    }

    & li {
      margin: 2px 0;
      color: #333333;

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

      &:before {
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }
    }

    & ul {
      padding: 0;
      margin: 0 0 0 30px;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  `;
};
