/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Banner, Club, FlexContainer, Inner, ProjectBox } from './emotion/component';
import theme from '../styles/theme';
import data from '../json/data.json';
import data2 from '../json/data2.json';
import { HeadTitle } from './project/component';

export const Heading5 = styled.div`
  ${theme.textVariants.heading5}
  &:hover {
    cursor: pointer;
  }
`;
const index = () => {
  return (
    <Inner
      style={css`
        align-items: start;
        margin-top: 15rem;
        margin-bottom: 16.6rem;
      `}
    >
      <Banner type="large" />
      <div style={{ marginTop: '3rem' }}></div>
      <HeadTitle>현재 다양한 클럽이 챌린저스에서 활동하고 있어요</HeadTitle>
      <div
        css={css`
          width: 1200px;
          height: auto;
          /* display: flex; */
          /* justify-content: center; */
          /* flex-wrap: wrap; */
          row-gap: 3rem;
          /* column-gap: 2rem; */
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        `}
      >
        {data2 &&
          data2.Clubs.map((club) => (
            <Club
              key={club.id}
              name={club.name}
              clubImg={`${process.env.PUBLIC_URL}/img/${club.clubImg}`}
            />
          ))}
      </div>
      <div
        css={css`
          width: 69.8rem;
          border: 1px solid #fff;
          margin: auto;
          margin-top: 5rem;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 5rem;
        `}
      >
        <HeadTitle>붐하고 뜨고 있는 프로젝트</HeadTitle>
        <Heading5>더 보러가기 &gt;</Heading5>
      </div>
      <FlexContainer>
        {data &&
          data.Project.map((project) => (
            <ProjectBox
              key={project.id}
              title={project.title}
              content={project.content}
              tags={project.tags}
            />
          ))}
      </FlexContainer>
      <div
        css={css`
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 10rem;
        `}
      >
        <HeadTitle>최근 등록된 프로젝트</HeadTitle>
        <Heading5>더 보러가기 &gt;</Heading5>
      </div>
      <FlexContainer>
        {data &&
          data.Project.map((project) => (
            <ProjectBox
              key={project.id}
              title={project.title}
              content={project.content}
              tags={project.tags}
            />
          ))}
      </FlexContainer>
    </Inner>
  );
};

export default index;
