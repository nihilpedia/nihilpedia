import React from 'react';
import { css, Global } from '@emotion/react';
import { SiteMeta } from '@/components';
import { ISiteMetaProps } from '@/types';
import {
  FooterBlock, HeaderBlock, MainBlock, NavBlock
} from '@/components/Layout';

const AppLayout = ({ children, meta, }: ISiteMetaProps) => {
  const style = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
    }
  `;

  return (
    <>
      <Global styles={style} />
      <SiteMeta meta={meta} />
      <HeaderBlock />
      <NavBlock />

      <MainBlock>
        {children}
      </MainBlock>

      <FooterBlock />
    </>
  );
};

export default AppLayout;
