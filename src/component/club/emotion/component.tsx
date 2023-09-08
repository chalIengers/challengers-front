/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from 'react';
import { css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonBox, ClubComponent } from '../../emotion/component';
import theme from '../../../styles/theme';
import { Body1, Body1Bold } from '../../emotion/GlobalStyle';
import { ClubBoxProps, ContainerType, LinkToProps } from '../../../types/globalType';
import { openModal } from '../../../store/slice/modalSlice';
import { setCommentClubData } from '../../../store/slice/commentSlice';

/**
 * '클럽 마스터 이메일 보기' 버튼을 눌렀을 때 뜨게 되는 컴포넌트
 */
export const Toast = ({ text }: { text: string }) => {
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
      <Body1>{text}</Body1>
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
export const ClubBox = ({ id, name, logo, text, onClick }: ClubBoxProps) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else {
      dispatch(setCommentClubData({ id, name, logo }));
      dispatch(openModal({ modalType: 'CommentBlackModal' }));
    }
  };
  return (
    <ClubContainer>
      <ClubComponent id={id} name={name} logo={logo} />
      <ButtonBox text={text} type="small" onClick={handleButtonClick} />
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

export const LeftArrow = ({ onClick, disabled }: { onClick: () => void; disabled: boolean }) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M22.65 24.85L12.8 15L22.65 5.15L20 2.5L7.50001 15L20 27.5L22.65 24.85Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export const RightArrow = ({ onClick, disabled }: { onClick: () => void; disabled: boolean }) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M7.34998 5.15L17.2 15L7.34998 24.85L9.99998 27.5L22.5 15L9.99998 2.5L7.34998 5.15Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export const PageNumber = ({
  children,
  isSelect,
  onClick,
}: {
  children: ReactNode;
  isSelect: boolean;
  onClick: () => void;
}) => {
  return (
    <button type="button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <circle
          cx="15"
          cy="15"
          r="14.5"
          stroke="white"
          css={css`
            ${isSelect ? 'fill:#D9D9D9' : 'fill:black'}
          `}
        ></circle>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          css={css`
            ${isSelect ? 'fill:black;' : 'fill:white;'}
            ${theme.typography.header2}
          `}
        >
          {children}
        </text>
      </svg>
    </button>
  );
};

export const ClubPagNation = ({ totalPage }: { totalPage: number }) => {
  const navigate = useNavigate();
  const totalPages = totalPage;
  const [currentPage, setCurrentPage] = useState(1);
  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`/club/${pageNumber - 1}`);
  };
  // 이전 페이지로 이동
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handlePageChange(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handlePageChange(currentPage + 1);
    }
  };

  // 페이지 목록 생성
  const pageNumbers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      css={css`
        display: flex;
        gap: 2rem;
        justify-content: center;
      `}
    >
      <LeftArrow onClick={goToPreviousPage} disabled={currentPage === 1} />
      {pageNumbers.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          isSelect={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}
      <RightArrow onClick={goToNextPage} disabled={currentPage === totalPages} />
    </div>
  );
};
