/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Banner, TextBox } from '../../emotion/component';
import { Inner, Body1Bold, Header2, Section } from '../../emotion/GlobalStyle';
import { ChallengersLogo, ClubAcceptBox, LeftArrow } from './component';

const index = () => {
  return (
    <Inner>
      <Banner />
      <Section gap="3.2">
        <TextBox>
          <Header2>클럽 : 챌린저스</Header2>

          <div
            css={css`
              display: flex;
            `}
          >
            <LeftArrow />
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
