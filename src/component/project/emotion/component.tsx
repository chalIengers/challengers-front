/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import theme from '../../../styles/theme';
import {
  ContainerType,
  InfoDownContainerType,
  LinkImgList,
  LinkImgProps,
} from '../../../types/globalType';

// 링크 이미지 더미 데이터

const linkImgList: LinkImgList = {
  github: '/img/github.png',
  notion: '/img/notion.png',
  figma: '/img/figma.png',
  other: '/img/link.png',
};

/**
 * 노션, 깃허브 등의 이미지를 보여주는 컴포넌트
 * @param name link 이미지 이름
 * @param type link 이미지 크기 타입
 */
export const LinkImg = ({ name, large }: LinkImgProps) => {
  return (
    <img
      src={linkImgList[name]}
      alt={name}
      css={css`
        width: ${large ? 4.8 : 3.2}rem;
        height: ${large ? 4.8 : 3.2}rem;
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
export const InfoUpperContainer2 = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        padding: 1.8rem;
        border-radius: 1.4rem 1.4rem 0 0;
        background: ${theme.palette.primary[500]};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
  color,
  onChange,
  register,
}: {
  placeholder: string;
  large?: boolean;
  value?: string;
  color?: string;
  register?: UseFormRegisterReturn;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    css={css`
      background-color: transparent;
      width: 24rem;
      ${large ? theme.typography.header2 : theme.typography.body2};
      color: ${color};
      &::placeholder {
        color: #cbcbcb;
      }
    `}
    placeholder={placeholder}
    // value={value}
    // onChange={onChange}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...register}
  />
);

InfoInput.defaultProps = {
  large: false,
  value: '',
  onChange: () => {},
};

export const InfoInput2 = ({
  placeholder,
  large,
  value,
  color,
  onChange,
}: {
  placeholder: string;
  large?: boolean;
  value?: string;
  color?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    css={css`
      background-color: transparent;
      width: 24rem;
      ${large ? theme.typography.header2 : theme.typography.body2};
      color: ${color};
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

export const RowContainer = ({ gap, children }: { gap?: string; children: ReactNode }) => (
  <div
    css={css`
      display: flex;
      flexdirection: row;
      gap: ${gap};
    `}
  >
    {children}
  </div>
);

export const imageNames: Record<string, string> = {
  notion: 'notion',
  github: 'github',
  figma: 'figma',
};
