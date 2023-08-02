/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  Inner,
  TextInputBox,
} from '../../emotion/component';
import { Body1, Body2, Header1, Header2 } from '../../emotion/GlobayStyle';

const Signup = () => {
  return (
    <Inner
      style={css`
        align-items: start;
        margin-top: 15rem;
        margin-bottom: 16.6rem;
      `}
    >
      <Banner type="small" />
      <Header1>챌린저스 서비스의 일원이 되어주세요</Header1>
      <div>
        <Body2>나만의 사이드 프로젝트를 사람들과 공유하고, 피드백 받고싶었던 적은 없었나요? </Body2>
        <Body2>
          챌린저스 서비스와 함께라면 다양한 프로젝트와 다양한 사람들을 통해 더 넓은 세상을 볼 수
          있을거라고 확신해요.
        </Body2>
      </div>
      <ContainerComponent height="auto">
        <div
          css={css`
            width: 105rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 3.7rem;
          `}
        >
          <div>
            <Header2>5초 회원 가입</Header2>
          </div>
          <GridBox>
            <Body1>사용자 이름</Body1>
            <TextInputBox
              type="select"
              text="서비스에서 사용할 자유로운 이름을 입력해주세요"
              max={20}
            />
          </GridBox>
          <GridBox>
            <Body1>학교 이메일</Body1>
            <div
              css={css`
                display: flex;
              `}
            >
              <TextInputBox type="border" size={10} max={20} />
              <Body1
              // css={css`
              //   color: #cbcbcb;
              // `}
              >
                @ kangnam.ac.kr
              </Body1>
            </div>
          </GridBox>
          <GridBox>
            <Body1>비밀번호</Body1>
            <TextInputBox
              type="select"
              text="서비스에서 사용할 비밀번호를 입력해주세요"
              max={20}
              inputType="password"
            />
          </GridBox>
          <GridBox>
            <Body1>비밀번호 확인</Body1>
            <TextInputBox
              type="select"
              text="입력한 비밀번호를 한번 더 입력해주세요"
              max={20}
              inputType="password"
            />
          </GridBox>
        </div>
      </ContainerComponent>
      <ButtonBox text="회원가입을 하고싶어요" type="large"></ButtonBox>
    </Inner>
  );
};

export default Signup;
