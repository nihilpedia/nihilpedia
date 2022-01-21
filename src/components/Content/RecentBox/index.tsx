import React from 'react';
import { v4 as uuid } from 'uuid';
import { IoMdTime } from 'react-icons/io';
import { A } from '@/components/docs';
import { IAllPage } from '@/types';
import { getTimeString } from '@/utils';
import { style } from './style';

interface IRecentBox {
  docs: IAllPage[];
  mt?: number;
  mb?: number;
}

export const RecentBox = ({ docs, mt = 0, mb = 0, }: IRecentBox) => {
  const RecentBoxStyle = style(mt, mb);

  return (
    <>
      <div css={RecentBoxStyle}>
        {docs.map(({ slug, frontMatter, }) => (
          <div key={uuid()}>
            <A href={slug}>{frontMatter.title}</A>
            <div className='update-date'>
              <IoMdTime />{getTimeString(frontMatter.updatedAt as number)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
