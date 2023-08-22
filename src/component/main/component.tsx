/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { ContainerType } from '../../types/globalType';

export const ClubList = ({ children }: ContainerType) => (
  <div
    css={css`
      height: 13.6rem;
      overflow: hidden;
    `}
  >
    <div
      css={css`
        width: 100%;
        display: flex;
        gap: 4.4rem;
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  </div>
);
