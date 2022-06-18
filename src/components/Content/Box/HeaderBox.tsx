import React, { useEffect, useState } from 'react';
import { Box } from '@/components/Content/Box';
import { DocTitle } from '@/components/Content';
import { Category, P } from '@/components/docs';

interface IHeaderBox {
  children: React.ReactNode;
  error?: boolean;
  category?: string;
}

export const HeaderBox = ({ children, error, category, }: IHeaderBox) => {
  const [ categoryLink, setCategoryLink, ] = useState('');

  useEffect(() => {
    if (!error) {
      setCategoryLink(category.replace(/ /g, '_'));
    }
  }, [ category, ]);

  return (
    <>
      <Box mt={10} mb={10}>
        {error && (
          <DocTitle>에러 404</DocTitle>
        )}
        {error === false && (
          <>
            <DocTitle>{children}</DocTitle>
            <P mt={10} mb={0} indent={0}>
              {'분류: '}
              {
                category === '없음'
                  ? category
                  : (
                    <Category category={categoryLink}>{category}</Category>
                  )
              }
            </P>
          </>
        )}
      </Box>
    </>
  );
};
