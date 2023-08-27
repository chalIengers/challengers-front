/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Tag,
  Banner,
  ContainerComponent,
  GridBox,
  TagList,
  FlexWrapContainer,
} from '../../emotion/component';
import { Body1, Header1, Header2, Inner, Section } from '../../emotion/GlobalStyle';

import { useGetVideoQuery } from '../../../store/projectController';
import { ProjectLink, ProjectTechStack } from '../../../types/globalType';
import { ApiFetcher } from '../../../util/util';
import {
  DescribeBox,
  ImageBox,
  LoadingComponent,
  ProjectLinkButton,
  TeamInfoBox,
} from './component';
import { useGetCrewQuery } from '../../../store/crewController';
import { InfoContainer, InfoUpperContainer } from '../emotion/component';

const Detail = () => {
  const { id } = useParams();

  const videoQuery = useGetVideoQuery({ id });
  const crewQuery = useGetCrewQuery({ id });

  return (
    <Inner>
      <Banner />
      <Section gap="4">
        <Header1>프로젝트 상세페이지</Header1>

        <ContainerComponent>
          <ApiFetcher query={videoQuery} loading={<LoadingComponent />}>
            {(data) => (
              <>
                <ImageBox imgSrc={data.imageUrl} />

                <Section gap="1.6">
                  <TagList>
                    <Tag>{data.projectCategory}</Tag>
                    <Tag>{data.belongedClubName}</Tag>
                  </TagList>

                  <Section gap="0.8">
                    <Header1>{data.projectName}</Header1>
                    <Body1>{data.projectDescription}</Body1>
                  </Section>
                </Section>
              </>
            )}
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>
          <ApiFetcher query={videoQuery} loading={<LoadingComponent />}>
            {(data) => (
              <GridBox>
                <Header2>소속 클럽</Header2>
                <Body1>{data.belongedClubName}</Body1>

                <Header2>서비스 형태</Header2>
                <Body1>{data.projectCategory}</Body1>

                <Header2>프로젝트 상태</Header2>
                <Body1>{data.projectStatus}</Body1>

                <Header2>프로젝트 기간</Header2>
                <Body1>{data.projectPeriod}</Body1>

                <Header2>사용된 기술 스택</Header2>
                <TagList>
                  {data.projectTechStack.map((stack: ProjectTechStack) => {
                    return <Body1 key={uuidv4()}>{stack.name}</Body1>;
                  })}
                </TagList>
              </GridBox>
            )}
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>

          <ApiFetcher query={videoQuery} loading={<LoadingComponent />}>
            {(data) => <DescribeBox text={data.projectDetail ? data.projectDetail : ''} />}
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>

          <ApiFetcher query={crewQuery} loading={<LoadingComponent />}>
            {(data) => (
              <FlexWrapContainer>
                {Object.keys(data.grouped).map((key) => {
                  // return <TeamInfoBox teamInfo={crew} key={crew[0]} />;
                  return (
                    <InfoContainer key={uuidv4()}>
                      <InfoUpperContainer>
                        <Header2>{key}</Header2>
                      </InfoUpperContainer>
                      <TeamInfoBox teamInfo={data.grouped[key]} />
                    </InfoContainer>
                  );
                })}
              </FlexWrapContainer>
            )}
          </ApiFetcher>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>

          <ApiFetcher query={videoQuery} loading={<LoadingComponent />}>
            {(data) => (
              <TagList>
                {data.projectLink.map((projectLink: ProjectLink) => {
                  return <ProjectLinkButton projectLink={projectLink} key={projectLink.id} />;
                })}
              </TagList>
            )}
          </ApiFetcher>
        </ContainerComponent>
      </Section>
    </Inner>
  );
};

export default Detail;
