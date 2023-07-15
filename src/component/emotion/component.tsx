/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

interface TagType {
  children?: ReactNode;
  width?: string;
  height?: string;
}
/**
 * 라벨 컴포넌트
 * @param children 컴포넌트 안에 넣을 자식 요소
 * @param width 가로 길이 (일단 em으로 지정함)
 * @param height 높이 길이 (일단 em으로 지정함)
 */
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

/**
 * 네비게이션 (GNB) 컴포넌트
 */
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
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
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

interface imgBoxType {
  imgSrc?: string;
}
/**
 * 프로젝트 상세 이미지
 * @param imgSrc 이미지 src
 */
export const ImageBox = ({ imgSrc }: imgBoxType) => {
  return (
    <img
      alt="프로젝트 상세 이미지"
      width={1051}
      height={507}
      src={`${process.env.PUBLIC_URL}/img/${imgSrc}`}
      css={css`
        color: #000;
      `}
    ></img>
  );
};

ImageBox.defaultProps = {
  imgSrc: "thumbnail.png",
};

// TeamInfo 컴포넌트
const TitleText = styled.span`
  display: inline;
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.3px;
`;
const ContentText = styled(TitleText)`
  font-size: 16px;
  color: black;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 313px;
  height: auto;
  border-radius: 14px;
  margin-left: 100px;
`;
const ModalBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 313px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 206px;
  border-radius: 14px;
  background: rgba(73, 73, 73, 0.6);
`;
const PositionBox = styled.div`
  width: 313px;
  height: 57px;
  border-radius: 14px 14px 0px 0px;
  background: #4a7edc;
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;
const InfoBox = styled.div`
  width: 313px;
  border-radius: 0px 0px 14px 14px;
  background: #e8f3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;
const TitleInput = styled.input`
  background: #e8f3ff;
  background-position: right center;
  padding: 0;
  height: 30px;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.6px;
  overflow: auto;
  ::placeholder {
    color: #cbcbcb;
  }
`;
const ContentInput = styled(TitleInput)`
  font-size: 16px;
`;
const AddMememberText = styled(ContentText)`
  color: #4a7edc;
  text-decoration: #4a7edc 2.5px solid underline;
  text-underline-offset: 5px;
  letter-spacing: -0.6px;
  :hover {
    cursor: pointer;
  }
`;
const AddPositionText = styled(ContentText)`
  color: #fff;
  font-size: 25px;
  text-decoration: #fff 2.5px solid underline;
  text-underline-offset: 5px;
  &:hover {
    cursor: pointer;
  }
`;
/**
 * 팀원 infobox
 */
export const TeamInfoBox = () => {
  const ModalBoxComponent = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState([{ id: 1, name: "", role: "" }]);

  // 팀원 이름 state 설정
  const handleMemberNameChange = (id: number, name: string) => {
    const newMembers = members.map((member) => {
      if (member.id === id) {
        return { ...member, name };
      }
      return member;
    });
    setMembers(newMembers);
  };

  // 팀원 역할 state 설정
  const handleMemberRoleChange = (id: number, role: string) => {
    const newMembers = members.map((member) => {
      if (member.id === id) {
        return { ...member, role };
      }
      return member;
    });
    setMembers(newMembers);
  };

  // 팀원 추가 클릭시 함수
  const addMemberOnClick = () => {
    if (members.length < 5) {
      const newMembers = { id: members.length + 1, name: "", role: "" };
      setMembers([...members, newMembers]);
    }
  };
  const addPositionOnClick = () => {
    ModalBoxComponent.current?.style.setProperty("display", "none");
  };
  return (
    <Box>
      <PositionBox>
        <TitleText color="#CBCBCB">역할을 선택해주세요</TitleText>
      </PositionBox>
      <InfoBox>
        {/* <ContentBox>
          <TitleText color="black">이진아</TitleText>
          <ContentText>프론트엔드</ContentText>
        </ContentBox> */}
        {members.map((member) => (
          <ContentBox key={member.id}>
            <TitleInput
              type="text"
              placeholder="이름을 입력해주세요"
              name={`팀원${member.id}이름`}
              value={member.name}
              onChange={(e) =>
                handleMemberNameChange(member.id, e.target.value)
              }
              maxLength={10}
            ></TitleInput>
            <ContentInput
              type="text"
              placeholder="어떤 역할을 했나요?"
              name={`팀원${member.id}이름`}
              value={member.role}
              onChange={(e) =>
                handleMemberRoleChange(member.id, e.target.value)
              }
              maxLength={25}
            ></ContentInput>
          </ContentBox>
        ))}
        <AddMememberText onClick={addMemberOnClick}>
          해당 포지션에 팀원을 더 추가하고싶어요
        </AddMememberText>
      </InfoBox>
      <ModalBox ref={ModalBoxComponent}>
        <AddPositionText onClick={addPositionOnClick}>
          포지션 추가
        </AddPositionText>
      </ModalBox>
    </Box>
  );
};
