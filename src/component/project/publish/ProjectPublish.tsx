/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { v4 } from 'uuid';
import { Editor } from 'editor_likelion';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Tag,
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  TextInputBox,
  TagList,
  FlexWrapContainer,
  SelectBox,
  SelectBox2,
} from '../../emotion/component';
import { selectUser } from '../../../store/slice/userSlice';
import { Header1, Header2, Inner, Section } from '../../emotion/GlobalStyle';
import {
  PublishImg,
  LinkInputBox2,
  TeamInfoInputBox,
  DateSelector,
  Categoryoptions,
  Stackoptions,
  OptionData,
  StackInput,
} from './component';
import {
  updateProjectCrew,
  useDateRange,
  useFileImageUpload,
  useImageUpload,
  useStackTags,
  useTeamInfoBoxes,
} from './hook';
import { useFileUploadMutation } from '../../../store/controller/commonController';
import { Crews, ProjectInfo, initialProjectData } from '../../../types/globalType';
import { useCreatePublishMutation } from '../../../store/controller/projectController';
import { useGetMyClubQuery } from '../../../store/controller/clubController';

const ProjectPublish = () => {
  const navigate = useNavigate();
  const [newProjectData, setNewProjectData] = useState<ProjectInfo>(initialProjectData);

  const { accessToken } = useSelector(selectUser);

  const { data } = useGetMyClubQuery({ accessToken });
  const [Image] = useFileUploadMutation();
  const mutation = useCreatePublishMutation();

  const { imageSrc, uploadImage } = useImageUpload();
  const { Fileimage, Fileupload, handleImageChange } = useFileImageUpload({
    Image,
    uploadImage,
  });

  const { DateRange, DateRangeChange } = useDateRange('');
  const { StackTags, AddStackTag, removeStackTag } = useStackTags();
  const { teamInfoBoxes, handleInfoChange, handleAddInfoBox, handleDeleteInfoBox } =
    useTeamInfoBoxes();

  const { register, handleSubmit, control, setValue } = useForm();

  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: 'projectLink',
  });
  const [Name, setName] = useState('http://notion.com');
  const NameChange = (newValue: any, index: number) => {
    setName(newValue);
    setValue(`projectLink[${index}].name`, newValue);
  };

  const updateProjectData = (fieldNames: string[], data: ProjectInfo): ProjectInfo => {
    return {
      ...newProjectData,
      ...data,
    };
  };

  const editorRef = useRef(null);
  const handlePublish = async () => {
    if (editorRef.current) {
      const test = (editorRef.current as HTMLBodyElement).innerHTML;

      setNewProjectData((prevData) => ({
        ...prevData,
        projectDetail: test,
      }));
    }
  };

  const doAsyncWork = async (data: any) => {
    try {
      await mutation[0]({ accessToken, newProjectData: data });
      // console.log(data);
      navigate('/project');
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
      navigate('/project/publish');
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const imageUrl = await Fileupload(Fileimage);
      const otherData = updateProjectData(Object.keys(data), data);
      const crewData = updateProjectCrew(teamInfoBoxes, otherData);
      const techStacks = StackTags.map((tag) => ({ name: tag }));
      otherData.projectTechStack = techStacks;
      otherData.projectCrew = crewData;
      otherData.projectPeriod = DateRange;
      otherData.imageUrl = imageUrl;
      await doAsyncWork(otherData);
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Inner>
        <Banner />
        <Header1>프로젝트 발행페이지</Header1>
        <ContainerComponent>
          <PublishImg htmlFor="fileInput" imageSrc={imageSrc} onImageDrop={handleImageChange} />
          <input
            type="file"
            id="fileInput"
            accept="image/png, image/jpeg, image/jpg, image/bmp"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              if (file && !file.type.includes('image/')) {
                alert('이미지 파일 형식이 아닙니다.');
                e.target.value = '';
                return;
              }
              handleImageChange(file);
            }}
            css={css`
              display: none;
            `}
          />
          <TagList>
            <Tag>서비스 형태가 들어가요</Tag>
            <Tag>소속 클럽 이름이 들어가요</Tag>
          </TagList>

          <Section gap="0.8">
            <TextInputBox
              type="header1"
              text="제목을 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('projectName', {
                required: true,
              })}
            />
            <TextInputBox
              type="body2"
              text="소제목을 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('projectDescription', {
                required: true,
              })}
            />
          </Section>
        </ContainerComponent>
        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>
          <GridBox>
            <Header2>소속 클럽</Header2>
            <Controller
              name="belongedClubId"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <SelectBox2
                  options={OptionData({ data }).map((option) => ({
                    value: option.value,
                    label: option.label,
                  }))}
                  value={field.value}
                  onChange={field.onChange}
                  background="#333333"
                  customStyle={{
                    color: 'white',
                    width: '20rem',
                  }}
                />
              )}
            />
            <Header2>서비스 형태</Header2>
            <Controller
              name="projectCategory"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <SelectBox
                  options={Categoryoptions.map((option) => option.value)}
                  value={field.value}
                  onChange={field.onChange}
                  background="#333333"
                  customStyle={{
                    color: 'white',
                    width: '20rem',
                  }}
                />
              )}
            />
            <Header2>프로젝트 상태</Header2>
            <Controller
              name="status"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <SelectBox2
                  options={Stackoptions.map((option) => ({
                    value: option.value,
                    label: option.label,
                  }))}
                  value={field.value}
                  onChange={field.onChange}
                  background="#333333"
                  customStyle={{
                    color: 'white',
                    width: '20rem',
                  }}
                />
              )}
            />
            <Header2>프로젝트 기간</Header2>
            <DateSelector onDateRangeChange={DateRangeChange} />
            <Header2>사용된 기술 스택</Header2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              {StackTags.length > 0 &&
                StackTags.map((StackTag) => {
                  return (
                    <button type="button" key={v4()} onClick={() => removeStackTag(StackTag)}>
                      <Tag>{StackTag}</Tag>
                    </button>
                  );
                })}
              <StackInput onAddStackTag={AddStackTag} />
            </div>
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
            {teamInfoBoxes.map((box) => (
              <TeamInfoInputBox
                key={box.id}
                addInfo={box.addInfo}
                onRemove={() => handleDeleteInfoBox(box.id)}
                onInfoChange={(newData) => handleInfoChange(newData, box.id)}
                infoData={box.infoData}
              />
            ))}
            <TeamInfoInputBox
              onClick={handleAddInfoBox}
              addInfo
              infoData={[{ id: 1, name: '', position: '', role: '' }]}
            />
          </FlexWrapContainer>
        </ContainerComponent>
        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>
          <LinkInputBox2
            control={control}
            indexs={0}
            remove={() => removeLink(0)}
            onExtractedNameChange={(newValue) => NameChange(newValue, 0)}
          />
          {linkFields.map(
            (field, index) =>
              index !== 0 && (
                <div key={field.id}>
                  <LinkInputBox2
                    control={control}
                    indexs={index}
                    remove={() => removeLink(index)}
                    onExtractedNameChange={(newValue) => NameChange(newValue, index)}
                  />
                  <input type="hidden" {...register(`projectLink[${index}].name`)} />
                </div>
              ),
          )}
          <button type="button" onClick={() => appendLink({ linkUrl: '', name: Name })}>
            프로젝트 링크를 더 추가하고 싶어요
          </button>
        </ContainerComponent>
        <ButtonBox text="프로젝트 발행하기" type="large" submit onClick={handlePublish} />
      </Inner>
    </form>
  );
};

export default ProjectPublish;
