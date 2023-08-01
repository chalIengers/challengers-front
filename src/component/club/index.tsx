import React from 'react';
import { css } from '@emotion/react';
import { Banner, Inner } from '../emotion/component';
import { ClubBox, Header2, Header4, Head } from './emotion/component';

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
      <Header2
        style={css`
          letter-spacing: -0.075rem;
          margin-top: 8.8rem;
          margin-bottom: 6rem;
        `}
      >
        내가 소속된 클럽
      </Header2>
      <ClubBox />
      <Head
        style={css`
          margin-bottom: 6rem;
          margin-top: 11.1rem;
        `}
      >
        <Header2
          style={css`
            letter-spacing: -0.075rem;
            padding-right: 10px;
          `}
        >
          챌린저스에 등록된 클럽
        </Header2>
        <Header4
          style={css`
            letter-spacing: -0.054rem;
            cursor: pointer;
          `}
        >
          클럽을 등록하고 싶다면?
        </Header4>
      </Head>
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
      <ClubBox />
    </Inner>
  );
};

export default index;
