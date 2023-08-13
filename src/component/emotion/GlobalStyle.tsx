/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import React from 'react';
import theme from '../../styles/theme';

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
