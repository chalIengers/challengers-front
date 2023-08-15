/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { css } from '@emotion/react';
import { ButtonBox, ClubComponent } from '../../emotion/component';
import theme from '../../../styles/theme';
import { Body1 } from '../../emotion/GlobalStyle';
import { ContainerType } from '../../../types/globalType';

/**
 * '클럽 마스터 이메일 보기' 버튼을 눌렀을 때 뜨게 되는 컴포넌트
 */
export const Toast = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        padding: 3.2rem 8.8rem;
        border-radius: 1.2rem;
        background: ${theme.palette.gray.white};
        color: ${theme.palette.gray.black};
        /* box-shadow: 0.6rem 0.8rem 0.8rem 0.4rem rgba(0, 0, 0, 0.25); */
      `}
    >
      <Body1>해당 클럽 마스터의 이메일이 클립보드에 복사되었어요</Body1>
    </div>
  );
};

export const ClubContainer = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 120rem;
        background-color: ${theme.palette.gray[900]};
        padding: 3.6rem 4.8rem;
        border-radius: 1.2rem;
      `}
    >
      {children}
    </div>
  );
};

/**
 * 클럽 페이지의 클럽로고 + 버튼 컴포넌트
 *
 * 자신의 소속 클럽과 받아온 클럽을 비교해 소속이 같은지, 관리자인지 확인하고
 * 버튼 text를 바꾸면 어떨까요?
 */
export const ClubBox = ({ text }: { text?: string }) => {
  const [showToast, setShowToast] = useState(false);

  const ShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <ClubContainer>
      <ClubComponent key="1" name="챌린저스" clubImg="challenger.png" />
      <ButtonBox text={text} type="small" onClick={ShowToast} />
      {showToast && <Toast />}
    </ClubContainer>
  );
};

ClubBox.defaultProps = {
  text: '클럽 가입 신청',
};
