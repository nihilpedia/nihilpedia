import React, { useEffect, useRef, useState } from 'react';
import { IoMdTime } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { IH2 } from '@/types';
import { generateToc } from '@/utils';
import { Toc } from '../Toc';
import { style } from './style';

interface IDocBox {
  children: React.ReactNode;
  title: string;
  updateTime?: string;
  mt?: number;
  mb?: number;
  error?: boolean;
}

export const DocBox = ({
  children, title, updateTime, mt = 0, mb = 0, error = false,
}: IDocBox) => {
  const [ toc, setToc, ] = useState<IH2[]>([]);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!error) {
      const contents = tocRef.current;
      const tocData: IH2[] = [];

      setToc(generateToc(contents, tocData));
    }
  }, [ title, ]);

  const DocBoxStyle = style(mt, mb);

  return (
    <>
      <div css={DocBoxStyle}>
        <div className='doc-box header'>
          <h1 id='wiki-title'>
            <span>{title}</span>
          </h1>
        </div>
        {toc.length !== 0 && (
          <Toc toc={toc} className='doc-box toc' />
        )}
        {
          error
            ? (
              <div className='doc-box content'>{children}</div>
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
