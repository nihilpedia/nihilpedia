import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { P } from '@/components/docs';
import { HomeLink } from '@/components/Content';
import { fontColorStyle } from '@/styles';

export const ErrorBox = () => {
  const [ pageName, setPageName, ] = useState('');
  const [ isDocs, setIsDocs, ] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('/page/')) {
      const pageName = router.asPath.replace('/page/', '');

      setPageName(decodeURI(pageName).replace(/_/g, ' '));
    } else {
      setIsDocs(false);
    }
  }, [ router.asPath, ]);

  const notPageStyle = css`
    color: ${fontColorStyle.red};
    font-weight: 900;
  `;

  return (
    <>
      {
        isDocs
          ? (
            <P mt={0} mb={0}>
              <span css={notPageStyle}>{pageName}</span> 페이지가 존재하지 않습니다.&nbsp;
              <HomeLink>홈</HomeLink>으로 돌아가세요.
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
