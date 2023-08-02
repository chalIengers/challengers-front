/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import { ContainerComponent } from '../../emotion/component';
import { Body1 } from '../../emotion/GlobayStyle';

export const ClubLogoPreView = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
      `}
    >
      <div
        css={css`
          width: 15.9rem;
          height: 15.7rem;
          border-radius: 1.2rem;
          background: ${theme.palette.gray[900]};
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M10 40L21.4645 28.5355C23.4171 26.5829 26.5829 26.5829 28.5355 28.5355L40 40M35 35L38.9645 31.0355C40.9171 29.0829 44.0829 29.0829 46.0355 31.0355L50 35M35 20H35.025M15 50H45C47.7614 50 50 47.7614 50 45V15C50 12.2386 47.7614 10 45 10H15C12.2386 10 10 12.2386 10 15V45C10 47.7614 12.2386 50 15 50Z"
            stroke="#8F8E8E"
          />
        </svg>
      </div>
      <p
        css={css`
          margin-top: auto;
          bottom: 0;
        `}
      >
        클럽에서 사용되는 로고를 등록해주세요
        <br /> 로고는 흰색 PNG 파일을 추천드리고 있어요
      </p>
    </div>
  );
};

/**
 * 클럽 신청서 컴포넌트
 */
export const ClubInfoInput = () => {
  const styles = {
    attributeWrapper: css`
      display: grid;
      grid-template-columns: 17.9rem auto;
    `,
  };
  return (
    <ContainerComponent height="auto" padding="5.1rem 7.2rem" margin="0 0 3.8rem 0">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 3.7rem;
        `}
      >
        <Body1>클럽신청서</Body1>
        <div
          css={css`
            ${styles.attributeWrapper}
          `}
        >
          <Body1>클럽 이름</Body1>
          <Body1
          // css={css`
          //   color: ${theme.palette.gray[400]};
          // `}
          >
            소속 클럽을 입력해주세요
          </Body1>
        </div>
        <div
          css={css`
            ${styles.attributeWrapper}
          `}
        >
          <Body1>클럽 형태</Body1>
          <Body1
          // style={css`
          //   color: ${theme.palette.gray[400]};
          // `}
          >
            소속 형태을 입력해주세요
          </Body1>
        </div>
        <div
          css={css`
            ${styles.attributeWrapper}
          `}
        >
          <Body1>클럽 소개</Body1>
          <Body1
          // style={css`
          //   color: ${theme.palette.gray[400]};
          // `}
          >
            클럽에 대한 간단한 소개 메세지를 입력해주세요
          </Body1>
        </div>
      </div>
    </ContainerComponent>
  );
};
