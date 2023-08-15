/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  Tag,
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  TextInputBox,
} from '../../emotion/component';
import { LinkInputBox } from '../emotion/component';
import { Header1, Header2, Inner, Section } from '../../emotion/GlobalStyle';
import { TeamInfoInputBox } from './component';
import { TagList } from '../component';
        

const ProjectPublish = () => {
  return (
    <Inner>
      <Banner type="small" />
      <Section gap="4">
        <Header1>프로젝트 발행페이지</Header1>

        <ContainerComponent>
          <div
            css={css`
              width: 104rem;
              height: 48rem;
              background-color: #404040;
              border-radius: 1.2rem;
            `}
          />

          <TagList>
            <Tag>서비스 형태가 들어가요</Tag>
            <Tag>소속 클럽 이름이 들어가요</Tag>
          </TagList>

          <Section gap="0.8">
            <TextInputBox type="header1" text="제목을 입력해주세요" />
            <TextInputBox type="body2" text="소제목을 입력해주세요" />
          </Section>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>
          <GridBox>
            <Header2>소속 클럽</Header2>
            <TextInputBox type="body1" text="소속 클럽을 입력해주세요" />

            <Header2>서비스 형태</Header2>
            <TextInputBox type="body1" text="서비스 형태를 선택해주세요" />

            <Header2>프로젝트 상태</Header2>
            <TextInputBox type="body1" text="프로젝트 현재 상태를 선택해주세요" />

            <Header2>프로젝트 기간</Header2>
            <TextInputBox type="body1" text="기간을 선택해주세요" />

            <Header2>사용된 기술 스택</Header2>
            <TextInputBox type="body1" text="사용된 기술 스택을 선택해주세요" />
          </GridBox>
        </ContainerComponent>

        <ContainerComponent>
          <p>에디터입니다.</p>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>
          <div
            css={css`
              display: flex;
              justify-content: start;
              flex-wrap: wrap;
              gap: 4rem;
            `}
          >
            <TeamInfoInputBox />
            <TeamInfoInputBox />
            <TeamInfoInputBox />
            <TeamInfoInputBox />
          </div>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>
          <LinkInputBox />
          <LinkInputBox />
        </ContainerComponent>

        <ButtonBox text="프로젝트 발행하기" type="large" />
      </Section>
    </Inner>
  );
};

export default ProjectPublish;
