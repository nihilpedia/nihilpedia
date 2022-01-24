import React from 'react';
import { A } from '@/components/docs';

interface ITocLi {
  id: string;
  link: string;
  text: string;
  index: string;
  children?: React.ReactNode;
}

export const TocLi = ({
  id, link, text, index, children,
}: ITocLi) => {
  return (
    <>
      <li>
        <A href={`#${id}`} type='toc'>
          {index}
        </A>
        <span>
          {
            link === ''
              ? (<>{text}</>)
              : (<A href={link}>{text}</A>)
          }
        </span>
        {children}
      </li>
    </>
  );
};
