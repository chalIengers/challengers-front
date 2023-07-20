/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import bannerImg from '../../assets/images/3d-construction-made-of-glass-abstract-geometrical-composition 1.png';
import { openModal } from '../../store/modalSlice';

interface ContainerComponentProps {
  width?: string;
  height: string;
  padding?: string;
  children?: ReactNode;
}

const StyledContainerComponent = styled.div<ContainerComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: #212121;
  border-radius: 1.25em;
`;

/**
 * Container 컴포넌트
 * @Containercomponent
 * @param {number} props.width - 컨테이너 컴포넌트의 너비
 * @param {number} props.height - 컨테이너 컴포넌트의 높이
 * @param {ReactNode} props.children - 컨테이너 컴포넌트의 자식 요소
 */
const ContainerComponent: React.FC<ContainerComponentProps> = ({
  width,
  height,
  children,
  padding,
}) => {
  return (
    <StyledContainerComponent width={width} height={height} padding={padding}>
      {children}
    </StyledContainerComponent>
  );
};

ContainerComponent.defaultProps = {
  width: '120rem',
  children: null,
  padding: '7.2rem',
};

export { ContainerComponent };

interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
  back?: string;
}

const StyledSelectBox = styled.select<{ back?: string }>`
  border-radius: 0.7744rem;
  background: ${(props) => (props.back ? props.back : '#4f85e8')};
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  padding: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 0.1rem;
  text-overflow: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.75em' height='0.4375em' viewBox='0 0 12 7'%3E%3Cpath fill='%23ffffff' d='M6 6.8l4-4H2l4 4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;
  background-size: 1.2rem;
  padding-right: 2.4rem;
`;

const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange, back }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <StyledSelectBox value={value} onChange={handleChange} back={back}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelectBox>
  );
};

SelectBox.defaultProps = {
  back: '#4f85e8',
};
export { SelectBox };

interface ProjectBoxProps {
  title: string;
  content: string;
  tags: string[];
}

const StyledProjectBox = styled.div<ProjectBoxProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #ffffff;
  padding: 1.6rem 2.1rem;
  width: 37rem;
  height: 39.5rem;
  background: #212121;
  border-radius: 1.9rem;
  margin: 0;
`;
const StyledProjectTag = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledTag = styled.div`
  border-radius: 0.5rem;
  background: #4f85e8;
  padding: 0.6rem 1rem;
  margin: 0 0.9rem 0.9rem 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.h2`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.5625em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
  margin-bottom: 0.625em;
`;
const StyledText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

/**
 * Projectbox 컴포넌트
 * @component ProjectBox
 * @param {string} props.title - 프로젝트 제목
 * @param {string} props.content - 프로젝트 내용
 * @param {string[]} props.tags - 프로젝트 태그들의 배열
 */
const ProjectBox: React.FC<ProjectBoxProps> = ({ title, content, tags }) => {
  const generatedTags = tags.length === 0 ? ['임의 태그'] : tags;
  return (
    <StyledProjectBox title={title} content={content} tags={tags}>
      <img
        src="https://i.ibb.co/yktPkxP/image-5.png"
        alt="Project"
        className="project-image"
        style={{
          width: '20.5625em',
          height: '14.0625em',
          borderRadius: '0.625em',
          marginBottom: '1em',
        }}
      />
      {generatedTags && (
        <StyledProjectTag>
          {generatedTags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledProjectTag>
      )}
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{content}</StyledText>
    </StyledProjectBox>
  );
};

export { ProjectBox };

interface FlexContainerProps {
  children: React.ReactNode;
}

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.8125em;
  width: 120rem;
  height: 100%;
  margin: 0 auto;
`;
/**
 * FlexContainer 컴포넌트
 * @component FlexContainer
 * @param {React.ReactNode} props.children - FlexContainer 내부의 자식 요소
 */
const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};

