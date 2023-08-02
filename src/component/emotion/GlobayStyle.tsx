/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import theme from '../../styles/theme';

export const Header1 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.header1}
    `}
  >
    {children}
  </div>
);

export const Header2 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.header2}
    `}
  >
    {children}
  </div>
);

export const Body1 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.body1}
    `}
  >
    {children}
  </div>
);

export const Body1Bold = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.body1Bold}
    `}
  >
    {children}
  </div>
);

export const Body2 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.body2}
    `}
  >
    {children}
  </div>
);

export const Body3Bold = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.body3Bold}
    `}
  >
    {children}
  </div>
);
export const Section = ({ children, gap }: { children: React.ReactNode; gap?: string }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: ${gap}rem;
    `}
  >
    {children}
  </div>
);

Section.defaultProps = {
  gap: 0,
};
