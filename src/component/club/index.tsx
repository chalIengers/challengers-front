/** @jsxImportSource @emotion/react */
import React from 'react';
import { Banner, Inner, TextBox } from '../emotion/component';
import { ClubBox } from './emotion/component';
import { Body1Bold, Header1, Section } from '../emotion/GlobalStyle';

const index = () => {
  return (
    <Inner>
      <Banner type="small" />
      <Section gap="4.8">
        <Header1>내가 소속된 클럽</Header1>
        <ClubBox text="클럽 마스터의 이메일 보기" />
      </Section>
      <Section>
        <TextBox>
          <Header1>챌린저스에 등록된 클럽</Header1>
          <Body1Bold>클럽을 등록하고 싶다면?</Body1Bold>
        </TextBox>
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
      </Section>
    </Inner>
  );
};

export default index;
