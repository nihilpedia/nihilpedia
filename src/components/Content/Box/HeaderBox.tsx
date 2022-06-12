import React, { useEffect } from 'react';
import { Box } from '@/components/Content/Box';
import { DocTitle } from '@/components/Content';
import { Category, P } from '@/components/docs';

interface IHeaderBox {
  children: React.ReactNode;
  error?: boolean;
  category?: string;
}

export const HeaderBox = ({ children, error, category, }: IHeaderBox) => {
  // eslint-disable-next-line no-underscore-dangle
  let _category: string;

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (!error) {
      _category = category.replace(/ /g, '_');
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
            <P mt={10} mb={0}>
              {'분류: '}
              {
                category === '없음'
                  ? category
                  : (
                    <Category category={_category}>{category}</Category>
                  )
              }
            </P>
          </>
        )}
      </Box>
    </>
  );
};
