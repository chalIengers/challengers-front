import React from 'react';
import { css } from '@emotion/react';
import { Header2, Header4, Head } from '../emotion/component';
import { Banner, Inner } from '../../emotion/component';
import { ChallengersLogo, ClubAcceptBox } from './emotion/component';

const index = () => {
  return (
    <Inner
      style={css`
        align-items: start;
        margin-top: 15.1rem;
        padding-bottom: 16.6rem;
        display: block;
      `}
    >
      <Banner type="small" />
      <Head
        style={css`
          margin-bottom: 10.4rem;
          margin-top: 6rem;
        `}
      >
        <Header2
          style={css`
            letter-spacing: -0.075rem;
            padding-right: 10px;
          `}
        >
          클럽 : 챌린저스
        </Header2>
        <Header4
          style={css`
            letter-spacing: -0.054rem;
            align-items: center;
            display: flex;
            cursor: pointer;
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.1001 2.76667L8.53343 9.33333L15.1001 15.9L13.3334 17.6667L5.0001 9.33333L13.3334 1L15.1001 2.76667Z"
              fill="white"
            />
          </svg>
          뒤로가기
        </Header4>
      </Head>
      <ChallengersLogo />
      <ClubAcceptBox />
      <ClubAcceptBox />
      <ClubAcceptBox />
      <ClubAcceptBox />
    </Inner>
  );
};

export default index;
