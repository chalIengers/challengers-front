/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  Banner,
  ClubComponent,
  FlexContainer,
  Inner,
  ProjectBox,
  TextBox,
} from '../emotion/component';
import data from '../../json/data.json';
import data2 from '../../json/data2.json';
import { Body1, Header1, Section } from '../emotion/GlobalStyle';
import { ClubList } from './component';

const index = () => {
  return (
    <Inner>
      <Banner type="large" />
      <Section gap="3.2">
        <Header1>현재 다양한 클럽이 챌린저스에서 활동하고 있어요</Header1>
        <ClubList>
          {data2 &&
            data2.Clubs.map((club) => (
              <ClubComponent
                key={club.id}
                name={club.name}
                clubImg={`${process.env.PUBLIC_URL}/img/${club.clubImg}`}
              />
            ))}
        </ClubList>
      </Section>
      <hr
        css={css`
          width: 72rem;
          border: 1px solid #fff;
          margin: auto;
        `}
      />
      <Section>
        <TextBox>
          <Header1>붐하고 뜨고 있는 프로젝트</Header1>
          <Body1>더 보러가기 &gt;</Body1>
        </TextBox>
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
      </Section>
      <Section>
        <TextBox>
          <Header1>최근 등록된 프로젝트</Header1>
          <Body1>더 보러가기 &gt;</Body1>
        </TextBox>
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
      </Section>
    </Inner>
  );
};

export default index;
