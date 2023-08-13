/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Banner, Inner, TextBox } from '../../emotion/component';
import { ChallengersLogo, ClubAcceptBox } from './component';
import { Body1Bold, Header2, Section } from '../../emotion/GlobalStyle';

const index = () => {
  return (
    <Inner>
      <Banner type="small" />
      <Section>
        <TextBox>
          <Header2>클럽 : 챌린저스</Header2>
          <div
            css={css`
              display: flex;
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
            <Body1Bold>뒤로가기</Body1Bold>
          </div>
        </TextBox>
        <ChallengersLogo />
        <ClubAcceptBox />
        <ClubAcceptBox />
        <ClubAcceptBox />
        <ClubAcceptBox />
      </Section>
    </Inner>
  );
};

export default index;
