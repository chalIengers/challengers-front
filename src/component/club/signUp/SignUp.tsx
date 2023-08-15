/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import {
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  TextInputBox,
} from '../../emotion/component';
import { Inner, Body1, Header2, Section, Header1 } from '../../emotion/GlobalStyle';
import { openModal } from '../../../store/modalSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal({ modalType: 'RegisterModal' }));
  };
  return (
    <Inner>
      <Banner />

      <Section gap="2.4">
        <Header1>챌린저스 서비스의 일원이 되어주세요</Header1>
        <Body1>
          나만의 사이드 프로젝트를 사람들과 공유하고, 피드백 받고싶었던 적은 없었나요?
          <br />
          챌린저스 서비스와 함께라면 다양한 프로젝트와 다양한 사람들을 통해 더 넓은 세상을 볼 수
          있을거라고 확신해요.
        </Body1>
      </Section>

      <ContainerComponent>
        <Header1>5초 회원 가입</Header1>

        <GridBox>
          <Header2>사용자 이름</Header2>
          <TextInputBox
            type="body1"
            text="서비스에서 사용할 자유로운 이름을 입력해주세요"
            max={20}
          />

          <Header2>학교 이메일</Header2>
          <div
            css={css`
              display: flex;
            `}
          >
            <TextInputBox type="border" size={10} max={20} />
            <Body1
              style={css`
                color: #cbcbcb;
              `}
            >
              @ kangnam.ac.kr
            </Body1>
          </div>

          <Header2>비밀번호</Header2>
          <TextInputBox
            type="body1"
            text="서비스에서 사용할 비밀번호를 입력해주세요"
            max={20}
            inputType="password"
          />

          <Header2>비밀번호 확인</Header2>
          <TextInputBox
            type="body1"
            text="입력한 비밀번호를 한번 더 입력해주세요"
            max={20}
            inputType="password"
          />
        </GridBox>
      </ContainerComponent>

      <ButtonBox text="회원가입을 하고싶어요" type="large" onClick={handleClick} />
    </Inner>
  );
};

export default Signup;
