/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import theme from '../../../styles/theme';
import {
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  Inner,
  TextInputBox,
} from '../../emotion/component';
import { HeadTitle } from '../../project/component';
import ErrorDescription, { CollectDescription, Wrap } from './component';
// import ErrorDescription from './component';

export const Heading4 = styled.div`
  ${theme.textVariants.heading4}
`;
export const Heading5 = styled.div`
  ${theme.textVariants.heading5}
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;
const Signup = () => {
  const handleSubmitData = (data: any) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    getValues,
    // setValue,
    // clearErrors,
    // watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  return (
    <form onSubmit={handleSubmit((data) => handleSubmitData(data))}>
      <Inner
        style={css`
          align-items: start;
          margin-top: 15rem;
          margin-bottom: 16.6rem;
        `}
      >
        <Banner type="small" />
        <HeadTitle>챌린저스 서비스의 일원이 되어주세요</HeadTitle>
        <Heading5>
          <span>나만의 사이드 프로젝트를 사람들과 공유하고, 피드백 받고싶었던 적은 없었나요? </span>
          <span>
            챌린저스 서비스와 함께라면 다양한 프로젝트와 다양한 사람들을 통해 더 넓은 세상을 볼 수
            있을거라고 확신해요.
          </span>
        </Heading5>
        <ContainerComponent
          height="auto"
          style={css`
            display: flex;
            flex-direction: column;
            row-gap: 3rem;
          `}
        >
          <HeadTitle>5초 회원 가입</HeadTitle>
          <GridBox>
            <Heading4>사용자 이름</Heading4>
            <Wrap>
              <TextInputBox
                type="select"
                text="서비스에서 사용할 자유로운 이름을 입력해주세요"
                size={40}
                max={20}
                register={register('name', {
                  required: '올바른 형식의 이름을 입력해주세요',
                  minLength: {
                    value: 2,
                    message: '올바른 형식의 이름을 입력해주세요',
                  },
                })}
              />
              <div>
                {errors.name || !getValues('name') ? (
                  <ErrorDescription>{errors?.name?.message}</ErrorDescription>
                ) : (
                  <CollectDescription>이름이 정상적으로 입력되었습니다.</CollectDescription>
                )}
              </div>
            </Wrap>
          </GridBox>
          <GridBox>
            <Heading4>학교 이메일</Heading4>
            <Wrap>
              <div
                css={css`
                  display: flex;
                `}
              >
                <TextInputBox
                  type="border"
                  size={10}
                  max={20}
                  register={register('email', {
                    required: '이메일을 입력해주세요',
                    pattern: {
                      value: /[a-z0-9]/,
                      message: '올바른 형식의 이메일 아이디를 입력해주세요',
                    },
                  })}
                />
                <Heading4
                  css={css`
                    color: #cbcbcb;
                    font-size: 2rem;
                    font-family: Pretendard;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: -0.6px;
                  `}
                >
                  @ kangnam.ac.kr
                </Heading4>
              </div>
              <div>
                {errors.email || !getValues('email') ? (
                  <ErrorDescription>{errors?.email?.message}</ErrorDescription>
                ) : (
                  <CollectDescription>이메일이 정상적으로 입력되었습니다.</CollectDescription>
                )}
              </div>
            </Wrap>
          </GridBox>
          <GridBox>
            <Heading4>비밀번호</Heading4>
            <Wrap>
              <TextInputBox
                type="select"
                text="서비스에서 사용할 비밀번호를 입력해주세요"
                max={20}
                inputType="password"
                register={register('pw', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message:
                      '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
                  },
                })}
              />
              <div>
                {errors.pw || !getValues('pw') ? (
                  <ErrorDescription>{errors?.pw?.message}</ErrorDescription>
                ) : (
                  <CollectDescription>정상적으로 입력되었습니다.</CollectDescription>
                )}
              </div>
            </Wrap>
          </GridBox>
          <GridBox>
            <Heading4>비밀번호 확인</Heading4>
            <Wrap>
              <TextInputBox
                type="select"
                text="입력한 비밀번호를 한번 더 입력해주세요"
                max={20}
                inputType="password"
                register={register('pwConfirm', {
                  required: '비밀번호를 입력해주세요.',
                  validate: {
                    check: (value) => value === getValues('pw') || '비밀번호가 일치하지 않습니다.',
                  },
                })}
              />
              <div>
                {errors.pwConfirm || !getValues('pwConfirm') ? (
                  <ErrorDescription>{errors?.pwConfirm?.message}</ErrorDescription>
                ) : (
                  <CollectDescription>정상적으로 입력되었습니다.</CollectDescription>
                )}
              </div>
            </Wrap>
          </GridBox>
        </ContainerComponent>
        <ButtonBox submit text="회원가입을 하고싶어요" type="large"></ButtonBox>
      </Inner>
    </form>
  );
};

export default Signup;
