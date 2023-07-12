/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import bannerImg from '../../assets/images/3d-construction-made-of-glass-abstract-geometrical-composition 1.png';

type BannerProps = {
  type: 'large' | 'small';
};

export const Banner = ({ type }: BannerProps) => {
  const styles = {
    large: {
      frame: css`
        height: 25.9375rem;
        border-radius: 0.8125rem;
      `,
      image: css`
        width: 18.375rem;
        height: 18.4375rem;
        margin-left: 10.6rem;
      `,
      textBox: css`
        margin-right: 17.9rem;
      `,
      title: css`
        font-size: 2.5rem;
        padding-bottom: 0.56rem;
        letter-spacing: -0.075rem;
      `,
      middleTitle: css`
        font-size: 1.4375rem;
        letter-spacing: -0.04313rem;
        padding-bottom: 2.19rem;
      `,
      description: css`
        font-size: 1.0625rem;
        letter-spacing: -0.03188rem;
      `,
    },
    small: {
      frame: css`
        height: 8.5625rem;
        border-radius: 0.5625rem;
      `,
      image: css`
        width: 6.5625rem;
        height: 6.5625rem;
        margin-left: 26rem;
      `,
      textBox: css`
        margin-right: 21.5rem;
        text-align: left;
      `,
      title: css`
        font-size: 1.3125rem;
        padding-bottom: 0.19rem;
        letter-spacing: -0.03938rem;
      `,
      middleTitle: css`
        font-size: 0.9375rem;
        letter-spacing: -0.02813rem;
        padding-bottom: 0.81rem;
      `,
      description: css`
        font-size: 0.1rem;
        transform: scale(0.83);
        letter-spacing: -0.0225rem;
        margin-left: -1.56rem;
      `,
    },
  };
  return (
    <div
      css={css`
        ${styles[type].frame}
        width: 75rem;
        background: #4a7edc;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <img
        alt="banner_img"
        src={bannerImg}
        css={css`
          ${styles[type].image}
        `}
      />
      <div
        css={css`
          ${styles[type].textBox}
          color: #fff;
        `}
      >
        <div
          css={css`
            ${styles[type].title}
            font-weight: 800;
            color: #fff;
          `}
        >
          챌린저스 서비스 오픈
        </div>
        <div
          css={css`
            ${styles[type].middleTitle}
            font-weight: 700;
            color: #fff;
          `}
        >
          사이드 프로젝트 기록과 추적을 용이하게
        </div>
        <div
          css={css`
            ${styles[type].description}
            font-weight: 500;
            color: #fff;
          `}
        >
          내가 소속한 클럽을 등록하고 챌린저스 서비스에서
          <br /> 사이드 프로젝트를 기록과 소통해보세요
        </div>
      </div>
    </div>
  );
};

type ClubProps = {
  name: string;
  clubImg: string;
};

export const Club = ({ name, clubImg }: ClubProps) => {
  return (
    <span
      css={css`
        height: 1.875rem;
        padding-right: 2.125rem;
      `}
    >
      <img src={clubImg} alt={name} />
    </span>
  );
};
