/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Tag,
  Banner,
  ContainerComponent,
  GridBox,
  FlexWrapContainer,
  TagList,
} from '../../emotion/component';
import { Body1, Header1, Header2, Inner, Section } from '../../emotion/GlobalStyle';
import {
  DescribeBox,
  ImageBox,
  LoadingComponent,
  ProjectLinkButton,
  TeamInfoBox,
} from './component';
import { useGetVideoQuery } from '../../../store/projectApi';
import useProjectCrew from './hook';
import { ProjectLink, ProjectTechStack } from '../../../types/globalType';
import ApiFetcher from '../../../util/util';

const Detail = () => {
  const { id } = useParams();

  const resultQuery = useGetVideoQuery({ id });
  const groupedByPosition = useProjectCrew(resultQuery.data?.projectCrew);

  return (
    <Inner>
      <Banner />
      <Section gap="4">
        <Header1>프로젝트 상세페이지</Header1>

        <ContainerComponent>
          <ApiFetcher query={resultQuery} loading={<LoadingComponent />}>
            <ImageBox imgSrc={resultQuery.data?.imageUrl} />

            <Section gap="1.6">
              <TagList>
                <Tag>{resultQuery.data?.projectCategory}</Tag>
                <Tag>{resultQuery.data?.belongedClubName}</Tag>
              </TagList>

              <Section gap="0.8">
                <Header1>{resultQuery.data?.projectName}</Header1>
                <Body1>{resultQuery.data?.projectDescription}</Body1>
              </Section>
            </Section>
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>
          <ApiFetcher query={resultQuery} loading={<LoadingComponent />}>
            <GridBox>
              <Header2>소속 클럽</Header2>
              <Body1>{resultQuery.data?.belongedClubName}</Body1>

              <Header2>서비스 형태</Header2>
              <Body1>{resultQuery.data?.projectCategory}</Body1>

              <Header2>프로젝트 상태</Header2>
              <Body1>{resultQuery.data?.projectStatus}</Body1>

              <Header2>프로젝트 기간</Header2>
              <Body1>{resultQuery.data?.projectPeriod}</Body1>

              <Header2>사용된 기술 스택</Header2>
              <TagList>
                {resultQuery.data?.projectTechStack.map((stack: ProjectTechStack) => {
                  return <Body1 key={uuidv4()}>{stack.name}</Body1>;
                })}
              </TagList>
            </GridBox>
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>

          <ApiFetcher query={resultQuery} loading={<LoadingComponent />}>
            <DescribeBox
              text={resultQuery.data?.projectDetail ? resultQuery.data.projectDetail : ''}
            />
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>

          <ApiFetcher query={resultQuery} loading={<LoadingComponent />}>
            <FlexWrapContainer>
              {Object.entries(groupedByPosition).map((crew) => {
                return <TeamInfoBox teamInfo={crew} key={crew[0]} />;
                // return (
                //   <InfoContainer>
                //     <InfoUpperContainer>
                //       <Header2>{teamInfo.field}</Header2>
                //     </InfoUpperContainer>
                //     <TeamInfoBox teamInfo={crew} key={uuidv4()} />;
                //   </InfoContainer>
                // );
              })}
            </FlexWrapContainer>
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>

          <ApiFetcher query={resultQuery} loading={<LoadingComponent />}>
            <TagList>
              {resultQuery.data?.projectLink.map((projectLink: ProjectLink) => {
                return <ProjectLinkButton projectLink={projectLink} key={projectLink.id} />;
              })}
            </TagList>
          </ApiFetcher>
        </ContainerComponent>
      </Section>
    </Inner>
  );
};

export default Detail;
