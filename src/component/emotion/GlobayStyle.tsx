/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import theme from '../../styles/theme';

/**
 * 공통 헤더를 사용하는 컴포넌트들 (Header)
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
interface Header1Props {
  children: React.ReactNode;
}

export const Header1: React.FC<Header1Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.heading1}
    `}
  >
    {children}
  </div>
);

interface Header2Props {
  children: React.ReactNode;
}

export const Header2: React.FC<Header2Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.heading2}
    `}
  >
    {children}
  </div>
);

interface Header3Props {
  children: React.ReactNode;
}

export const Header3: React.FC<Header3Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.heading3}
    `}
  >
    {children}
  </div>
);

interface Header4Props {
  children: React.ReactNode;
}

export const Header4: React.FC<Header4Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.heading4}
    `}
  >
    {children}
  </div>
);
interface Header5Props {
  children: React.ReactNode;
}

export const Header5: React.FC<Header5Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.heading5}
    `}
  >
    {children}
  </div>
);

/**
 * 공통 Body를 사용하는 컴포넌트들 (Body)
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
interface Body1Props {
  children: React.ReactNode;
}

export const Body1: React.FC<Body1Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.body1}
    `}
  >
    {children}
  </div>
);

interface Body1BoldProps {
  children: React.ReactNode;
}

export const BodyBold1: React.FC<Body1BoldProps> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.body1_bold}
    `}
  >
    {children}
  </div>
);

interface Body2Props {
  children: React.ReactNode;
}
export const Body2: React.FC<Body2Props> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.body1}
    `}
  >
    {children}
  </div>
);

interface Body2BoldProps {
  children: React.ReactNode;
}

export const BodyBold2: React.FC<Body2BoldProps> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.body2_bold}
    `}
  >
    {children}
  </div>
);

/**
 * 공통 디테일를 사용하는 컴포넌트들 (Detail)
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
interface DetailProps {
  children: React.ReactNode;
}
export const Deatil: React.FC<DetailProps> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.detail}
    `}
  >
    {children}
  </div>
);

interface DetailBoldProps {
  children: React.ReactNode;
}

export const DetailBold: React.FC<DetailBoldProps> = ({ children }) => (
  <div
    css={css`
      ${theme.textVariants.detail_bold}
    `}
  >
    {children}
  </div>
);
