/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { ButtonBox, ClubComponent } from '../../emotion/component';
import theme from '../../../styles/theme';
import { Body1, Body1Bold } from '../../emotion/GlobalStyle';
import { ClubBoxProps, ContainerType, LinkToProps } from '../../../types/globalType';

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
 */
export const ClubBox = ({ id, name, logo, text, onClick, showToast }: ClubBoxProps) => {
  return (
    <ClubContainer>
      <ClubComponent id={id} name={name} logo={logo} />
      <ButtonBox text={text} type="small" onClick={onClick} />
      {showToast !== undefined ? showToast && <Toast /> : null}
    </ClubContainer>
  );
};

export const LinkTo = ({ to, children }: LinkToProps) => {
  return (
    <Link to={to}>
      <Body1Bold>{children}</Body1Bold>
    </Link>
  );
};
