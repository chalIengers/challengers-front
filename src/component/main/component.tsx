/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { ContainerType } from '../../types/globalType';

export const ClubList = ({ children }: ContainerType) => (
  <div
    css={css`
      width: 100%;
      row-gap: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    `}
  >
    {children}
  </div>
);
