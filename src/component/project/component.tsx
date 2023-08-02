/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

export const TagList = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      display: flex;
      margin-bottom: 5.6rem;
      gap: 1.6rem;
    `}
  >
    {children}
  </div>
);
