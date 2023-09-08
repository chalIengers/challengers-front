/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBox } from '../../emotion/component';
import { Body1 } from '../../emotion/GlobalStyle';
import { ClubContainer } from '../emotion/component';
import {
  useAcceptCrewMutation,
  useRejectCrewMutation,
} from '../../../store/controller/clubController';
import theme from '../../../styles/theme';
import { openModal } from '../../../store/slice/modalSlice';
import { setCommentData } from '../../../store/slice/commentSlice';
import { selectUser } from '../../../store/slice/userSlice';

/**
 * 클럽 회원신청를 수락/거절 할 수 있는 컴포넌트
 */
export const ClubAcceptBox = ({
  email,
  name,
  id,
  comment,
}: {
  email: string;
  name: string;
  id: string | undefined;
  comment: string;
}) => {
  const navigate = useNavigate();
  const token = useSelector(selectUser).accessToken;
  const dispatch = useDispatch();
  const [acceptCrew] = useAcceptCrewMutation();
  const [rejectCrew] = useRejectCrewMutation();
  const handleCommentClick = () => {
    dispatch(setCommentData({ email, name, comment }));
    dispatch(openModal({ modalType: 'CommentModal' }));
  };
  const handleAcceptClick = async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      const result = confirm('수락하시겠습니까?');
      if (result) {
        const data = {
          clubId: id,
          email,
          token,
        };
        const response: any = await acceptCrew(data);
        console.log(data);
        console.log(response);
        alert(response.data?.msg);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRejectClick = async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      const result = confirm('거절하시겠습니까?');
      if (result) {
        const data = {
          clubId: id,
          email,
          token,
        };
        const response: any = await rejectCrew(data);
        console.log(data);
        console.log(response);
        alert(response.data.msg);
        window.location.reload();
      }
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
        <ButtonBox text="등록된 가입 코멘트 보기" type="very_small" onClick={handleCommentClick} />
        <ButtonBox text="수락" type="very_small" onClick={handleAcceptClick} />
        <ButtonBox text="거절" type="very_small" onClick={handleRejectClick} />
      </div>
    </ClubContainer>
  );
};

/**
 * 클럽 관리자 페이지 안에 있는 logo 컴포넌트
 */
export const ChallengersLogo = ({ src, alt }: { src: string; alt: string }) => (
  <img
    alt={alt}
    src={src}
    css={css`
      width: 24rem;
      margin: auto;
      margin-bottom: 4.8rem;
    `}
  />
);

/* 뒤로가기 버튼 */
export const NavigateButton = () => {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate('/club/0');
  };
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.1001 2.76667L8.53343 9.33333L15.1001 15.9L13.3334 17.6667L5.0001 9.33333L13.3334 1L15.1001 2.76667Z"
          fill="white"
        />
      </svg>
      <button
        type="button"
        css={css`
          ${theme.typography.body1Bold}
        `}
        onClick={handleGoBackClick}
      >
        뒤로가기
      </button>
    </div>
  );
};
