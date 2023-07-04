/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};
export const Inner = ({ children }: ComponentProps) => (
  <div
    css={css`
      width: 1200px;
      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
    `}
  >
    {children}
  </div>
);
