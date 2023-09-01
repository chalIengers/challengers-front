import React from 'react';
import { ButtonBox, ContainerComponent, TextInputBox } from '../emotion/component';
import { Body1, Inner } from '../emotion/GlobalStyle';
import useLoginLogic from './hook';

const Login = () => {
  const { register, handleSubmit, isLoading } = useLoginLogic();

  return (
    <Inner>
      <form onSubmit={handleSubmit}>
        <ContainerComponent>
          <Body1>Login</Body1>
          <TextInputBox type="border" register={register('email')} />

          <Body1>Password</Body1>
          <TextInputBox type="border" inputType="password" register={register('password')} />

          {!isLoading ? <ButtonBox type="large" text="로그인" submit /> : '로그인 중 ...'}
        </ContainerComponent>
      </form>
    </Inner>
  );
};

export default Login;
