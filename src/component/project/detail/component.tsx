/** @jsxImportSource @emotion/react */

import { SerializedStyles, css } from '@emotion/react';
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
export const Body2 = ({ children, style }: { children: ReactNode; style?: SerializedStyles }) => (
  <p
    css={css`
      ${theme.textVariants.body2}
      ${style}
    `}
  >
    {children}
  </p>
);
