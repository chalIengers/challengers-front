/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ButtonBox } from '../../emotion/component';
import { Body1 } from '../../emotion/GlobalStyle';
import { ClubContainer } from '../emotion/component';
import { useAcceptCrewMutation, useRejectCrewMutation } from '../../../store/clubApi';

/**
 * 클럽 회원신청를 수락/거절 할 수 있는 컴포넌트
 */
export const ClubAcceptBox = ({
  email,
  name,
  id,
}: {
  email: string;
  name: string;
  id: string | undefined;
}) => {
  const [acceptCrew] = useAcceptCrewMutation();
  const [rejectCrew] = useRejectCrewMutation();
  const handleAcceptClick = async () => {
    try {
      const data = {
        clubId: id,
        email,
      };
      const response = await acceptCrew(data);
      console.log(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRejectClick = async () => {
    try {
      const data = {
        clubId: id,
        email,
      };
      const response = await rejectCrew(data);
      console.log(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ClubContainer>
      <Body1>
        {name} ({email})
      </Body1>

      <div
        css={css`
          display: flex;
          gap: 1.6rem;
        `}
      >
        <ButtonBox text="수락" type="very_small" onClick={handleAcceptClick} />
        <ButtonBox text="거절" type="very_small" onClick={handleRejectClick} />
      </div>
    </ClubContainer>
  );
};

/**
 * 클럽 관리자 페이지 안에 있는 logo 컴포넌트
 */
export const ChallengersLogo = () => (
  <img
    alt="챌린저스 로고"
    src={`${process.env.PUBLIC_URL}/img/logo.png`}
    css={css`
      width: 24rem;
      margin: auto;
      margin-bottom: 4.8rem;
    `}
  />
);

export const LeftArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M15.1001 2.76667L8.53343 9.33333L15.1001 15.9L13.3334 17.6667L5.0001 9.33333L13.3334 1L15.1001 2.76667Z"
      fill="white"
    />
  </svg>
);