export { FlexContainer };

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
        width: ${width};
        height: ${height};
        color: white;
        background-color: #4f85e8;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-family: Pretendard;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.042rem;
      `}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  children: '서비스 형태가 들어가요',
  width: '10rem',
  height: '2.9rem',
};
export default Tag;

/**
 * 네비게이션 (GNB) 컴포넌트
 */
const Nav = styled.nav`
  background-color: #000000;
  z-index: 99;
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
  const dispatch = useDispatch();

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
      <div
        style={{
          display: 'flex',
          width: '1200px',
          margin: '0 auto',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
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
          <NavItem to="/project">프로젝트</NavItem>
          <NavItem to="/">회원가입</NavItem>
        </NavList>
        <div
          role="presentation"
          onClick={() => {
            dispatch(openModal({ modalType: 'CreateClubModal' }));
          }}
        >
          모달 테스트
        </div>
      </div>
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
  imgSrc: 'thumbnail.png',
};

// TeamInfo 컴포넌트
const TitleText = styled.span`
  display: inline;
  color: ${(props: any) => (props.color ? props.color : 'white')};
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
  const [members, setMembers] = useState([{ id: 1, name: '', role: '' }]);

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
      const newMembers = { id: members.length + 1, name: '', role: '' };
      setMembers([...members, newMembers]);
    }
  };
  const addPositionOnClick = () => {
    ModalBoxComponent.current?.style.setProperty('display', 'none');
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
              onChange={(e: any) => handleMemberNameChange(member.id, e.target.value)}
              maxLength={10}
            ></TitleInput>
            <ContentInput
              type="text"
              placeholder="어떤 역할을 했나요?"
              name={`팀원${member.id}이름`}
              value={member.role}
              onChange={(e: any) => handleMemberRoleChange(member.id, e.target.value)}
              maxLength={25}
            ></ContentInput>
          </ContentBox>
        ))}
        <AddMememberText onClick={addMemberOnClick}>
          해당 포지션에 팀원을 더 추가하고싶어요
        </AddMememberText>
      </InfoBox>
      <ModalBox ref={ModalBoxComponent}>
        <AddPositionText onClick={addPositionOnClick}>포지션 추가</AddPositionText>
      </ModalBox>
    </Box>
  );
};

type InnerProps = {
  children: ReactNode;
  style?: SerializedStyles;
};

/**
 * 1200px의 Inner 컴포넌트, 가운데 정렬 처리 됨.
 * @param children 컴포넌트 안에 넣을 자식 요소
 * @param style 컴포넌트의 스타일 css 요소
 */
export const Inner = ({ children, style }: InnerProps) => (
  <div
    css={css`
      width: 120rem;
      margin: 0 auto;
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.6rem;
      ${style}
    `}
  >
    {children}
  </div>
);

type ButtonBoxProps = {
  text: string;
  type: 'large' | 'small';
};

/**
 * 버튼 컴포넌트
 * @param text 버튼 안의 text 내용
 * @param type 버튼의 형태(large, small)
 */
export const ButtonBox = ({ text, type }: ButtonBoxProps) => {
  const styles = {
    large: css`
      width: 119.8rem;
      height: 9.9rem;
      border-radius: 1.2rem;
      font-size: 2.5rem;
      letter-spacing: -0.075rem;
    `,
    small: css`
      width: 1.98rem;
      height: 5.3rem;
      border-radius: 0.7rem;
      font-size: 1.7rem;
      letter-spacing: -0.051rem;
    `,
  };

  return (
    <button
      type="button"
      css={css`
        ${styles[type]}
        background: #4a7edc;
        font-weight: 700;

        &:active {
          transform: scale(0.98);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
      `}
    >
      {text}
    </button>
  );
};

type BannerProps = {
  type: 'large' | 'small';
};
export const Banner = ({ type }: BannerProps) => {
  const styles = {
    large: {
      frame: css`
        height: 41.5rem;
        border-radius: 1.3rem;
      `,
      image: css`
        width: 29.4rem;
        height: 29.5rem;
        margin-left: 16.1rem;
      `,
      textBox: css`
        margin-right: 27.5rem;
      `,
      title: css`
        font-size: 4rem;
        padding-bottom: 0.9rem;
        letter-spacing: -0.12rem;
      `,
      middleTitle: css`
        font-size: 2.3rem;
        letter-spacing: -0.069rem;
        padding-bottom: 3.5rem;
      `,
      description: css`
        font-size: 1.7rem;
        letter-spacing: -0.051rem;
      `,
    },
    small: {
      frame: css`
        height: 13.7rem;
        border-radius: 0.9rem;
      `,
      image: css`
        width: 10.5rem;
        height: 10.5rem;
        /* margin-left: 26rem; */
      `,
      textBox: css`
        /* margin-right: 21.5rem;
        text-align: left; */
      `,
      title: css`
        font-size: 2.1rem;
        padding-bottom: 0.3rem;
        letter-spacing: -0.063rem;
      `,
      middleTitle: css`
        font-size: 1.5rem;
        letter-spacing: -0.045rem;
        padding-bottom: 1.3rem;
      `,
      description: css`
        font-size: 1.2rem;
        letter-spacing: -0.036rem;
      `,
    },
  };
  return (
    <div
      css={css`
        ${styles[type].frame}
        width: 120rem;
        background: #4a7edc;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5.8rem;
      `}
    >
      <img
        alt="banner_img"
        src={bannerImg}
        css={css`
          ${styles[type].image}
        `}
      />
      <div
        css={css`
          ${styles[type].textBox}
          color: #fff;
        `}
      >
        <div
          css={css`
            ${styles[type].title}
            font-weight: 800;
          `}
        >
          챌린저스 서비스 오픈
        </div>
        <div
          css={css`
            ${styles[type].middleTitle}
            font-weight: 700;
          `}
        >
          사이드 프로젝트 기록과 추적을 용이하게
        </div>
        <div
          css={css`
            ${styles[type].description}
            font-weight: 500;
          `}
        >
          내가 소속한 클럽을 등록하고 챌린저스 서비스에서
          <br /> 사이드 프로젝트를 기록과 소통해보세요
        </div>
      </div>
    </div>
  );
};

type ClubProps = {
  name: string;
  clubImg: string;
};
/**
 * club logo를 가져오는 컴포넌트
 * @param name 가져올 이미지의 클럽명
 * @param clubImg 클럽 로고 이미지의 url
 */
export const Club = ({ name, clubImg }: ClubProps) => {
  return (
    <span
      css={css`
        height: 3rem;
        padding-right: 4.3rem;
      `}
    >
      <img
        css={css`
          height: '100%';
          object-fit: 'cover';
        `}
        src={clubImg}
        alt={name}
      />
    </span>
  );
};
