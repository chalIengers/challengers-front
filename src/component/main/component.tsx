/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ClubArrayContainerProps, ClubLogoProps, ContainerType } from '../../types/globalType';
import { Body1 } from '../emotion/GlobalStyle';
import { ClubComponent } from '../emotion/component';
import { logoAnimation, logoAnimationBack } from '../../json/data';

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

export const ClubArrayContainer = ({ clubArray, index }: ClubArrayContainerProps) => {
  return (
    <div
      css={css`
        width: 120rem;
        display: flex;
        justify-content: space-around;
        animation: ${index === 0 || index === 2 ? logoAnimation : logoAnimationBack} 20s linear
          infinite;
      `}
    >
      {clubArray.map((club: ClubLogoProps) => (
        <ClubComponent key={uuidv4()} logo={club.logoUrl} name={club.logoUrl} />
      ))}
    </div>
  );
};
