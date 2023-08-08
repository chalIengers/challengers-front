/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

// 사용자가 잘못된 입력을 했을 때 나타내주는 컴포넌트
export const ErrorDescription = ({ children }: any) => {
  return (
    <span
      css={css`
        position: absolute;
        font-family: 'Pretendard-Regular';
        letter-spacing: -0.03em;
        font-size: 13px;
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 13px;
        }
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
        position: absolute;
        font-family: 'Pretendard-Regular';
        letter-spacing: -0.03em;
        font-size: 13px;
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 13px;
        }
        color: #11bd7e;
      `}
    >
      {children}
    </span>
  );
};

export const Wrap = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      height: 4rem;
      width: 100%;
    `}
  >
    {children}
  </div>
);

export default ErrorDescription;
