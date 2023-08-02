import React from 'react';
import { css } from '@emotion/react';
import { Banner, Inner } from '../emotion/component';
import { ClubBox, Head } from './emotion/component';
import { Body1, Header2 } from '../emotion/GlobayStyle';

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
      <div
        css={css`
          margin-top: 8.8rem;
          margin-bottom: 6rem;
        `}
      >
        <Body1>내가 소속된 클럽</Body1>
      </div>
      <ClubBox />
      <Head
        style={css`
          margin-bottom: 6rem;
          margin-top: 11.1rem;
        `}
      >
        <Header2
        // style={css`
        //   padding-right: 10px;
        // `}
        >
          챌린저스에 등록된 클럽
        </Header2>
        <Header2
        // style={css`
        //   cursor: pointer;
        // `}
        >
          클럽을 등록하고 싶다면?
        </Header2>
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
