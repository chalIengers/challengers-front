/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Banner, ButtonBox } from '../../emotion/component';
import { Inner, Body1, Header1, Section } from '../../emotion/GlobalStyle';
import { ClubInfoInput, ClubLogoPreView } from './component';
import { openModal } from '../../../store/modalSlice';

const Publish = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal({ modalType: 'CreateClubModal' }));
  };

  return (
    <Inner>
      <Banner />
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

      <ButtonBox text="클럽을 등록하고 싶어요" type="large" onClick={handleClick} />
    </Inner>
  );
};

export default Publish;
