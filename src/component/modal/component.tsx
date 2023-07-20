/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '../../styles/theme';

export const ModalContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        position: fixed;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </div>
  );
};

export const Overlay = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div
      role="presentation"
      css={css`
        background-color: rgba(27, 27, 27, 0.8);
        width: 100vw;
        height: 100vh;
      `}
      onClick={onClick}
    />
  );
};

const ModalBackGround = css`
  position: absolute;
  width: 65rem;
  height: 46rem;
  background-color: ${theme.palette.gray.white};
`;

export const RegisterModal = () => {
  return (
    <div css={ModalBackGround}>
      <p
        css={css`
          color: ${theme.palette.gray.black};
        `}
      >
        RegisterModal
      </p>
    </div>
  );
};

export const CreateClubModal = () => {
  return (
    <div css={ModalBackGround}>
      <p
        css={css`
          color: ${theme.palette.gray.black};
        `}
      >
        CreateClubModal
      </p>
    </div>
  );
};
