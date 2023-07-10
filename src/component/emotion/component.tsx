/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 라벨 컴포넌트
interface TagType {
  children?: ReactNode;
  width?: string;
  height?: string;
}
const Tag = ({ children, width, height }: TagType) => {
  return (
    <span
      css={css`
        margin: 100px;
        width: ${width}em;
        height: ${height}em;
        color: white;
        background-color: #4f85e8;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: Pretendard;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.42px;
      `}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  children: "서비스 형태가 들어가요",
  width: "10",
  height: "1.7",
};
export default Tag;

// 네비게이션 (GNB) 컴포넌트
const Nav = styled.nav`
  background-color: #000000;
  z-index: 999;
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  column-gap: 30em;
  transition: 0.5s all;

  @media (max-width: 388px) {
    font-size: 5px;
    column-gap: 3em;
  }
  @media (min-width: 388px) and (max-width: 481px) {
    font-size: 6px;
    column-gap: 1em;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 11px;
    column-gap: 1.5em;
  }
  @media (min-width: 768px) and (max-width: 960px) {
    font-size: 13px;
    column-gap: 10em;
  }
  @media all and (min-width: 960px) and (max-width: 1200px) {
    font-size: 15px;
    column-gap: 20em;
  }
  @media all and (min-width: 1200) and (max-width: 2000px) {
    font-size: 18px;
  }
`;
const NavList = styled.div`
  display: flex;
  column-gap: 3em;
  transition: 0.4s all;
`;
const NavItem = styled(Link)`
  color: white;
  text-decoration-line: none;
  transition: 0.5s all;
`;
export const Header = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY || document.documentElement.scrollTop > 0) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav
      css={css`
        transition: ease-out;
        ${scrollState &&
        css`
          animation: fadeout 0.5s;
          animation-fill-mode: forwards;
          @keyframes fadeout {
            from {
              height: 102px;
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
      <Link to="/">
        <img
          alt="챌린저스 로고"
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          css={css`
            height: auto;
            width: 8.61em;
            transition: 0.4s all;
            font-size: 18px;
            @media (max-width: 388px) {
              font-size: 11px;
            }
            @media (min-width: 388px) and (max-width: 481px) {
              font-size: 13px;
            }
            @media (min-width: 481px) and (max-width: 768px) {
              font-size: 15px;
            }
            @media all and (min-width: 768px) and (max-width: 1200px) {
              font-size: 16px;
            }
            @media all and (min-width: 1200px) and (max-width: 2000px) {
              font-size: 18px;
            }
          `}
        ></img>
      </Link>
      <NavList>
        <NavItem to="/">챌린저스란?</NavItem>
        <NavItem to="/">클럽 등록</NavItem>
        <NavItem to="/">프로젝트</NavItem>
        <NavItem to="/">회원가입</NavItem>
      </NavList>
    </Nav>
  );
};
