/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

export const ClubList = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      width: 120rem;
      height: auto;
      row-gap: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    `}
  >
    {children}
  </div>
);
