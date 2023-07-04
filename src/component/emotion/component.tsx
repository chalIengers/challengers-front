/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

type InnerProps = {
  children: ReactNode;
};

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
  type: "large" | "small";
};

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
