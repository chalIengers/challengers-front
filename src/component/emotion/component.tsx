/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

interface ContainerComponentProps {
  padding?: string;
  children?: ReactNode;
  margin?: string;
}

/**
 * Container 컴포넌트
 * @Containercomponent
 * @param {ReactNode} props.children - 컨테이너 컴포넌트의 자식 요소
 */
export const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
  padding,
  margin,
}) => {
  return (
    <div
      css={css`
        width: 120rem;
        padding: ${padding};
        background-color: ${theme.palette.gray[900]};
        border-radius: 1.2rem;
        margin: ${margin};
        display: flex;
        flex-direction: column;
        gap: 4rem;
      `}
    >
      {children}
    </div>
  );
};

ContainerComponent.defaultProps = {
  children: null,
  padding: '7.2rem',
  margin: '0rem',
};

/**
 * SelectBox 컴포넌트
 * @StyledSelectBox
 * @param {ReactNode} props.children - 컨테이너 컴포넌트의 자식 요소
 */
interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
  back?: string;
}

export const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange, back }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      css={css`
        padding: 0.8rem;
        border: none;
        outline: none;
        cursor: pointer;
        appearance: none;
        text-indent: 0.1rem;
        background: ${back || `${theme.palette.primary[500]}`};
        ${theme.typography.body3Bold}
        color: ${theme.palette.gray.white};
        padding-right: 2.4rem;
        border-radius: 0.8rem;
        background-size: 1.2rem;
        background-repeat: no-repeat;
        background-position: right 0.6rem center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.75em' height='0.4375em' viewBox='0 0 12 7'%3E%3Cpath fill='%23ffffff' d='M6 6.8l4-4H2l4 4z'/%3E%3C/svg%3E");
      `}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

/**
 * Projectbox 컴포넌트
 * @component ProjectBox
 * @param {string} props.title - 프로젝트 제목
 * @param {string} props.content - 프로젝트 내용
 * @param {string[]} props.tags - 프로젝트 태그들의 배열
 */

