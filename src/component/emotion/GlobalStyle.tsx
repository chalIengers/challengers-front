/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '../../styles/theme';

/**
 * 1200px의 Inner 컴포넌트, 가운데 정렬 처리 됨.
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
export const Inner = ({ children }: { children: ReactNode }) => (
  <section
    css={css`
      width: 120rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 9.6rem;
    `}
  >
    {children}
  </section>
);

export const Header1 = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.header1}
      ${style}
    `}
  >
    {children}
  </div>
);

export const Header2 = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.header2}
      ${style}
    `}
  >
    {children}
  </div>
);

export const Body1 = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.body1}
      ${style}
    `}
  >
    {children}
  </div>
);

export const Body1Bold = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.body1Bold}
      ${style}
    `}
  >
    {children}
  </div>
);

export const Body2 = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.body2}
      ${style}
    `}
  >
    {children}
  </div>
);

export const Body3Bold = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.body3Bold}
      ${style}
    `}
  >
    {children}
  </div>
);

export const Body4 = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) => (
  <div
    css={css`
      ${theme.typography.body4}
      ${style}
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
