/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { ButtonBox, ContainerComponent } from '../../../emotion/component';
import theme from '../../../../styles/theme';

/**
 * 클럽 회원신청를 수락/거절 할 수 있는 컴포넌트
 */
export const ClubAcceptBox = () => {
  return (
    <ContainerComponent height="auto" padding="2.5rem" margin="0 0 3.8rem 0">
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <p
          css={css`
            ${theme.textVariants.heading3}
            letter-spacing: -0.066rem;
          `}
        >
          김멋사 (likelion@kangnam.ac.kr)
        </p>
        <div
          css={css`
            display: flex;
            gap: 1.2rem;
          `}
        >
          <ButtonBox text="수락" type="very_small" />
          <ButtonBox text="거절" type="very_small" />
        </div>
      </div>
    </ContainerComponent>
  );
};

/**
 * 클럽 관리자 페이지 안에 있는 logo 컴포넌트
 */
export const ChallengersLogo = () => (
  <div
    css={css`
      text-align: center;
      margin-bottom: 15.1rem;
    `}
  >
    <img
      alt="챌린저스 로고"
      src={`${process.env.PUBLIC_URL}/img/logo.png`}
      css={css`
        height: 4.1rem;
        width: 22.1rem;
        transition: 0.4s all;
      `}
    />
  </div>
);
