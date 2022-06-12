import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { IFrontMatter, IH2 } from '@/types';
import { generateToc, getTimeString } from '@/utils';
import {
  Box, ContentBox, HeaderBox, Toc
} from '@/components/Content';

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

  const category = frontMatter?.categories === ''
    ? '없음'
    : frontMatter?.categories;

  return (
    <>
      <div id='doc-content'>
        <HeaderBox
          category={category}
          error={error}
        >
          {frontMatter?.title}
        </HeaderBox>
        {toc.length !== 0 && (
          <Box mt={10} mb={10}>
            <Toc toc={toc} />
          </Box>
        )}
        <ContentBox
          error={error}
          updateTime={updateTime}
          tocRef={tocRef}
          mt={10}
          mb={10}
        >
          {children}
        </ContentBox>
      </div>
    </>
  );
};
