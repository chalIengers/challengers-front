/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ContainerType, NavItemProps, StyleContainerType } from '../../types/globalType';
import theme from '../../styles/theme';
import { selectUser } from '../../store/slice/userSlice';

const Nav = ({ children, style }: StyleContainerType) => {
  return (
    <nav
      css={css`
        background-color: ${theme.palette.gray.black};
        z-index: 99;
        width: 100%;
        height: 102px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.5s all;
        ${style}
      `}
    >
      {children}
    </nav>
  );
};
const NavList = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 6.4rem;
        transition: 0.4s all;
      `}
    >
      {children}
    </div>
  );
};

const NavItem = ({ children, to }: NavItemProps) => {
  return (
    <Link to={to}>
      <p
        css={css`
          color: ${theme.palette.gray.white};
          text-decoration-line: none;
          transition: 0.5s all;
          &:hover {
            color: rgba(255, 255, 255, 0.7);
          }
        `}
      >
        {children}
      </p>
    </Link>
  );
};
/**
 * 네비게이션 (GNB) 컴포넌트
 */
export const Header = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);
  const { accessToken } = useSelector(selectUser);

  const handleScroll = () => {
    if (window.scrollY || document.documentElement.scrollTop > 0) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav
      style={css`
        transition: ease-out;
        ${scrollState &&
        css`
          animation: fadeout 0.5s;
          animation-fill-mode: forwards;
          @keyframes fadeout {
            from {
              height: 10.2rem;
              opacity: 1;
              visibility: visible;
            }
            to {
              height: 0px;
              opacity: 0;
              visibility: hidden;
            }
          }
        `}
        ${!scrollState &&
        css`
          animation: fadein 0.5s;
          animation-fill-mode: forwards;
          @keyframes fadein {
            from {
              height: 0px;
              opacity: 0;
              visibility: hidden;
            }
            to {
              height: 102px;
              opacity: 1;
              visibility: visible;
            }
          }
        `}
      `}
    >
      <div
        css={css`
          display: flex;
          width: 120rem;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Link to="/">
          <img
            alt="챌린저스 로고"
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
            css={css`
              width: 16rem;
            `}
          />
        </Link>
        <NavList>
          <NavItem to="/">챌린저스란?</NavItem>
          <NavItem to="/club/0">클럽 등록</NavItem>
          <NavItem to="/project">프로젝트</NavItem>
          {!accessToken ? (
            <NavItem to="/signUp">회원가입</NavItem>
          ) : (
            <NavItem to="/project/publish">프로젝트 등록</NavItem>
          )}
          {accessToken ? (
            <NavItem to="/myPage">마이페이지</NavItem>
          ) : (
            <NavItem to="/login">로그인</NavItem>
          )}
        </NavList>
      </div>
    </Nav>
  );
};
