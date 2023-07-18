/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '../../../styles/theme';

export const Header1 = ({ children }: { children: ReactNode }) => (
  <h1
    css={css`
      font-size: ${theme.textVariants.heading1.fontSizes};
      font-weight: ${theme.textVariants.heading1.fontWeight};
      letter-spacing: -0.075rem;
    `}
  >
    {children}
  </h1>
);

export const Header3 = ({ children }: { children: ReactNode }) => (
  <h3
    css={css`
      font-size: ${theme.textVariants.heading3.fontSizes};
      font-weight: ${theme.textVariants.heading3.fontWeight};
      letter-spacing: -0.06rem;
    `}
  >
    {children}
  </h3>
);

export const GridBox = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        /* flex-direction: column; */
        display: grid;
        grid-template-columns: 1fr 1fr;
      `}
    >
      {children}
    </div>
  );
};
export const TextInputBox = ({
  type,
  text,
}: {
  type: 'title' | 'subTitle' | 'select';
  text: string;
}) => {
  const style = {
    title: css`
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -0.075rem;
    `,
    subTitle: css`
      letter-spacing: -0.048rem;
    `,
    select: css`
      font-size: 2rem;
      letter-spacing: -0.6px;
    `,
  };
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        &::placeholder {
          color: #cbcbcb;
        }
        ${style[type]}
      `}
      placeholder={text}
    ></input>
  );
};
