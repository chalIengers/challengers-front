/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/theme';
import {
  BannerProps,
  ButtonBoxProps,
  ClubComponentProps,
  ContainerType,
  ProjectBoxProps,
  SelectBoxProps,
  SelectBoxProps2,
  TagListType,
  TextBoxProps,
  TextInputBoxType,
} from '../../types/globalType';
import { Body2, Header1 } from './GlobalStyle';

export const TagList = ({ children, small }: TagListType) => (
  <div
    css={css`
      display: flex;
      gap: ${small ? 0.8 : 1.6}rem;
    `}
  >
    {children}
  </div>
);

/**
 * Container 컴포넌트
 * @Containercomponent
 * @param children - 컨테이너 컴포넌트의 자식 요소
 */
export const ContainerComponent = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        width: 120rem;
        padding: 5.6rem 7.2rem;
        background-color: ${theme.palette.gray[900]};
        border-radius: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
      `}
    >
      {children}
    </div>
  );
};

/**
 * SelectBox 컴포넌트
 * @StyledSelectBox
 */

export const SelectBox = ({
  options,
  value,
  onChange,
  background,
  customStyle,
}: SelectBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
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
        background: ${background || `${theme.palette.primary[500]}`};
        ${theme.typography.body3Bold}
        color: ${theme.palette.gray.white};
        padding-right: 2.4rem;
        border-radius: 0.8rem;
        background-size: 1.2rem;
        background-repeat: no-repeat;
        background-position: right 0.6rem center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.75em' height='0.4375em' viewBox='0 0 12 7'%3E%3Cpath fill='%23ffffff' d='M6 6.8l4-4H2l4 4z'/%3E%3C/svg%3E");
        & option {
          ${theme.typography.body3Bold}
        }
        ${customStyle}
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
export const SelectBox2 = ({
  options,
  value,
  onChange,
  background,
  customStyle,
}: SelectBoxProps2) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
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
        background: ${background || `${theme.palette.primary[500]}`};
        ${theme.typography.body3Bold}
        color: ${theme.palette.gray.white};
        padding-right: 2.4rem;
        border-radius: 0.8rem;
        background-size: 1.2rem;
        background-repeat: no-repeat;
        background-position: right 0.6rem center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.75em' height='0.4375em' viewBox='0 0 12 7'%3E%3Cpath fill='%23ffffff' d='M6 6.8l4-4H2l4 4z'/%3E%3C/svg%3E");
        & option {
          ${theme.typography.body3Bold}
        }
        ${customStyle}
      `}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
/**
 * 라벨 컴포넌트
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
export const Tag = ({ children }: ContainerType) => {
  return (
    <span
      css={css`
        padding: 0.8rem;
        color: ${theme.palette.gray.white};
        background-color: ${theme.palette.primary[500]};
        border-radius: 0.4rem;
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

/**
 * Projectbox 컴포넌트
 * @component ProjectBox
 * @param {ProjectBoxProps} projectData - 프로젝트 정보
 */

export const ProjectBox = ({ projectData }: { projectData: ProjectBoxProps }) => {
  const { id, projectName, projectDescription, imageUrl } = projectData;

  const navigate = useNavigate();

  return (
    <div
      role="presentation"
      onClick={() => {
        navigate(`/project/detail/${id}`);
      }}
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1.6rem 2rem;
        width: 38.4rem;
        height: 40rem;
        background: ${theme.palette.gray[900]};
        border-radius: 1.6rem;
        gap: 1.6rem;
        cursor: pointer;

        box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);

        transition: transform 0.2s ease-in-out, box-shadow 0.3s ease;
        &:hover {
          box-shadow: 0 6px 8px rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
        }
      `}
    >
      <img
        src={imageUrl}
        alt="Project"
        css={css`
          height: 22.4rem;
          width: 35.2rem;
          border-radius: 1.2rem;
          object-fit: cover;
        `}
      />

      <TagList>
        <Tag>{projectData?.projectCategory}</Tag>
        <Tag>{projectData?.belongedClubName ? projectData.belongedClubName : '클럽 없음'}</Tag>
      </TagList>

      <Header1>{projectName}</Header1>
      <Body2>{projectDescription}</Body2>
    </div>
  );
};

const loadingAnimation = css`
  background: linear-gradient(
    -90deg,
    ${theme.palette.gray[600]} 00%,
    #575757 50%,
    ${theme.palette.gray[600]} 100%
  );
  background-size: 400% 400%;
  animation: pulse 1.7s ease-in-out infinite;
  @keyframes pulse {
    to {
      background-position-x: -200%;
    }
  }
`;

const LoadingBox = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.6rem 2rem;
      width: 38.4rem;
      height: 40rem;
      background-color: ${theme.palette.gray[900]};
      border-radius: 1.6rem;
      gap: 1.6rem;
      cursor: pointer;
    `}
  >
    <div
      css={css`
        height: 22.4rem;
        border-radius: 1.2rem;
        object-fit: cover;
        ${loadingAnimation}
      `}
    />
  </div>
);

