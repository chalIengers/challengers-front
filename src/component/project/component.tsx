/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '../../styles/theme';

export const IndexContainer = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      background-color: ${theme.palette.gray.black};
      height: 100vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      -ms-overflow-style: none; /* 인터넷 익스플로러 */
      scrollbar-width: none; /* 파이어폭스 */
      &::-webkit-scrollbar {
        display: none;
      }
    `}
  >
    {children}
  </div>
);

export const InnerContainer = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      align-items: start;
      margin-top: 13rem;
      margin-bottom: 16.6rem;
      color: #fff;
    `}
  >
    {children}
  </div>
);

export const Head = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 2.3rem;
      margin-top: 3rem;
    `}
  >
    {children}
  </div>
);

export const HeadTitle = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      ${theme.textVariants.heading2}
    `}
  >
    {children}
  </div>
);

export const BodyTitle = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      display: flex;
    `}
  >
    {children}
  </div>
);

export const SelectBoxWrapper = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      margin-right: 1rem;
    `}
  >
    {children}
  </div>
);
