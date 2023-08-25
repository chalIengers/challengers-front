/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import theme from '../../../styles/theme';
import {
  ContainerType,
  InfoDownContainerType,
  LinkImgList,
  LinkImgProps,
} from '../../../types/globalType';

// 링크 이미지 더미 데이터

const linkImgList: LinkImgList = {
  github: 'https://via.placeholder.com/30x30',
  notion: 'https://via.placeholder.com/30x30',
  figma: 'https://via.placeholder.com/30x30',
  other: 'https://via.placeholder.com/30x30',
};

/**
 * 노션, 깃허브 등의 이미지를 보여주는 컴포넌트
 * @param name link 이미지 이름
 * @param type link 이미지 크기 타입
 */
export const LinkImg = ({ name, type }: LinkImgProps) => {
  const styles = {
    large: css`
      width: 4.8rem;
      height: 4.8rem;
    `,
    small: css`
      width: 3.2rem;
      height: 3.2rem;
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

export const InfoContainer = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        position: relative;
        width: 32rem;
        height: auto;
        border-radius: 1.4rem;
      `}
    >
      {children}
    </div>
  );
};

export const InfoUpperContainer = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        padding: 1.8rem;
        border-radius: 1.4rem 1.4rem 0 0;
        background: ${theme.palette.primary[500]};
      `}
    >
      {children}
    </div>
  );
};

export const InfoDownContainer = ({ children, fixHeight }: InfoDownContainerType) => {
  return (
    <div
      css={css`
        color: ${theme.palette.gray.black};
        columns: ${theme.palette.gray.black};
        border-radius: 0 0 1.4rem 1.4rem;
        background: #e8f3ff;
        padding: 2.4rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        min-height: ${fixHeight && 18}rem;
      `}
    >
      {children}
    </div>
  );
};

InfoDownContainer.defaultProps = {
  fixHeight: false,
};

export const InfoInput = ({
  placeholder,
  large,
  value,
  onChange,
}: {
  placeholder: string;
  large?: boolean;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    css={css`
      background-color: transparent;
      ${large ? theme.typography.header2 : theme.typography.body2};
      &::placeholder {
        color: #cbcbcb;
      }
    `}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

InfoInput.defaultProps = {
  large: false,
  value: '',
  onChange: () => {},
};