/**
 * FlexContainer 컴포넌트
 * @component FlexContainer
 * @param children - FlexContainer 내부의 자식 요소
 */

export const FlexWrapContainer = ({ children }: ContainerType) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      gap: 2.4rem;
    `}
  >
    {children}
  </div>
);

export const LoadingContainer = () => (
  <FlexWrapContainer>
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
  </FlexWrapContainer>
);

/**
 * 버튼 컴포넌트
 * @param text 버튼 안의 text 내용
 * @param type 버튼의 형태
 */
export const ButtonBox = ({
  text,
  type,
  onClick,
  cancel,
  submit,
  width,
  height,
  color,
  disabled,
  backgroundColor,
}: ButtonBoxProps) => {
  const buttonStyles = {
    large: css`
      width: 100%;
      height: 9.6rem;
      ${theme.typography.header1}
    `,
    modal: css`
      width: 22.4rem;
      height: 6.4rem;
      ${theme.typography.header2}
      color: ${cancel && theme.palette.gray.black};
      background-color: ${cancel && theme.palette.gray[300]};
      background-color: ${backgroundColor};
      &:hover {
        background-color: ${color};
      }
    `,
    modalSmall: css`
      width: 14rem;
      height: 4rem;
      ${theme.typography.body3}
      color: ${cancel && theme.palette.gray.black};
      background-color: ${cancel && theme.palette.gray[300]};
    `,
    custom: css`
      width: 19.8rem;
      height: 5.6rem;
      background-color: ${backgroundColor || '#212121'};
      ${theme.typography.body1Bold}
    `,
    small: css`
      width: 22.4rem;
      height: 5.6rem;
      ${theme.typography.body1Bold}
    `,
    very_small: css`
      padding: 1.7rem 3.4rem;
      ${theme.typography.body1Bold};
    `,
    large_modal: css`
      width: 100%;
      padding: 2rem;
      background-color: ${backgroundColor};
      ${theme.typography.header2};
    `,
  };

  const buttonStyle = css`
    border-radius: ${type === 'large' ? 1.2 : 0.8}rem;
    background-color: ${theme.palette.primary[500]};
    color: ${theme.palette.gray.white};
    ${buttonStyles[type]};
    background-color: ${disabled && '#88898A'};

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
  `;

  return (
    <button
      type={submit ? 'submit' : 'button'}
      css={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export const Banner = ({ large }: BannerProps) => {
  return (
    <div
      css={css`
        border-radius: 1.2rem;
        width: 100%;
        height: ${large ? 41.5 : 13.6}rem;
        padding: ${large ? 4.8 : 2.4}rem;
        background: #4a7edc;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5.8rem;
      `}
    >
      <img
        alt="banner_img"
        src={`${process.env.PUBLIC_URL}/img/banner.png`}
        css={css`
          width: ${large ? 29.4 : 10.5}rem;
        `}
      />

      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: ${large ? '2.4' : '1.2'}rem;
        `}
      >
        <h1
          css={css`
            ${large ? theme.typography.title : theme.typography.header1}
          `}
        >
          챌린저스 서비스 오픈
        </h1>
        <h2
          css={css`
            ${large ? theme.typography.header1 : theme.typography.body2Bold}
          `}
        >
          사이드 프로젝트 기록과 추적을 용이하게
        </h2>
        <p
          css={css`
            ${large ? theme.typography.body1 : theme.typography.body4}
          `}
        >
          내가 소속한 클럽을 등록하고 챌린저스 서비스에서
          <br /> 사이드 프로젝트를 기록과 소통해보세요
        </p>
      </div>
    </div>
  );
};

/**
 * club logo를 가져오는 컴포넌트
 * @param name 가져올 이미지의 클럽명
 * @param clubImg 클럽 로고 이미지의 url
 */
export const ClubComponent = ({ name, logo }: ClubComponentProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <img
        css={css`
          max-width: 13.6rem;
          max-height: 6.4rem;
          object-fit: cover;
          filter: invert(0.1) brightness(10);
        `}
        src={logo}
        alt={name || logo}
      />
    </div>
  );
};

export const GridBox = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
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
export const GridBox2 = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
  onChange,
  register,
  onKeyDown,
  onBlur,
  value,
  name,
}: TextInputBoxType) => {
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
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      name={name}
      // onChange={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...register}
    />
  );
};

/**
 * @param children space-between을 적용 할 Text
 * @param margin margin-bottom 설정이 가능(단위 rem, 기본값 4.8)
 */

export const TextBox = ({ children, margin }: TextBoxProps) => (
  <div
    css={css`
      width: 120rem;
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
