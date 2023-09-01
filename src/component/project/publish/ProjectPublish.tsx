/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import { css } from '@emotion/react';
import { Editor } from 'editor_likelion';
import { useSelector } from 'react-redux';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
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
import { Body5, Header1, Header2, Inner, Section } from '../../emotion/GlobalStyle';
import {
  LinkInputBox,
  TeamInfoInputBox,
  Labels,
  PublishImg,
  SecretInput,
  ChildComponent,
  ChildComponent2,
  ChildComponent3,
  TeamInfoInputBox2,
  LinkInputBox2,
} from './component';
import { useImageUpload } from './hook';
import { useFileUploadMutation } from '../../../store/commonApi';
import { initialProjectData } from '../../../types/globalType';
import { selectLinks } from '../../../store/linkSlice';
import { selectCrews } from '../../../store/crewSlice';
import { useCreatePublishMutation } from '../../../store/projectController';
import {
  InfoContainer,
  InfoDownContainer,
  InfoInput,
  InfoUpperContainer,
} from '../emotion/component';
import { TeamInfoBox } from '../detail/component';
import theme from '../../../styles/theme';

const ProjectPublish = () => {
  const { imageSrc, uploadImage } = useImageUpload();
  const [newProjectData, setNewProjectData] = useState(initialProjectData);
  const [Image] = useFileUploadMutation();
  const mutation = useCreatePublishMutation();
  const editorRef = useRef(null);
  const links = useSelector(selectLinks);
  const crews = useSelector(selectCrews);
  const [teamInfoBoxes, setTeamInfoBoxes] = useState([{ id: 1, addInfo: false }]);
  const [formData, setFormData] = useState({
    Data: '',
    test: '',
  });

  const [inputHashTag, setInputHashTag] = useState('');
  const [StackTags, setHashTags] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setFormData(data);
    console.log(data);
  };

  const onkeyDown = (e: any) => {
    if (e.code !== 'Enter') return;
    e.preventDefault();
  };

  const addHashTag = (e: any) => {
    if (e.code !== 'Enter') return;

    if (isEmptyValue(e.target.value.trim())) {
      return setInputHashTag('');
    }

    const newHashTag = e.target.value;
    setHashTag(PREV);
  };

  // 하위 컴포넌트에서 데이터 가져오기
  const [data, setData] = useState('test');

  const handleChildData = (data: any) => {
    // 하위 컴포넌트로부터 데이터를 받음
    setData(data);
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projectCrew',
  });

  const {
    fields: crewInfoFields,
    append: appendCrewInfo,
    remove: removeCrewInfo,
  } = useFieldArray({
    control,
    name: 'projectCrewInfo',
  });

  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: 'projectLink',
  });

  const {
    fields: StackFields,
    append: appendStack,
    remove: removeStack,
  } = useFieldArray({
    control,
    name: 'projectTechStack',
  });
  //
  const [projectLinks, setProjectLinks] = useState(['']); // 주소를 저장하는 배열

  const handleLinkChange = (index: any, newValue: any) => {
    // 주소 변경 이벤트 핸들러
    const updatedLinks = [...projectLinks];
    updatedLinks[index] = newValue;
    setProjectLinks(updatedLinks);
  };
  const handleImageChange = (File: File | null) => {
    if (File) {
      uploadImage(File);
    }
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
      console.log(crews);
      console.log(links);
    }
  };

  const [extractedName, setExtractedName] = useState('하위 컴포넌트 데이터');
  const handleExtractedNameChange = (newValue: any, index: number) => {
    // extractedName 상태를 업데이트
    setExtractedName(newValue);

    // setValue를 사용하여 레지스터에 데이터 설정
    setValue(`projectLink[${index}].role`, newValue);

    console.log(`출력되는 값은 ${newValue}`);
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
            accept="image/png, image/jpeg, image/jpg"
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
            </Labels>
          </TagList>

          <Section gap="0.8">
            <TextInputBox
              type="header1"
              text="제목을 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('Title', {
                required: true,
              })}
            />
            <TextInputBox
              type="body2"
              text="소제목을 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('Describe', {
                required: true,
              })}
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
              size={40}
              max={20}
              inputType="text"
              register={register('Crew', {
                required: true,
              })}
            />

            <Header2>서비스 형태</Header2>
            <TextInputBox
              type="body1"
              text="서비스 형태를 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('Service', {
                required: true,
              })}
            />

            <Header2>프로젝트 상태</Header2>

            <TextInputBox
              type="body1"
              text="프로젝트 현재 상태를 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('State', {
                required: true,
              })}
            />

            <Header2>프로젝트 기간</Header2>
            <TextInputBox
              type="body1"
              text="프로젝트 제작 기간을 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('Date', {
                required: true,
              })}
            />

            <Header2>사용된 기술 스택</Header2>
            <input
              type="text"
              value={hashtag}
              onChange={onChangeHashtag}
              onKeyUp={onKeyUp}
              onKeyDown={onkeydown}
              placeholder="해시태그 입력"
            />
            <TextInputBox type="body1" text="사용한 기술 스택들을 입력해주세요" inputType="text" />
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
            {fields.map((field, index) => (
              <InfoContainer key={field.id}>
                <InfoUpperContainer>
                  <InfoInput
                    placeholder="역할을 선택해주세요"
                    large
                    color={`${theme.palette.gray.white}`}
                    register={register(`projectCrew[${index}.position`, {
                      required: true,
                    })}
                  />
                </InfoUpperContainer>

                <InfoDownContainer>
                  {crewInfoFields.map((crew, crewIndex) => {
                    return (
                      <Section gap="0.8" key={crew.id}>
                        <InfoInput
                          placeholder="이름을 입력해주세요"
                          large
                          register={register(`projectCrewInfo[${index}][${crewIndex}].name`)}
                        />
                        <InfoInput
                          placeholder="어떤 역할을 했나요?"
                          register={register(`projectCrewInfo[${index}][${crewIndex}].role`)}
                        />
                      </Section>
                    );
                  })}

                  <Body5
                    style={css`
                      ${theme.typography.body2};
                      color: ${theme.palette.primary[500]};
                      text-decoration: ${theme.palette.primary[500]} 0.25rem solid underline;
                      text-underline-offset: 0.5rem;
                      :hover {
                        cursor: pointer;
                      }
                    `}
                    onClick={() => {
                      appendCrewInfo({});
                    }}
                  >
                    해당 포지션에 팀원을 더 추가하고 싶어요
                  </Body5>
                </InfoDownContainer>

                {/* <Overlay addInfo={addInfo} onClick={onClick} /> */}

                {/* <TeamInfoBox teamInfo={data[key]} /> */}
              </InfoContainer>
            ))}
            <TeamInfoInputBox2
              addInfo
              onClick={() => {
                append({ position: '' });
              }}
            />
          </FlexWrapContainer>
        </ContainerComponent>
        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>
          {/* <LinkInputBox />
            <LinkInputBox /> */}
          {/* {fields.map((field, index) => (
              <div key={field.id}>
                <input {...register(`projectLink.${index}.address`)} />
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => append({ address: '' })}>
              Add Email
            </button> */}
          {/* {linkFields.map((field, index) => (
            <div key={field.id}>
              <LinkInputBox
                link={projectLinks[index]}
                onLinkChange={(newValue: any) => handleLinkChange(index, newValue)}
                register={register(`projectLink[${index}.address]`, {
                  required: true,
                })}
                index={index}
              />
              <button type="button" onClick={() => removeLink(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => appendLink('')}>
            Add Link
          </button> */}
          <LinkInputBox2
            control={control}
            indexs={0}
            remove={() => removeLink(0)}
            onExtractedNameChange={(newValue) => handleExtractedNameChange(newValue, 0)}
          />
          {linkFields.map(
            (field, index) =>
              index !== 0 && (
                <div key={field.id}>
                  <LinkInputBox2
                    control={control}
                    indexs={index}
                    remove={() => removeLink(index)}
                    onExtractedNameChange={(newValue) => handleExtractedNameChange(newValue, index)}
                  />
                  <input type="hidden" {...register(`projectLink[${index}].role`)} />
                </div>
              ),
          )}
          <button type="button" onClick={() => appendLink({ URL: '', role: extractedName })}>
            프로젝트 링크를 더 추가하고 싶어요
          </button>
        </ContainerComponent>
        <ButtonBox text="프로젝트 발행하기" type="large" submit />
        <input type="submit" />
      </Inner>
    </form>
  );
};

export default ProjectPublish;
