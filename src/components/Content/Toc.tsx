import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { IH2 } from '@/types';
import { TocLi } from '@/components/Content';
import { fontSizeStyle } from '@/styles';

interface IToc {
  toc: IH2[];
}

export const Toc = ({ toc, }: IToc) => {
  const TocTitleStyle = css`
    margin-bottom: 20px;
    font-weight: 900;
    letter-spacing: -1px;
    color: #333333;

    & > span {
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
  `;

  const TocStyle = css`
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

    @media all and (min-width: 1024px) {
      & li {
        font-size: ${fontSizeStyle[3]};
      }
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      & li {
        font-size: ${fontSizeStyle[3]};
      }
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      & li {
        font-size: ${fontSizeStyle[2]};
      }
    }
    @media all and (max-width: 479px) {
      & li {
        font-size: ${fontSizeStyle[2]};
      }
    }
  `;

  return (
    <>
      <p id='toc-title' css={TocTitleStyle}>
        <span>목차</span>
      </p>
      <ul css={TocStyle}>
        {toc.map((item1, index1) => {
          const h2Index = `${index1 + 1}.`;
          return (
            <TocLi
              key={uuid()}
              id={item1.id}
              link={item1.link}
              text={item1.text}
              index={h2Index}
            >
              {item1.items.length > 0 && (
                <ul>
                  {item1.items.map((item2, index2) => {
                    const h3Index = `${h2Index}${index2 + 1}.`;

                    return (
                      <TocLi
                        key={uuid()}
                        id={item2.id}
                        link={item2.link}
                        text={item2.text}
                        index={h3Index}
                      >
                        {item2.items.length > 0 && (
                          <ul>
                            {item2.items.map((item3, index3) => {
                              const h4Index = `${h3Index}${index3 + 1}.`;

                              return (
                                <TocLi
                                  key={uuid()}
                                  id={item3.id}
                                  link={item3.link}
                                  text={item3.text}
                                  index={h4Index}
                                >
                                  {item3.items.length > 0 && (
                                    <ul>
                                      {item3.items.map((item4, index4) => {
                                        const h5Index = `${h4Index}${index4 + 1}.`;

                                        return (
                                          <TocLi
                                            key={uuid()}
                                            id={item4.id}
                                            link={item4.link}
                                            text={item4.text}
                                            index={h5Index}
                                          >
                                            {item4.items.length > 0 && (
                                              <ul>
                                                {item4.items.map((item5, index5) => {
                                                  const h6Index = `${h5Index}${index5 + 1}.`;

                                                  return (
                                                    <TocLi
                                                      key={uuid()}
                                                      id={item5.id}
                                                      link={item5.link}
                                                      text={item5.text}
                                                      index={h6Index}
                                                    />
                                                  );
                                                })}
                                              </ul>
                                            )}
                                          </TocLi>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </TocLi>
                              );
                            })}
                          </ul>
                        )}
                      </TocLi>
                    );
                  })}
                </ul>
              )}
            </TocLi>
          );
        })}
      </ul>
    </>
  );
};
