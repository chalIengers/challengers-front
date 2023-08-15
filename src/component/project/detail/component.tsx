/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  InfoContainer,
  InfoDownContainer,
  InfoUpperContainer,
  LinkImg,
} from '../emotion/component';
import { Body2, Header2, Section } from '../../emotion/GlobalStyle';
import theme from '../../../styles/theme';
import { ProjectLinkButtonProps, imgBoxType } from '../../../types/globalType';

export const TeamInfoBox = () => {
  return (
    <InfoContainer>
      <InfoUpperContainer>
        <Header2>프론트 엔드</Header2>
      </InfoUpperContainer>

      <InfoDownContainer fixHeight>
        <Section gap="0.8">
          <Header2>이진아</Header2>
          <Body2>프론트엔드</Body2>
        </Section>
      </InfoDownContainer>
    </InfoContainer>
  );
};

/**
 * ProjectLink를 연결해주는 UI 컴포넌트
 * @param name 보여줄 link 이미지의 이름
 * @param url 프로젝트 연결 link URL
 */
export const ProjectLinkButton = ({ name, url }: ProjectLinkButtonProps) => {
  const handleClick = () => {
    window.open(url);
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
      <LinkImg name={name} type="large" />
    </button>
  );
};

/**
 * 프로젝트 상세 이미지
 * @param imgSrc 이미지 src
 */
export const ImageBox = ({ imgSrc }: imgBoxType) => {
  return <img alt="프로젝트 상세 이미지" src={`${process.env.PUBLIC_URL}/img/${imgSrc}`} />;
};

ImageBox.defaultProps = {
  imgSrc: 'thumbnail.png',
};
