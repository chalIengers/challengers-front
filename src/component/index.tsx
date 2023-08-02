/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Banner, ClubComponent, FlexContainer, Inner, ProjectBox } from './emotion/component';
import data from '../json/data.json';
import data2 from '../json/data2.json';
import { Body1, Header1 } from './emotion/GlobayStyle';

const index = () => {
  return (
    <Inner
      style={css`
        align-items: start;
        margin: 0 16rem;
      `}
    >
      <Banner type="large" />
      <div style={{ marginTop: '3rem' }}></div>
      <Header1>현재 다양한 클럽이 챌린저스에서 활동하고 있어요</Header1>
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
            <ClubComponent
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
        <Header1>붐하고 뜨고 있는 프로젝트</Header1>
        <Body1>더 보러가기 &gt;</Body1>
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
        <Header1>최근 등록된 프로젝트</Header1>
        <Body1>더 보러가기 &gt;</Body1>
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
