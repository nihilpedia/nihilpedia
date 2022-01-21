import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { DocBox } from '@/components/Content';
import { P } from '@/components/docs';

const NotPound404 = () => {
  const [ pageName, setPageName, ] = useState('');
  const [ isPage, setIsPage, ] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('/page/')) {
      const pageName = router.asPath.replace('/page/', '');

      setPageName(decodeURI(pageName).replace('_', ' '));
    } else {
      setIsPage(false);
    }
  }, [ router.asPath, ]);

  const NotPound404Style = css`
    margin-bottom: 10px;
  `;

  const meta = useSiteMeta({
    title: '404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='wiki-not-pound-page' css={NotPound404Style}>
          <DocBox mt={10} mb={10} title='에러 404' error>
            <P mt={0} mb={0}>
              {
                isPage
                  ? (
                    <>
                      <span className='page-name'>{pageName}</span> 페이지가 존재하지 않습니다.
                    </>
                  )
                  : (
                    <>
                      페이지가 존재하지 않습니다.
                    </>
                  )
              }
            </P>
          </DocBox>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPound404;
