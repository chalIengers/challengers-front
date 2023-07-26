/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '../../../styles/theme';

export const Header1 = ({ children }: { children: ReactNode }) => (
  <h1
    css={css`
      ${theme.textVariants.heading1}
    `}
  >
    {children}
  </h1>
);

export const Header3 = ({ children }: { children: ReactNode }) => (
  <h3
    css={css`
      ${theme.textVariants.heading3}
    `}
  >
    {children}
  </h3>
);
