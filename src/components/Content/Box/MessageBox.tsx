import React from 'react';
import { css } from '@emotion/react';
import { P } from '@/components/docs';
import { Box } from './index';
import { fontColorStyle } from '@/styles';

interface IMessageBox {
  name: string;
}

export const MessageBox = ({ name, }: IMessageBox) => {
  const MessageBoxLinkStyle = css`
    color: ${fontColorStyle.blue};

    &:hover {
      color: ${fontColorStyle.blue2};
      text-decoration: underline;
    }
  `;

  return (
    <>
      <Box mt={10} mb={10}>
        <P mt={0} mb={0} indent={0}>클릭한 항목으로 <a href={`#${name}`} css={MessageBoxLinkStyle}>바로가기</a></P>
      </Box>
    </>
  );
};
