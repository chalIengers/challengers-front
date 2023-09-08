/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { InfoDownContainer, LinkImg } from '../emotion/component';
import { Body2, Header2, Section } from '../../emotion/GlobalStyle';
import theme from '../../../styles/theme';
import { DescribeBoxType, ProjectCrew, ProjectLink, imgBoxType } from '../../../types/globalType';

export const TeamInfoBox = ({ teamInfo }: { teamInfo: ProjectCrew[] }) => {
  return (
    <InfoDownContainer fixHeight>
      {teamInfo.map((crew: ProjectCrew) => (
        <Section gap="0.8" key={crew.id}>
          <Header2>{crew.name}</Header2>
          <Body2>{crew.role}</Body2>
        </Section>
      ))}
    </InfoDownContainer>
  );
};

/**
 * ProjectLink를 연결해주는 UI 컴포넌트
 * @param {ProjectLinkProps} projectLink 프로젝트 링크 정보
 */
export const ProjectLinkButton = ({ projectLink }: { projectLink: ProjectLink }) => {
  const handleClick = () => {
    window.open(projectLink.url);
  };
  return (
    <button
      type="button"
      css={css`
        width: 8.8rem;
        height: 8.8rem;
        border-radius: 8.8rem;
        background: ${theme.palette.gray.white};
        border: solid 1px black;
        cursor: pointer;
      `}
      onClick={handleClick}
    >
      <LinkImg name={projectLink.name} large />
    </button>
  );
};

/**
 * 프로젝트 상세 이미지
 * @param imgSrc 이미지 src
 */
export const ImageBox = ({ imgSrc }: imgBoxType) => {
  return (
    <img
      alt="프로젝트 상세 이미지"
      src={imgSrc}
      css={css`
        width: 100%;
        height: 100%;
        border-radius: 1.6rem;
        object-fit: cover;
      `}
    />
  );
};

ImageBox.defaultProps = {
  imgSrc: 'thumbnail.png',
};

export const DescribeBox = ({ text }: DescribeBoxType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        ${theme.typography.body1}
        line-height: 30px; /* 150% */
        h1 {
          ${theme.typography.body1Bold}
        }
      `}
    >
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export const LoadingComponent = () => {
  return (
    <div
      css={css`
        height: 40rem;
      `}
    />
  );
};
