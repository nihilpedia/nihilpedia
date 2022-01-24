import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import { fontColorStyle, fontSizeStyle } from '@/styles';

interface IH {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  type: ('h2' | 'h3' | 'h4' | 'h5' | 'h6');
}

export const H = ({
  children, type, mt = 40, mb = 40,
}: IH): React.ReactElement => {
  const [ style, setStyle, ] = useState(css``);

  useEffect(() => {
    switch (type) {
      case 'h2':
        setStyle(css`
          font-weight: 900;

          & > span,
          & > a {
            font-size: 140%;
          }
        `);
        break;
      case 'h3':
        setStyle(css`
          font-weight: 900;

          & > span,
          & > a {
            font-size: 120%;
          }
        `);
        break;
      case 'h4':
        setStyle(css`
          font-weight: 900;

          & > span,
          & > a {
            font-size: 110%;
          }
        `);
        break;
      case 'h5':
        setStyle(css`
          font-weight: 900;

          & > span,
          & > a {
            font-size: 100%;
          }
        `);
        break;
      case 'h6':
        setStyle(css`
          font-weight: 900;

          & > span,
          & > a {
            font-size: 90%;
          }
        `);
        break;
      default:
    }
  }, [ type, ]);

  const HStyle = css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    text-align: justify;
    line-height: 1;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${fontColorStyle.black};
    padding-bottom: 10px;
    border-bottom: 1px solid #33333350;
    ${style};

    & > .header-index {
      color: ${fontColorStyle.blue};
      margin-right: 5px;

      &:hover {
        color: ${fontColorStyle.blue2};
        text-decoration: underline;
      }
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
  `;

  const content = (
    <>
      <a className='header-index' href='#wiki-title' aria-label='top' />
      <span>{children}</span>
    </>
  );

  return jsx(
    type,
    {
      className: `wiki-heading ${type}`,
      css: HStyle,
    },
    content
  );
};
