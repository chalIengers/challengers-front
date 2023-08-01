import React from 'react';
import { css } from '@emotion/react';
import { Banner, ButtonBox, Inner } from '../../emotion/component';
import { Header2, Header5 } from '../emotion/component';
import { ClubInfoInput, ClubLogoPreView } from './component';

const Publish = () => {
  return (
    <Inner
      style={css`
        align-items: start;
        margin-top: 15.1rem;
        padding-bottom: 16.6rem;
      `}
    >
      <Banner type="small" />

      <Header2
        style={css`
          letter-spacing: -0.075rem;
          margin-top: 2.4rem;
        `}
      >
        프로젝트 등록을 위해 클럽을 개설하고 싶으신가요?
      </Header2>
      <Header5
        style={css`
          letter-spacing: -0.051rem;
          margin-top: -1.2rem;
        `}
      >
        챌린저스 서비스에서 프로젝트 등록을 위해 클럽을 개설해야해요
        <br />
        한번 클럽을 등록만 한다면 추후 프로젝트는 손쉽게 등록할 수 있어요.
      </Header5>
      <ClubLogoPreView />
      <ClubInfoInput />
      <ButtonBox text="클럽을 등록하고 싶어요" type="large" />
    </Inner>
  );
};

export default Publish;
