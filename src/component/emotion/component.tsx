/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import bannerImg from "../../assets/images/3d-construction-made-of-glass-abstract-geometrical-composition 1.png";

type BannerProps = {
  type: "large" | "small";
};

export const Banner = ({ type }: BannerProps) => {
  const frame = {
    large: css`
      width: 75rem;
      height: 25.9375rem;
      flex-shrink: 0;
      border-radius: 0.8125rem;
      background: #4a7edc;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    small: css`
      width: 75rem;
      height: 8.5625rem;
      flex-shrink: 0;
      border-radius: 0.5625rem;
      background: #4a7edc;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
  };

  const image = {
    large: css`
      width: 18.375rem;
      height: 18.4375rem;
      margin-left: 10.6rem;
      flex-shrink: 0;
    `,
    small: css`
      width: 6.5625rem;
      height: 6.5625rem;
      margin-left: 26rem;
      flex-shrink: 0;
    `,
  };

  const textBox = {
    large: css`
      margin-right: 17.9rem;
      color: #fff;
    `,
    small: css`
      margin-right: 21.5rem;
      text-align: left;
      color: #fff;
    `,
  };

  const title = {
    large: css`
      font-size: 2.5rem;
      padding-bottom: 0.56rem;
      letter-spacing: -0.075rem;
      font-weight: 800;
      color: #fff;
    `,
    small: css`
      font-size: 1.3125rem;
      padding-bottom: 0.19rem;
      letter-spacing: -0.03938rem;
      font-weight: 800;
      color: #fff;
    `,
  };

  const middleTitle = {
    large: css`
      font-size: 1.4375rem;
      letter-spacing: -0.04313rem;
      padding-bottom: 2.19rem;
      font-weight: 700;
      color: #fff;
    `,
    small: css`
      font-size: 0.9375rem;
      letter-spacing: -0.02813rem;
      padding-bottom: 0.81rem;
      font-weight: 700;
      color: #fff;
    `,
  };

  const description = {
    large: css`
      font-size: 1.0625rem;
      letter-spacing: -0.03188rem;
      font-weight: 500;
      color: #fff;
    `,
    small: css`
      font-size: 0.1rem;
      transform: scale(0.83);
      letter-spacing: -0.0225rem;
      font-weight: 500;
      color: #fff;
      margin-left: -1.56rem;
    `,
  };
  return (
    <div
      css={css`
        ${frame[type]}
      `}
    >
      <img
        alt="banner_img"
        src={bannerImg}
        css={css`
          ${image[type]}
        `}
      />
      <div
        css={css`
          ${textBox[type]}
        `}
      >
        <div
          css={css`
            ${title[type]}
          `}
        >
          챌린저스 서비스 오픈
        </div>
        <div
          css={css`
            ${middleTitle[type]}
          `}
        >
          사이드 프로젝트 기록과 추적을 용이하게
        </div>
        <div
          css={css`
            ${description[type]}
          `}
        >
          내가 소속한 클럽을 등록하고 챌린저스 서비스에서
          <br /> 사이드 프로젝트를 기록과 소통해보세요
        </div>
      </div>
    </div>
  );
};
