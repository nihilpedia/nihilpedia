import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { P } from '@/components/docs';

export const ErrorBox = () => {
  const [ pageName, setPageName, ] = useState('');
  const [ isPage, setIsPage, ] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('/page/')) {
      const pageName = router.asPath.replace('/page/', '');

      setPageName(decodeURI(pageName).replace(/[_]/g, ' '));
    } else {
      setIsPage(false);
    }
  }, [ router.asPath, ]);

  return (
    <>
      {
        isPage
          ? (
            <P mt={0} mb={0}>
              <span className='page-name'>{pageName}</span> 페이지가 존재하지 않습니다.
            </P>
          )
          : (
            <P mt={0} mb={0}>
              페이지가 존재하지 않습니다.
            </P>
          )
      }
    </>
  );
};
