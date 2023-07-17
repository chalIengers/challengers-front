/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import { Banner, Club, FlexContainer, Inner, ProjectBox } from './emotion/component';
import theme from '../styles/theme';
import data from '../json/data.json';
import data2 from '../json/data2.json';

type HeaderProps = {
  children: ReactNode;
  style?: SerializedStyles;
};
const Header1 = ({ children, style }: HeaderProps) => (
  <h1
    css={css`
      font-size: ${theme.textVariants.heading1.fontSizes};
      font-weight: ${theme.textVariants.heading1.fontWeight};
      letter-spacing: -0.075rem;
      color: #fff;
      ${style}
    `}
  >
    {children}
  </h1>
);
const Header4 = ({ children }: { children: ReactNode }) => (
  <h4
    css={css`
      font-size: ${theme.textVariants.heading4.fontSizes};
      font-weight: ${theme.textVariants.heading4.fontWeight};
      letter-spacing: -0.06rem;
      color: #fff;
    `}
  >
    {children}
  </h4>
);
const index = () => {
  return (
    <div
      css={css`
        background-color: #000;
        height: 100vh;
        overflow: scroll;
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
        &::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <Inner
        style={css`
          align-items: start;
          margin-top: 15rem;
          margin-bottom: 16.6rem;
        `}
      >
        <Banner type="large" />
        <Header1
          style={css`
            margin-top: 5rem;
          `}
        >
          현재 다양한 클럽이 챌린저스에서 활동하고 있어요
        </Header1>
        <div
          css={css`
            width: 100%;
            height: 10rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
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
            margin-top: 10rem;
          `}
        ></div>
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 10rem;
          `}
        >
          <Header1>붐하고 뜨고 있는 프로젝트</Header1>
          <Header4>더 보러가기 &gt;</Header4>
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
          <Header4>더 보러가기 &gt;</Header4>
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
    </div>
  );
};

export default index;
