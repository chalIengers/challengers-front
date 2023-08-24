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
import { DescribeBox, ImageBox, ProjectLinkButton, TeamInfoBox } from './component';
import { useGetVideoQuery } from '../../../store/projectApi';
import useProjectCrew from './hook';
import { ProjectPreview } from '../../../json/project-controller';
import { GenerateTags } from '../../../util/util';
import { ProjectLink, ProjectTechStack } from '../../../types/globalType';

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetVideoQuery({ id });
  const groupedByPosition = useProjectCrew(data?.projectCrew);

  // 임시
  const generatedTags = GenerateTags(ProjectPreview[0].tags);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Inner>
      <Banner />
      <Section gap="4">
        <Header1>프로젝트 상세페이지</Header1>

        <ContainerComponent>
          <ImageBox imgSrc={data?.imageUrl} />

          <Section gap="1.6">
            <TagList>
              {generatedTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>

            <Section gap="0.8">
              <Header1>{data?.projectName}</Header1>
              <Body1>{data?.projectDescription}</Body1>
            </Section>
          </Section>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>

          <GridBox>
            <Header2>소속 클럽</Header2>
            <Body1>{data?.belongedClubName}</Body1>

            <Header2>서비스 형태</Header2>
            <Body1>{data?.projectCategory}</Body1>

            <Header2>프로젝트 상태</Header2>
            <Body1>{data?.projectStatus}</Body1>

            <Header2>프로젝트 기간</Header2>
            <Body1>{data?.projectPeriod}</Body1>

            <Header2>사용된 기술 스택</Header2>
            <TagList>
              {data?.projectTechStack.map((stack: ProjectTechStack) => {
                return <Body1 key={uuidv4()}>{stack.name}</Body1>;
              })}
            </TagList>
          </GridBox>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>
          <DescribeBox text={data?.projectDetail ? data.projectDetail : ''} />
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>

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
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>

          <TagList>
            {data?.projectLink.map((projectLink: ProjectLink) => {
              return <ProjectLinkButton projectLink={projectLink} key={projectLink.id} />;
            })}
          </TagList>
        </ContainerComponent>
      </Section>
    </Inner>
  );
};

export default Detail;
