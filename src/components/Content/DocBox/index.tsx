import React, { useEffect, useRef, useState } from 'react';
import { IoMdTime } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { IFrontMatter, IH2 } from '@/types';
import { generateToc, getTimeString } from '@/utils';
import { DocTitle, Toc } from '@/components/Content';
import { A, P } from '@/components/docs';
import { DocBoxStyle } from './style';

interface IDocBox {
  children: React.ReactNode;
  frontMatter?: IFrontMatter;
  error?: boolean;
}

export const DocBox = ({ children, frontMatter, error = false, }: IDocBox) => {
  const [ toc, setToc, ] = useState<IH2[]>([]);
  const tocRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!error) {
      const contents = tocRef.current;
      const h2Data: IH2[] = [];

      setToc(generateToc(contents, h2Data));
    }
  }, [ router.asPath, ]);

  const updateTime = getTimeString(frontMatter?.updatedAt as number);

  const category = frontMatter?.categories.length === 0
    ? '없음'
    : frontMatter?.categories;

  return (
    <>
      <div id='doc-content' css={DocBoxStyle}>
        <div className='doc-box header'>
          {
            error
              ? (
                <DocTitle>에러 404</DocTitle>
              )
              : (
                <>
                  <DocTitle>{frontMatter?.title}</DocTitle>
                  <P mt={10} mb={0}>
                    {'분류: '}
                    {
                      category === '없음'
                        ? category
                        : (
                          <A href={category.join('').replace(/[ ]/g, '_')}>{category}</A>
                        )
                    }
                  </P>
                </>
              )
          }
        </div>
        {toc.length !== 0 && (
          <div className='doc-box toc'>
            <Toc toc={toc} />
          </div>
        )}
        {
          error
            ? (
              <div className='doc-box content'>
                {children}
              </div>
            )
            : (
              <div className='doc-box content' ref={tocRef}>
                <div className='update-date'>
                  <span><IoMdTime />최근 수정 시각: {updateTime}</span>
                </div>
                {children}
                <div className='author'><FaUserCircle />NIHILncunia</div>
              </div>
            )
        }
      </div>
    </>
  );
};
