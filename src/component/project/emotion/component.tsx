/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

type LinkImgList = {
  [key: string]: string;
};
// 링크 이미지 더미 데이터
const linkImgList: LinkImgList = {
  github: 'https://via.placeholder.com/30x30',
  notion: 'https://via.placeholder.com/30x30',
  figma: 'https://via.placeholder.com/30x30',
  other: 'https://via.placeholder.com/30x30',
};

type LinkImgProps = {
  name: string;
  type: 'large' | 'small';
};
/**
 * 노션, 깃허브 등의 이미지를 보여주는 컴포넌트
 * @param name link 이미지 이름
 * @param type link 이미지 크기 타입
 */
export const LinkImg = ({ name, type }: LinkImgProps) => {
  const styles = {
    large: css`
      width: 2.813rem;
      height: 2.813rem;
    `,
    small: css`
      width: 2.063rem;
      height: 2.063rem;
    `,
  };
  return (
    <img
      src={linkImgList[name]}
      alt={name}
      css={css`
        ${styles[type]}
      `}
    />
  );
};

type ProjectLinkButtonProps = {
  name: string;
  url: string;
};
/**
 * ProjectLink를 연결해주는 UI 컴포넌트
 * @param name 보여줄 link 이미지의 이름
 * @param url 프로젝트 연결 link URL
 */
export const ProjectLinkButton = ({ name, url }: ProjectLinkButtonProps) => {
  const handleClick = () => {
    window.open(url);
  };
  return (
    <button
      type="button"
      css={css`
        width: 5.4375rem;
        height: 5.4375rem;
        border-radius: 2.71875rem;
        background: #fff;
        border: solid 1px black;
        cursor: pointer;
        user-select: none;
      `}
      onClick={() => handleClick}
    >
      <LinkImg name={name} type="large" />
    </button>
  );
};
