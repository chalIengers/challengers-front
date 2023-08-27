/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import { css } from '@emotion/react';
import { Editor } from 'editor_likelion';
import { useSelector } from 'react-redux';
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
import { LinkInputBox, TeamInfoInputBox, Labels, PublishImg } from './component';
import { useImageUpload } from './hook';
import { useCreatePublishMutation, useFileUploadMutation } from '../../../store/publishApi';
import { initialProjectData } from '../../../types/globalType';
import { selectLinks } from '../../../store/linkSlice';

const ProjectPublish = () => {
  const { imageSrc, uploadImage } = useImageUpload();
  const [newProjectData, setNewProjectData] = useState(initialProjectData);
  const [Image] = useFileUploadMutation();
  const mutation = useCreatePublishMutation();
  const editorRef = useRef(null);
  const links = useSelector(selectLinks);

  const Fileupload = (file: any) => {
    Image(file)
      .unwrap()
      .then((resultData) => {
        const updatedData = { ...newProjectData, imageUrl: resultData.msg };
        setNewProjectData(updatedData);
        console.log('파일 업로드 성공', resultData.msg);
      })
      .catch((error) => {
        console.error('파일 업로드 실패', error);
      });
  };

  const onChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      Fileupload(file);
      uploadImage(file);
    }
  };
  const handleImageDrop = (imageFile: File) => {
    Fileupload(imageFile);
    uploadImage(imageFile);
  };

  const handlePublish = async () => {
    if (editorRef.current) {
      const test = (editorRef.current as HTMLBodyElement).innerHTML;

      setNewProjectData((prevData) => ({
        ...prevData,
        projectDetail: test,
      }));

      const updatedData = {
        ...newProjectData,
        projectDetail: test,
        projectLink: links,
      };
      await mutation[0](updatedData);
      console.log(updatedData);
    }
  };

  return (
    <Inner>
      <Banner />
      <Section gap="4">
        <Header1>프로젝트 발행페이지</Header1>
        <ContainerComponent>
          <PublishImg htmlFor="fileInput" imageSrc={imageSrc} onImageDrop={handleImageDrop} />
          <input
            type="file"
            id="fileInput"
            onChange={onChange}
            css={css`
              display: none;
            `}
          />
          <TagList>
            {newProjectData.projectCategory ? (
              <Tag>{newProjectData.projectCategory}</Tag>
            ) : (
              <Tag>서비스 형태가 들어가요</Tag>
            )}
            {newProjectData.belonedCrewName ? (
              <Tag>{newProjectData.belonedCrewName}</Tag>
            ) : (
              <Tag>소속 클럽 이름이 들어가요</Tag>
            )}
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
            <TextInputBox
              type="header1"
              text="제목을 입력해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, projectName: event.target.value };
                setNewProjectData(updatedData);
              }}
            />
            <TextInputBox
              type="body2"
              text="소제목을 입력해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, projectDescription: event.target.value };
                setNewProjectData(updatedData);
              }}
            />
          </Section>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>
          <GridBox>
            <Header2>소속 클럽</Header2>
            <TextInputBox
              type="body1"
              text="소속 클럽을 입력해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, belonedCrewName: event.target.value };
                setNewProjectData(updatedData);
              }}
            />

            <Header2>서비스 형태</Header2>
            <TextInputBox
              type="body1"
              text="서비스 형태를 선택해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, projectCategory: event.target.value };
                setNewProjectData(updatedData);
              }}
            />
            <Header2>프로젝트 상태</Header2>
            <TextInputBox
              type="body1"
              text="프로젝트 현재 상태를 선택해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, projectStatus: event.target.value };
                setNewProjectData(updatedData);
              }}
            />

            <Header2>프로젝트 기간</Header2>
            <TextInputBox
              type="body1"
              text="기간을 선택해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, projectPeriod: event.target.value };
                setNewProjectData(updatedData);
              }}
            />

            <Header2>사용된 기술 스택</Header2>
            <TextInputBox
              type="body1"
              text="사용된 기술 스택을 선택해주세요"
              onChange={(event) => {
                const updatedData = { ...newProjectData, projectTechStack: event.target.value };
                setNewProjectData(updatedData);
              }}
            />
          </GridBox>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>
          <Editor
            environmentColor="dark"
            placeholder="프로젝트 설명을 입력해주세요"
            defaultFontColor="white"
            defaultFontSize="1.2rem"
            ref={editorRef}
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

        {mutation[1].isLoading ? (
          'updating...'
        ) : (
          <ButtonBox text="프로젝트 발행하기" type="large" onClick={handlePublish} />
        )}
      </Section>
    </Inner>
  );
};

export default ProjectPublish;
