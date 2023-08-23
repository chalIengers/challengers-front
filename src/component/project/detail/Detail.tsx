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
import { ProjectDetail } from '../../../json/project-controller';
import { GenerateTags } from '../../../util/util';

const Detail = () => {
  const { id } = useParams();

  // 임시로 작성
  const filteredProjects = id ? ProjectDetail.filter((project) => project.id === Number(id)) : null;
  const data = filteredProjects ? filteredProjects[0] : null;

  if (data === null) return <div>Loading...</div>;

  const generatedTags = GenerateTags(data.tags);

  return (
    <Inner>
      <Banner />
      <Section gap="4">
        <Header1>프로젝트 상세페이지</Header1>

        <ContainerComponent>
          <ImageBox imgSrc={data.image} />

          <Section gap="1.6">
            <TagList>
              {generatedTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>

            <Section gap="0.8">
              <Header1>{data.title}</Header1>
              <Body1>{data.subTitle}</Body1>
            </Section>
          </Section>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>

          <GridBox>
            <Header2>소속 클럽</Header2>
            <Body1>{data.club}</Body1>

            <Header2>서비스 형태</Header2>
            <Body1>{data.serviceType}</Body1>

            <Header2>프로젝트 상태</Header2>
            <Body1>{data.projectState}</Body1>

            <Header2>프로젝트 기간</Header2>
            <Body1>{data.projectPeriod}</Body1>

            <Header2>사용된 기술 스택</Header2>
            <Body1>{data.techStack}</Body1>
          </GridBox>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>
          <DescribeBox text={data.describe} />
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>

          <FlexWrapContainer>
            {data.teamInfoBoxs.map((teamInfo) => {
              return <TeamInfoBox teamInfo={teamInfo} key={uuidv4()} />;
            })}
          </FlexWrapContainer>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>

          <TagList>
            {data.projectLink.map((projectLink) => {
              return <ProjectLinkButton projectLink={projectLink} key={projectLink.url} />;
            })}
          </TagList>
        </ContainerComponent>
      </Section>
    </Inner>
  );
};

export default Detail;
