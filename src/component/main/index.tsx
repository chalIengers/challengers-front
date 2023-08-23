/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  Banner,
  ClubComponent,
  FlexWrapContainer,
  ProjectBox,
  TextBox,
} from '../emotion/component';
import { Clubs } from '../../json/club-controller';
import { ProjectPreview } from '../../json/project-controller';
import { Header1, Inner, Section } from '../emotion/GlobalStyle';
import { ClubList, NavigateMore, DivisionLine } from './component';

const index = () => {
  if (!ProjectPreview) return <div>Loading ...</div>;
  if (!Clubs) return <div>Loading ...</div>;
  const sliceProjectData = ProjectPreview.slice(0, 6);

  return (
    <Inner>
      <Banner large />

      <Section gap="3.2">
        <Header1>현재 다양한 클럽이 챌린저스에서 활동하고 있어요</Header1>
        <ClubList>
          {Clubs.map((club) => (
            <ClubComponent
              key={club.id}
              name={club.name}
              clubImg={`${process.env.PUBLIC_URL}/img/${club.clubImg}`}
            />
          ))}
        </ClubList>
      </Section>

      <DivisionLine />

      <Section>
        <TextBox>
          <Header1>붐하고 뜨고 있는 프로젝트</Header1>
          <NavigateMore sort="popular" />
        </TextBox>

        <FlexWrapContainer>
          {sliceProjectData.map((project) => (
            <ProjectBox key={project.id} projectData={project} />
          ))}
        </FlexWrapContainer>
      </Section>

      <Section>
        <TextBox>
          <Header1>최근 등록된 프로젝트</Header1>
          <NavigateMore sort="recent" />
        </TextBox>

        <FlexWrapContainer>
          {sliceProjectData.map((project) => (
            <ProjectBox key={project.id} projectData={project} />
          ))}
        </FlexWrapContainer>
      </Section>
    </Inner>
  );
};

export default index;
