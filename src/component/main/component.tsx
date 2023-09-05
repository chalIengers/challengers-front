/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ClubArrayContainerProps, ClubLogoProps, ContainerType } from '../../types/globalType';
import { Body1 } from '../emotion/GlobalStyle';
import { ClubComponent, FlexWrapContainer, LoadingBox } from '../emotion/component';

export const ClubList = ({ children }: ContainerType) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 2.4rem;
      overflow: hidden;
    `}
  >
    {children}
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

export const ClubArrayContainer = ({ clubArray, index }: ClubArrayContainerProps) => {
  const animation = keyframes`
  0% {
      transform: translateX(0);
  }
  50% {
      transform: translateX(-100%);
  }
  50.01%{
      transform: translateX(100%);
  }
  100%{
      transform: translateX(0);
  }
  `;

  const animationBack = keyframes`
      from { 
          transform: translateX(0); 
      }
      to { 
          transform: translateX(-200%); 
      }
    `;
  return (
    <div
      css={css`
        width: 120rem;
        display: flex;
        justify-content: space-around;
        animation: ${index === 0 || index === 2 ? animation : animationBack} 20s linear infinite;
      `}
    >
      {clubArray.map((club: ClubLogoProps) => (
        <ClubComponent key={uuidv4()} logo={club.logoUrl} name={club.logoUrl} />
      ))}
    </div>
  );
};
