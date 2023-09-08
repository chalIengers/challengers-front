/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Banner, ButtonBox, ContainerComponent, GridBox, TextInputBox } from '../emotion/component';
import { Inner, Body1, Header2, Section, Header1 } from '../emotion/GlobalStyle';
import { CollectDescription, ErrorDescription } from './component';
import { useSignUpLogic } from './hook';

const Signup = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { handleSubmitData, isLoading } = useSignUpLogic({ watch });
  return (
    <form onSubmit={handleSubmit(handleSubmitData)}>
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
            <div>
              <TextInputBox
                type="body1"
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
            </div>
            <Header2>학교 이메일</Header2>
            <div>
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
                    validate: {
                      check: async (value) => {
                        try {
                          const response = await axios.get(
                            `/api/v1/verify/account?account=${value}`,
                          );
                          if (response.data.success === false) {
                            return response.data.msg;
                          }
                          return undefined;
                        } catch (error) {
                          // 오류 처리 로직을 여기에 추가하세요
                          console.error('오류 발생:', error);
                          return undefined;
                        }
                      },
                    },
                  })}
                />
                <Body1
                  style={css`
                    color: #cbcbcb;
                  `}
                >
                  @ kangnam.ac.kr
                </Body1>
              </div>
              <div>
                {errors.email || !getValues('email') ? (
                  <ErrorDescription>{errors?.email?.message}</ErrorDescription>
                ) : (
                  <CollectDescription>이메일이 정상적으로 입력되었습니다.</CollectDescription>
                )}
              </div>
            </div>
            <Header2>비밀번호</Header2>
            <div>
              <TextInputBox
                type="body1"
                text="서비스에서 사용할 비밀번호를 입력해주세요"
                size={40}
                max={20}
                inputType="password"
                register={register('pw', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message:
                      '비밀번호는 숫자, 영문 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      '비밀번호는 숫자, 영문  소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
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
            </div>
            <Header2>비밀번호 확인</Header2>
            <div>
              <TextInputBox
                type="body1"
                text="입력한 비밀번호를 한번 더 입력해주세요"
                size={40}
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
            </div>
          </GridBox>
        </ContainerComponent>
        {isLoading ? (
          <ButtonBox submit text="잠시만 기다려주세요!" type="large" />
        ) : (
          <ButtonBox submit text="회원가입을 하고싶어요" type="large" />
        )}
      </Inner>
    </form>
  );
};

export default Signup;
