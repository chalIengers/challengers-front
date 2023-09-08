/** @jsxImportSource @emotion/react */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Banner,
  FlexWrapContainer,
  LoadingContainer,
  ProjectBox,
  TextBox,
} from '../emotion/component';
import { Header1, Inner, Section } from '../emotion/GlobalStyle';
import { ClubList, NavigateMore, DivisionLine, ClubArrayContainer } from './component';
import {
  useGetVideosByTopViewQuery,
  useGetVideosQuery,
} from '../../store/controller/projectController';
import { ProjectBoxProps } from '../../types/globalType';
import { ApiFetcher } from '../../util/util';
import { useGetLogosQuery } from '../../store/controller/clubController';

const Index = () => {
  return (
    <Inner>
      <Banner large />

      <Section gap="3.2">
        <Header1>현재 다양한 클럽이 챌린저스에서 활동하고 있어요</Header1>
        <ApiFetcher query={useGetLogosQuery({})} loading={<div>로딩중...</div>}>
          {(data) => {
            const chunkedData = [];
            for (let i = 0; i < data.length; i += 7) {
              chunkedData.push(data.slice(i, i + 7));
            }
            return (
              <ClubList>
                {chunkedData.map((clubArray, index) => (
                  <ClubArrayContainer key={uuidv4()} clubArray={clubArray} index={index} />
                ))}
              </ClubList>
            );
          }}
        </ApiFetcher>
      </Section>

      <DivisionLine />

      <Section>
        <TextBox>
          <Header1>붐하고 뜨고 있는 프로젝트</Header1>
          <NavigateMore sort="popular" />
        </TextBox>

        <ApiFetcher query={useGetVideosByTopViewQuery({})} loading={<LoadingContainer />}>
          {(data) => (
            <FlexWrapContainer>
              {data.content.map((project: ProjectBoxProps) => (
                <ProjectBox key={project.id} projectData={project} />
              ))}
            </FlexWrapContainer>
          )}
        </ApiFetcher>
      </Section>

      <Section>
        <TextBox>
          <Header1>최근 등록된 프로젝트</Header1>
          <NavigateMore sort="recent" />
        </TextBox>

        <ApiFetcher query={useGetVideosQuery({})} loading={<LoadingContainer />}>
          {(data) => (
            <FlexWrapContainer>
              {data.content.map((project: ProjectBoxProps) => (
                <ProjectBox key={project.id} projectData={project} />
              ))}
            </FlexWrapContainer>
          )}
        </ApiFetcher>
      </Section>
    </Inner>
  );
};

export default Index;
