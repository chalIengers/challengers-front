/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from 'react';

import { SerializedStyles, css } from '@emotion/react';
import { ButtonBox, ClubComponent, ContainerComponent } from '../../emotion/component';
import theme from '../../../styles/theme';

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
        align-items: center;
        justify-content: center;
        padding: 3.3rem 8.7rem;
        overflow: auto;
        border-radius: 1.2rem;
        background: ${theme.palette.gray.white};
        box-shadow: 6px 7px 9px 5px rgba(0, 0, 0, 0.25);
      `}
    >
      <p
        css={css`
          display: block;
          font-size: ${theme.textVariants.heading5};
          color: ${theme.palette.gray[800]};
        `}
      >
        해당 클럽 마스터의 이메일이 클립보드에 복사되었어요
      </p>
    </div>
    // </div>
  );
};

/**
 * 클럽 페이지의 클럽로고 + 버튼 컴포넌트
 *
 * 자신의 소속 클럽과 받아온 클럽을 비교해 소속이 같은지, 관리자인지 확인하고
 * 버튼 text를 바꾸면 어떨까요?
 */
export const ClubBox = () => {
  const [showToast, setShowToast] = useState(false);

  const ShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <>
      <ContainerComponent height="auto" padding="2.5rem" margin="0 0 3.8rem 0">
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <ClubComponent key="1" name="챌린저스" clubImg="challenger.png" />
          <ButtonBox text="클럽 마스터 이메일 보기" type="small" onClickFunction={ShowToast} />
        </div>
      </ContainerComponent>
      {showToast && <Toast />}
    </>
  );
};

export const Header2 = ({ children, style }: { children: ReactNode; style?: SerializedStyles }) => (
  <h2
    css={css`
      ${theme.textVariants.heading2}
      ${style}
    `}
  >
    {children}
  </h2>
);

export const Header4 = ({ children, style }: { children: ReactNode; style?: SerializedStyles }) => (
  <h4
    css={css`
      ${theme.textVariants.heading4}
      ${style}
    `}
  >
    {children}
  </h4>
);

/**
 * ContainerComponent를 쓰지 않은 컴포넌트들의 배치를 위해 만든 컴포넌트
 */
export const Head = ({ children, style }: { children: ReactNode; style?: SerializedStyles }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      ${style};
    `}
  >
    {children}
  </div>
);

export const Header5 = ({ children, style }: { children: ReactNode; style?: SerializedStyles }) => (
  <h5
    css={css`
      ${theme.textVariants.heading5}
      ${style}
    `}
  >
    {children}
  </h5>
);
