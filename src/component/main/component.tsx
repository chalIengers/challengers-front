/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerType } from '../../types/globalType';
import { Body1 } from '../emotion/GlobalStyle';
import { FlexWrapContainer, LoadingBox } from '../emotion/component';

export const ClubList = ({ children }: ContainerType) => (
  <div
    css={css`
      height: 13.6rem;
      overflow: hidden;
    `}
  >
    <div
      css={css`
        width: 100%;
        display: flex;
        gap: 4.4rem;
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  </div>
);

export const NavigateMore = ({ sort }: { sort: string }) => (
  <Link to={`project/${sort}`}>
    <Body1
      style={css`
        cursor: pointer;
      `}
    >
      더 보러가기 &gt;
    </Body1>
  </Link>
);

export const DivisionLine = () => (
  <hr
    css={css`
      width: 72rem;
      border: 1px solid #fff;
      margin: auto;
    `}
  />
);

export const LoadingContainer = () => (
  <FlexWrapContainer>
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
  </FlexWrapContainer>
);
