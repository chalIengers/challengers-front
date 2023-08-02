/** @jsxImportSource @emotion/react */
import React from 'react';
import { Banner, ButtonBox, Inner } from '../../emotion/component';
import { ClubInfoInput, ClubLogoPreView } from './component';
import { Body1, Header1, Section } from '../../emotion/GlobayStyle';

const Publish = () => {
  return (
    <Inner>
      <Banner type="small" />
      <Section gap="2">
        <Header1>프로젝트 등록을 위해 클럽을 개설하고 싶으신가요?</Header1>
        <Body1>
          챌린저스 서비스에서 프로젝트 등록을 위해 클럽을 개설해야해요
          <br />
          한번 클럽을 등록만 한다면 추후 프로젝트는 손쉽게 등록할 수 있어요.
        </Body1>
      </Section>
      <Section>
        <ClubLogoPreView />
      </Section>
      <ClubInfoInput />
      <ButtonBox text="클럽을 등록하고 싶어요" type="large" />
    </Inner>
  );
};

export default Publish;
