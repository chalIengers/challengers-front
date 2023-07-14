/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

type InnerProps = {
  children: ReactNode;
};
/**
 * 1200px의 Inner 컴포넌트, 가운데 정렬 처리 됨.
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
export const Inner = ({ children }: InnerProps) => (
  <div
    css={css`
      width: 1200px;
      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    {children}
  </div>
);

type ButtonBoxProps = {
  text: string;
  type: 'large' | 'small';
};

/**
 * 버튼 컴포넌트
 * @param text 버튼 안의 text 내용
 * @param type 버튼의 형태(large, small)
 */
export const ButtonBox = ({ text, type }: ButtonBoxProps) => {
  const styles = {
    large: css`
      width: 1198px;
      height: 99px;
      border-radius: 12px;
      font-size: 25px;
      letter-spacing: -0.75px;
    `,
    small: css`
      width: 198px;
      height: 53px;
      border-radius: 7px;
      font-size: 17px;
      letter-spacing: -0.51px;
    `,
  };

  return (
    <button
      type="button"
      css={css`
        ${styles[type]}
        background: #4a7edc;
        color: #fff;
        font-weight: 700;

        &:active {
          transform: scale(0.98);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
      `}
    >
      {text}
    </button>
  );
};
