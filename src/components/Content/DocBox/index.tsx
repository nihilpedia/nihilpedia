import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  useEffect(() => {
    if (!error) {
      const contents = tocRef.current;
      const tocData: IH2[] = [];

      setToc(generateToc(contents, tocData));
    }
  }, [ title, ]);

  const DocBoxStyle = style(mt, mb, error);

  return (
    <>
      <div css={DocBoxStyle}>
        <div className='doc-box header'>
          <h1 id='wiki-title'>
            <span>{title}</span>
          </h1>
          {!error && (
            <p className='update-date'>
              <span>최근 수정 시각: {updateTime}</span>
            </p>
          )}
        </div>
        {toc.length !== 0 && (
          <Toc toc={toc} className='doc-box toc' />
        )}
        {
          error
            ? (
              <div className='doc-box'>{children}</div>
            )
            : (
              <div className='doc-box' ref={tocRef}>{children}</div>
            )
        }
      </div>
    </>
  );
};
