/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import ko from 'date-fns/locale/ko';
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
  DateRanges,
  CustomSelect,
  StackInputContainer,
  StackInput2,
} from './component';
import {
  updateProjectCrew,
  useDateRange,
  useDateRanges,
  useFileImageUpload,
  useImageUpload,
  useStackTags,
  useTeamInfoBoxes,
  validateProjectData,
} from './hook';
import { useFileUploadMutation } from '../../../store/controller/commonController';
import { Crews, ProjectInfo, initialProjectData } from '../../../types/globalType';
import { useCreatePublishMutation } from '../../../store/controller/projectController';
import { useGetMyClubQuery } from '../../../store/controller/clubController';
import { SelectBoxDropBox } from '../component';

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
  const { formattedDateRange, handleDateRangeChange } = useDateRanges();
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
      navigate('/project');
      // console.log(data);
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
      navigate('/project/publish');
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const imageUrl = await Fileupload(Fileimage);
      const otherData = updateProjectData(Object.keys(data), data);
      const techStacks = StackTags.map((tag) => ({ name: tag.name }));
      const crewData = updateProjectCrew(teamInfoBoxes, otherData);
      otherData.projectCrew = crewData;
      otherData.projectTechStack = techStacks;
      otherData.projectPeriod = formattedDateRange;
      otherData.imageUrl = imageUrl;

      const errorMessageId = validateProjectData(otherData);
      if (errorMessageId) {
        const errorMessageElement = document.getElementById(errorMessageId);
        if (errorMessageElement) {
          errorMessageElement.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      await doAsyncWork(otherData);
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
    }
  };

  return (
    <Inner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inner>
          <Banner />
          <Header1>프로젝트 발행페이지</Header1>
          <ContainerComponent id="ImageContainer">
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

            <Section gap="0.8">
              <TextInputBox
                type="header1"
                text="제목을 입력해주세요"
                size={40}
                max={20}
                inputType="text"
                register={register('projectName')}
              />
              <TextInputBox
                type="body2"
                text="소제목을 입력해주세요"
                size={40}
                max={20}
                inputType="text"
                register={register('projectDescription')}
              />
            </Section>
          </ContainerComponent>
          <ContainerComponent id="SummaryContainer">
            <Header1>프로젝트 요약</Header1>
            <GridBox>
              <Header2>소속 클럽</Header2>
              <Controller
                name="belongedClubId"
                control={control}
                defaultValue="0"
                rules={{ required: true }}
                render={({ field }) => (
                  // <SelectBox2
                  //   options={OptionData({ data }).map((option) => ({
                  //     value: option.value,
                  //     label: option.label,
                  //   }))}
                  //   value={field.value}
                  //   onChange={field.onChange}
                  //   background="#333333"
                  //   customStyle={{
                  //     color: 'white',
                  //     width: '20rem',
                  //   }}
                  // />
                  <CustomSelect
                    options={OptionData({ data }).map((option) => ({
                      value: option.value,
                      label: option.label,
                      key: option.value.toString(),
                    }))}
                    places="소속 클럽을 선택하세요"
                    value={field.value}
                    onChange={(selectedValue: any) => {
                      field.onChange(selectedValue);
                    }}
                  />
                )}
              />
              <Header2>서비스 형태</Header2>
              <Controller
                name="projectCategory"
                control={control}
                defaultValue="0"
                rules={{ required: true }}
                render={({ field }) => (
                  // <SelectBox
                  //   options={Categoryoptions.map((option) => option.value)}
                  //   value={field.value}
                  //   onChange={field.onChange}
                  //   background="#333333"
                  //   customStyle={{
                  //     color: 'white',
                  //     width: '20rem',
                  //   }}
                  // />
                  <CustomSelect
                    options={Categoryoptions.map((option) => ({
                      value: option.value,
                      label: option.label,
                      key: option.value.toString(),
                    }))}
                    places="서비스 형태를 선택하세요"
                    value={field.value}
                    onChange={(selectedValue: any) => {
                      field.onChange(selectedValue);
                    }}
                  />
                )}
              />
              <Header2>프로젝트 상태</Header2>
              <Controller
                name="status"
                control={control}
                defaultValue="1"
                rules={{ required: true }}
                render={({ field }) => (
                  // <SelectBox2
                  //   options={Stackoptions.map((option) => ({
                  //     value: option.value,
                  //     label: option.label,
                  //   }))}
                  //   value={field.value}
                  //   onChange={field.onChange}
                  //   background="#333333"
                  //   customStyle={{
                  //     color: 'white',
                  //     width: '20rem',
                  //   }}
                  // />
                  <CustomSelect
                    options={Stackoptions.map((option) => ({
                      value: option.value,
                      label: option.label,
                      key: option.value.toString(),
                    }))}
                    places="프로젝트 현재 상태를 선택하세요"
                    value={field.value}
                    onChange={(selectedValue: any) => {
                      field.onChange(selectedValue);
                    }}
                  />
                )}
              />
              <Header2>프로젝트 기간</Header2>
              <DateRanges onDateRangeChange={handleDateRangeChange} />
              {/* <DateSelector onDateRangeChange={DateRangeChange} /> */}

              <Header2>사용된 기술 스택</Header2>
              <div
                style={{
                  display: 'flex',
                  maxWidth: '80rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {StackTags.length > 0 &&
                    StackTags.map((StackTag) => {
                      return (
                        <button
                          type="button"
                          key={StackTag.id}
                          onClick={() => removeStackTag(StackTag.id)}
                        >
                          <Tag>{StackTag.name}</Tag>
                        </button>
                      );
                    })}
                  <StackInput onAddStackTag={AddStackTag} />
                </div>
              </div>
            </GridBox>
          </ContainerComponent>
        </Inner>
      </form>
      <Inner>
        <ContainerComponent id="explainContainer">
          <Header1>프로젝트 설명</Header1>
          <Editor
            environmentColor="dark"
            placeholder="프로젝트 설명을 입력해주세요"
            defaultFontColor="white"
            defaultFontSize="1.6rem"
            ref={editorRef}
          />
        </ContainerComponent>
      </Inner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inner>
          <ContainerComponent id="teamInfoContainer">
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
          <ContainerComponent id="LinkContainer">
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
    </Inner>
  );
};

export default ProjectPublish;
