/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// 사용자가 잘못된 입력을 했을 때 나타내주는 컴포넌트
export const ErrorDescription = ({ children }: any) => {
  return (
    <span
      css={css`
        font-family: 'Pretendard-Regular';
        letter-spacing: -0.03em;
        font-size: 1.3rem;
        color: red;
      `}
    >
      {children}
    </span>
  );
};

// 사용자가 정확한 입력을 했을 때 나타내주는 컴포넌트
export const CollectDescription = ({ children }: { children: string }) => {
  return (
    <span
      css={css`
        font-family: 'Pretendard-Regular';
        letter-spacing: -0.03em;
        font-size: 1.3rem;
        color: #11bd7e;
      `}
    >
      {children}
    </span>
  );
};