interface ProjectBoxProps {
  title: string;
  content: string;
  tags: string[];
}
export const ProjectBox: React.FC<ProjectBoxProps> = ({ title, content, tags }) => {
  const generatedTags = tags.length === 0 ? ['임의 태그'] : tags;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1.6rem 2rem;
        width: 38.4rem;
        height: 40rem;
        background: ${theme.palette.gray[900]};
        color: ${theme.palette.gray.white};
        border-radius: 1.6rem;
        gap: 1.6rem;
      `}
    >
      <img src="https://i.ibb.co/yktPkxP/image-5.png" alt="Project" />
      {generatedTags && (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            gap: 0.8rem;
          `}
        >
          {generatedTags.map((tag) => (
            <div
              css={css`
                border-radius: 0.5rem;
                padding: 0.8rem;
                background: ${theme.palette.primary[500]};
                ${theme.typography.body3Bold};
              `}
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
      <div
        css={css`
          ${theme.typography.header1};
        `}
      >
        {title}
      </div>
      <div
        css={css`
          ${theme.typography.body2};
        `}
      >
        {content}
      </div>
    </div>
  );
};

/**
 * FlexContainer 컴포넌트
 * @component FlexContainer
 * @param {React.ReactNode} props.children - FlexContainer 내부의 자식 요소
 */
interface FlexContainerProps {
  children: React.ReactNode;
}
export const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 2.4rem;
        width: 120rem;
      `}
    >
      {children}
    </div>
  );
};

interface TagType {
  children?: ReactNode;
}
/**
 * 라벨 컴포넌트
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
const Tag = ({ children }: TagType) => {
  return (
    <span
      css={css`
        padding: 0.8rem;
        color: white;
        background-color: #4f85e8;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        ${theme.typography.body3Bold}
      `}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  children: '서비스 형태가 들어가요',
};
export default Tag;

const Nav = ({ children, style }: { children: ReactNode; style: SerializedStyles }) => {
  return (
    <nav
      css={css`
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
        ${style}
      `}
    >
      {children}
    </nav>
  );
};
const NavList = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 3em;
        transition: 0.4s all;
      `}
    >
      {children}
    </div>
  );
};
const NavItem = ({ children, to }: { children: ReactNode; to: string }) => {
  return (
    <Link to={to}>
      <p
        css={css`
          color: white;
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
            `}
          ></img>
        </Link>
        <NavList>
          <NavItem to="/">챌린저스란?</NavItem>
          <NavItem to="/">클럽 등록</NavItem>
          <NavItem to="/project">프로젝트</NavItem>
          <NavItem to="/">회원가입</NavItem>
        </NavList>
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
};

/**
 * 1200px의 Inner 컴포넌트, 가운데 정렬 처리 됨.
 * @param children 컴포넌트 안에 넣을 자식 요소
 * @param style 컴포넌트의 스타일 css 요소
 */
export const Inner = ({ children }: InnerProps) => (
  <section
    css={css`
      width: 120rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 9.6rem;
    `}
  >
    {children}
  </section>
);

type ButtonBoxProps = {
  text: string | undefined;
  type: 'large' | 'small' | 'modal' | 'modal_cancel' | 'very_small';
  onClickFunction?: any;
};

/**
 * 버튼 컴포넌트
 * @param text 버튼 안의 text 내용
 * @param type 버튼의 형태(large, small, modal, modal_cancel)
 */
export const ButtonBox = ({ text, type, onClickFunction }: ButtonBoxProps) => {
  const styles = {
    large: css`
      width: 119.8rem;
      height: 9.9rem;
      border-radius: 1.2rem;
      font-size: 2.5rem;
      letter-spacing: -0.075rem;
      background: ${theme.palette.primary[500]};
      font-weight: 700;
    `,
    small: css`
      width: 19.8rem;
      height: 5.3rem;
      border-radius: 0.7rem;
      font-size: 1.7rem;
      letter-spacing: -0.051rem;
      background: ${theme.palette.primary[500]};
      font-weight: 700;
    `,
    modal: css`
      width: 22.2rem;
      height: 6.2rem;
      border-radius: 0.7rem;
      ${theme.typography.body1}
      color: ${theme.palette.gray.white};
      background: ${theme.palette.primary[500]};
    `,
    modal_cancel: css`
      width: 22.2rem;
      height: 6.2rem;
      border-radius: 0.7rem;
      ${theme.typography.body1}
      color: ${theme.palette.gray.black};
      background: ${theme.palette.gray[300]};
    `,
    very_small: css`
      width: 9.7rem;
      height: 5.3rem;
      border-radius: 0.7rem;
      ${theme.typography.body1};
      color: ${theme.palette.gray.white};
      background: ${theme.palette.primary[500]};
    `,
  };

  return (
    <button
      type="button"
      css={css`
        ${styles[type]}

        &:active {
          transform: scale(0.98);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
      `}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};

interface BannerProps {
  type: 'large' | 'small';
}
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
        ${theme.typography.title}
        padding-bottom: 0.9rem;
      `,
      middleTitle: css`
        ${theme.typography.header1}
        padding-bottom: 3.5rem;
      `,
      description: css`
        ${theme.typography.body1}
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
        margin-left: 41.6rem;
      `,
      textBox: css`
        margin-right: 37.5rem;
      `,
      title: css`
        ${theme.typography.header2}
        padding-bottom: 0.3rem;
      `,
      middleTitle: css`
        ${theme.typography.body3Bold}
        padding-bottom: 1.3rem;
      `,
      description: css`
        ${theme.typography.body4}
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
        src={`${process.env.PUBLIC_URL}/img/3d-construction-made-of-glass-abstract-geometrical-composition 1.png`}
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

interface ClubComponentProps {
  name: string;
  clubImg: string;
}
/**
 * club logo를 가져오는 컴포넌트
 * @param name 가져올 이미지의 클럽명
 * @param clubImg 클럽 로고 이미지의 url
 */
export const ClubComponent = ({ name, clubImg }: ClubComponentProps) => {
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

export const GridBox = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        /* flex-direction: column; */
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        gap: 3.2rem;
      `}
    >
      {children}
    </div>
  );
};
export const TextInputBox = ({
  type,
  text,
  size,
  max,
  inputType,
}: {
  type: 'header1' | 'body2' | 'body1' | 'border';
  text?: string;
  size?: number;
  max?: number;
  inputType?: string;
}) => {
  const style = {
    header1: css`
      ${theme.typography.header1}
    `,
    body2: css`
      ${theme.typography.body2}
    `,
    body1: css`
      ${theme.typography.body1}
    `,
    border: css`
      font-size: 2rem;
      letter-spacing: -0.6px;
      border-bottom: 1px solid #cbcbcb;
    `,
  };
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        &::placeholder {
          color: #cbcbcb;
        }
        ${style[type]};
      `}
      placeholder={text}
      size={size}
      maxLength={max}
      type={inputType}
    />
  );
};

export const TextBox = ({ children, margin }: { children: ReactNode; margin?: string }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: ${margin}rem;
      align-items: center;
    `}
  >
    {children}
  </div>
);

TextBox.defaultProps = {
  margin: '4.8',
};
