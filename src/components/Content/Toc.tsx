import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { IH2 } from '@/types';
import { A } from '@/components/docs';
import { fontSizeStyle } from '@/styles';

interface IToc {
  toc: IH2[];
  className: string;
}

export const Toc = ({ toc, className, }: IToc) => {
  const TocStyle = css`
    & > p {
      margin-bottom: 20px;
      font-weight: 500;
      letter-spacing: -1px;
      color: #333333;
    }

    & > ul {
      & li {
        letter-spacing: -1px;
        font-weight: 500;
        margin: 2px 0;

        & > a {
          margin-right: 5px;
        }

        & > span {
          color: #333333;
        }

        & ul {
          margin-left: 20px;
        }
      }
    }

    @media all and (min-width: 1024px) {
      & > p,
      & li {
        font-size: ${fontSizeStyle[3]};
      }
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      & > p,
      & li {
        font-size: ${fontSizeStyle[3]};
      }
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      & > p,
      & li {
        font-size: ${fontSizeStyle[2]};
      }
    }
    @media all and (max-width: 479px) {
      & > p,
      & li {
        font-size: ${fontSizeStyle[2]};
      }
    }
  `;

  return (
    <>
      <div className={className} css={TocStyle}>
        <p>목차</p>
        <ul>
          {toc.map((item1, index1) => (
            <li key={uuid()}>
              <A href={`#${item1.id}`} type='toc'>
                {index1 + 1}.
              </A>
              <span>
                {
                  item1.link === ''
                    ? (<>{item1.text}</>)
                    : (
                      <>
                        <A href={item1.link}>{item1.text}</A>
                      </>
                    )
                }
              </span>
              {item1.items.length > 0 && (
                <ul>
                  {item1.items.map((item2, index2) => (
                    <li key={uuid()}>
                      <A href={`#${item2.id}`} type='toc'>
                        {index1 + 1}.{index2 + 1}.
                      </A>
                      <span>
                        {
                          item2.link === ''
                            ? (<>{item2.text}</>)
                            : (
                              <>
                                <A href={item2.link}>{item2.text}</A>
                              </>
                            )
                        }
                      </span>
                      {item2.items.length > 0 && (
                        <ul>
                          {item2.items.map((item3, index3) => (
                            <li key={uuid()}>
                              <A href={`#${item3.id}`} type='toc'>
                                {index1 + 1}.{index2 + 1}.{index3 + 1}.
                              </A>
                              <span>
                                {
                                  item3.link === ''
                                    ? (<>{item3.text}</>)
                                    : (
                                      <>
                                        <A href={item3.link}>{item3.text}</A>
                                      </>
                                    )
                                }
                              </span>
                              {item3.items.length > 0 && (
                                <ul>
                                  {item3.items.map((item4, index4) => (
                                    <li key={uuid()}>
                                      <A href={`#${item4.id}`} type='toc'>
                                        {index1 + 1}.{index2 + 1}.{index3 + 1}.{index4 + 1}.
                                      </A>
                                      <span>
                                        {
                                          item4.link === ''
                                            ? (<>{item4.text}</>)
                                            : (
                                              <>
                                                <A href={item4.link}>{item4.text}</A>
                                              </>
                                            )
                                        }
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
