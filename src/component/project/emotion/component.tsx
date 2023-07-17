/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { useState } from 'react';

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
      width: 4.5rem;
      height: 4.5rem;
    `,
    small: css`
      width: 3.3rem;
      height: 3.3rem;
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
        width: 8.7rem;
        height: 8.7rem;
        border-radius: 4.35rem;
        background: #fff;
        border: solid 1px black;
        cursor: pointer;
        user-select: none;
      `}
      onClick={handleClick}
    >
      <LinkImg name={name} type="large" />
    </button>
  );
};

// project link을 넣어주는 inputBox
export const LinkInputBox = () => {
  const regex = /^(http|https):\/\//;

  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    if (regex.test(inputValue)) {
      setTextColor('black');
    } else {
      setTextColor('red');
    }
  };
  return (
    <div
      css={css`
        width: 104.3rem;
        height: 6.6rem;
        border-radius: 1.2rem;
        border: 1px solid black;
        background: #fff;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 30px;
        align-items: center;
        padding: 0 2.2rem;
      `}
    >
      <input
        type="text"
        placeholder="http 또는 https를 포함하는 전체 링크를 입력해주세요"
        onChange={handleInputChange}
        css={css`
          color: ${textColor};
          font-size: 1.7rem;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.051rem;
        `}
      ></input>
      <LinkImg name="notion" type="small" />
    </div>
  );
};
