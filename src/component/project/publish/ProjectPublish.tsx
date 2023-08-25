/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Editor } from 'editor_likelion';
import {
  Tag,
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  TextInputBox,
  TagList,
  FlexWrapContainer,
} from '../../emotion/component';
import { Header1, Header2, Inner, Section } from '../../emotion/GlobalStyle';
import { LinkInputBox, TeamInfoInputBox, Labels } from './component';
import { useImageUpload, useInputState } from './hook';

const ProjectPublish = () => {
  const { imageSrc, uploadImage } = useImageUpload();
  const { value: service, onChange: ServiceChange } = useInputState<string | null>();
  const { value: club, onChange: ClubChange } = useInputState<string | null>();

  const onChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  return (
    <Inner>
      <Banner />
      <Section gap="4">
        <Header1>프로젝트 발행페이지</Header1>

        <ContainerComponent>
          {imageSrc ? (
            <img
              css={css`
                width: 104rem;
                height: 48rem;
                background-color: #404040;
                border-radius: 1.2rem;
              `}
              src={imageSrc}
              alt="프로젝트 이미지"
            />
          ) : (
            <div
              css={css`
                width: 104rem;
                height: 48rem;
                background-color: #404040;
                border-radius: 1.2rem;
              `}
            />
          )}

          <TagList>
            {service ? <Tag>{service}</Tag> : <Tag>서비스 형태가 들어가요</Tag>}
            {club ? <Tag>{club}</Tag> : <Tag>소속 클럽 이름이 들어가요</Tag>}
            <Labels htmlFor="fileInput">
              프로젝트 이미지 선택
              <input
                type="file"
                id="fileInput"
                onChange={onChange}
                css={css`
                  display: none;
                `}
              />
            </Labels>
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
            <TextInputBox type="body1" text="소속 클럽을 입력해주세요" onChange={ServiceChange} />

            <Header2>서비스 형태</Header2>
            <TextInputBox type="body1" text="서비스 형태를 선택해주세요" onChange={ClubChange} />

            <Header2>프로젝트 상태</Header2>
            <TextInputBox type="body1" text="프로젝트 현재 상태를 선택해주세요" />

            <Header2>프로젝트 기간</Header2>
            <TextInputBox type="body1" text="기간을 선택해주세요" />

            <Header2>사용된 기술 스택</Header2>
            <TextInputBox type="body1" text="사용된 기술 스택을 선택해주세요" />
          </GridBox>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>
          <Editor
            environmentColor="dark"
            placeholder="프로젝트 설명을 입력해주세요"
            defaultFontColor="white"
            defaultFontSize="1.2rem"
          />
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>

          <FlexWrapContainer>
            <TeamInfoInputBox />
            <TeamInfoInputBox />
            <TeamInfoInputBox />
            <TeamInfoInputBox />
            <TeamInfoInputBox addInfo />
          </FlexWrapContainer>
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
