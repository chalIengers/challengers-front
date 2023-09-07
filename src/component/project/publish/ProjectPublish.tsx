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
import { Labels, PublishImg, LinkInputBox2, TeamInfoInputBox } from './component';
import { useImageUpload } from './hook';
import { useFileUploadMutation } from '../../../store/controller/commonController';
import {
  Crews,
  ProjectInfo,
  Stack,
  TeamMember,
  initialProjectData,
} from '../../../types/globalType';
import { useCreatePublishMutation } from '../../../store/controller/projectController';
import theme from '../../../styles/theme';
import { useGetClubListQuery, useGetMyClubQuery } from '../../../store/controller/clubController';

const ProjectPublish = () => {
  const { imageSrc, uploadImage } = useImageUpload();
  const [Fileimage, setFileimage] = useState<File | null>(null);
  const [newProjectData, setNewProjectData] = useState<ProjectInfo>(initialProjectData);

  const [Image] = useFileUploadMutation();
  const mutation = useCreatePublishMutation();

  const editorRef = useRef(null);

  // 셀렉트 옵션 제작

  const options = [
    { value: '웹서비스', label: '옵션 1' },
    { value: '소셜미디어', label: '옵션 2' },
    { value: '안드로이드', label: '옵션 3' },
  ];

  const options2 = [
    { value: 'MAINTENANCE', label: '서비스 점검' },
    { value: 'ACTIVE', label: '서비스 진행 중' },
    { value: 'INACTIVE', label: '서비스 종료' },
  ];

  const [options3, setOption3] = useState([{ value: 0, label: '소속 클럽 없음' }]);

  const { accessToken } = useSelector(selectUser);

  const { data, error, isLoading } = useGetMyClubQuery({ accessToken });

  const test = () => {
    const updatedOptions3 = [
      ...options3,
      ...data.map((item: any) => ({
        value: item.id.toString(),
        label: item.name,
      })),
    ];
    setOption3(updatedOptions3);
  };

  useEffect(() => {
    if (!isLoading && data) {
      test();
    }
  }, [isLoading, data]);

  const [datas, setDatas] = useState([]);

  const Fileupload = async (file: any): Promise<string> => {
    try {
      const resultData = await Image({ accessToken, fileData: file }).unwrap();
      console.log(resultData);

      // 이미지 업로드가 성공한 경우에만 이미지 URL 반환
      return resultData.msg;
    } catch (error) {
      console.log('이미지 업로드 실패:', error);
      return ''; // 실패한 경우 빈 문자열 반환 또는 다른 오류 처리 방식을 선택할 수 있습니다.
    }
  };

  const handleImageChange = (File: File | null) => {
    if (File) {
      uploadImage(File);
      setFileimage(File);
    }
  };

  // 팀원 구성
  const [teamInfoBoxes, setTeamInfoBoxes] = useState([
    { id: 1, addInfo: false, infoData: [{ id: 1, name: '', position: '', role: '' }] },
  ]);
  const [infoData, setinfoData] = useState<TeamMember[]>([
    { id: 1, name: '', position: '', role: '' },
  ]);

  const handleInfoChange = (newData: any, boxId: any) => {
    setTeamInfoBoxes((prevBoxes) => {
      const updatedBoxes = prevBoxes.map((box) => {
        if (box.id === boxId) {
          return { ...box, infoData: newData };
        }
        return box;
      });
      return updatedBoxes;
    });
  };

  const handleAddInfoBox = () => {
    const newId = teamInfoBoxes.length + 1;
    const newInfoBox = {
      id: newId,
      addInfo: false,
      infoData: [{ id: 1, name: '', position: '', role: '' }],
    };
    setTeamInfoBoxes([...teamInfoBoxes, newInfoBox]);
  };

  const handleDeleteInfoBox = (boxId: number) => {
    setTeamInfoBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== boxId));
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const [inputStackTag, setInputStackTag] = useState('');
  const [StackTags, setStackTags] = useState<string[]>([]);

  const changeStackTagInput = (e: any) => {
    setInputStackTag(e.target.value);
  };

  const onkeyDown = (e: any) => {
    if (e.code !== 'Enter') return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.target.value)) {
      setInputStackTag('');
    }
  };

  const isEmptyValue = (value: any) => {
    if (!value.length) {
      return true;
    }
    return false;
  };

  const addStackTag = (e: any) => {
    if (StackTags.length < 10) {
      const allowedCommand = ['Comma', 'Enter', 'Space'];
      if (!allowedCommand.includes(e.code)) {
        return;
      }

      if (isEmptyValue(e.target.value.trim())) {
        setInputStackTag('');
        return;
      }

      let newStackTag = e.target.value.trim();
      const regExp = /[{}[\]/?.;:|)*~`!^_+<>@#$%&\\=('"]/g;
      if (regExp.test(newStackTag)) {
        newStackTag = newStackTag.replace(regExp, '');
      }
      if (newStackTag.endsWith(',')) {
        newStackTag = newStackTag.slice(0, newStackTag.length - 1);
      }

      if (isEmptyValue(newStackTag)) return;

      setStackTags((prevStackTags) => {
        return [...prevStackTags, newStackTag];
      });

      setInputStackTag('');
    } else {
      alert('10개 이상 불가능');
    }
  };

  const removeStackTag = (tagToRemove: string) => {
    setStackTags((prevStackTags) => prevStackTags.filter((tag) => tag !== tagToRemove));
  };

  const handleInputBlur = () => {
    if (inputStackTag.trim() !== '') {
      console.log(inputStackTag);

      setStackTags((prevStackTags) => {
        if (prevStackTags.length < 10) {
          const newStackTag = inputStackTag.trim();
          if (newStackTag) {
            return [...prevStackTags, newStackTag];
          }
        }
        return prevStackTags;
      });

      setInputStackTag('');
      console.log(StackTags);
    }
  };

  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: 'projectLink',
  });

  const [extractedName, setExtractedName] = useState('하위 컴포넌트 데이터');
  const handleExtractedNameChange = (newValue: any, index: number) => {
    // extractedName 상태를 업데이트
    setExtractedName(newValue);

    // setValue를 사용하여 레지스터에 데이터 설정
    setValue(`projectLink[${index}].name`, newValue);
  };

  // 리액트 훅 폼 값 받아오기
  const updateProjectData = (fieldNames: string[], data: ProjectInfo): ProjectInfo => {
    return {
      ...newProjectData,
      ...data,
    };
  };

  // Crew 값 받아오기
  // 함수 파라미터와 반환값의 타입 명시
  const updateProjectCrew = (teamInfoBoxes: any[], updatedData: any) => {
    const updatedProjectCrew: Crews[] = [];

    teamInfoBoxes.forEach((teamInfo) => {
      const { infoData } = teamInfo;

      infoData.forEach((memberInfo: Crews) => {
        updatedProjectCrew.push({
          name: memberInfo.name,
          position: memberInfo.position,
          role: memberInfo.role,
        });
      });
    });

    return updatedProjectCrew;
  };

  const handlePublish = async () => {
    Fileupload(Fileimage);
    if (editorRef.current) {
      const test = (editorRef.current as HTMLBodyElement).innerHTML;

      setNewProjectData((prevData) => ({
        ...prevData,
        projectDetail: test,
      }));
    }
  };

  // 데이터를 전송하거나 다른 비동기 작업을 수행하는 함수
  const doAsyncWork = async (data: any) => {
    try {
      await mutation[0](data);

      console.log(data);
      console.log('데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
    }
  };
  const onSubmit = async (data: any) => {
    const otherData = updateProjectData(Object.keys(data), data);
    const crewData = updateProjectCrew(teamInfoBoxes, otherData);
    const techStacks: Stack[] = StackTags.map((tag) => ({
      name: tag,
    }));

    // 모든 데이터를 업데이트
    otherData.projectTechStack = techStacks;
    otherData.projectCrew = crewData;

    try {
      // 이미지 업로드를 기다리기 위해 Fileupload를 async 함수로 변경
      const imageUrl = await Fileupload(Fileimage);

      // 이미지 URL을 데이터에 추가
      otherData.imageUrl = imageUrl;

      // 모든 데이터를 포함하여 doAsyncWork 호출
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
            {newProjectData.projectCategory ? (
              <Tag>{newProjectData.projectCategory}</Tag>
            ) : (
              <Tag>서비스 형태가 들어가요</Tag>
            )}

            <Tag>소속 클럽 이름이 들어가요</Tag>
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
                  options={options3.map((option) => ({
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
            {/* <TextInputBox
              type="body1"
              text="서비스 형태를 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('projectCategory', {
                required: true,
              })}
            /> */}
            <Controller
              name="projectCategory"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <SelectBox
                  options={options.map((option) => option.value)}
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
                  options={options2.map((option) => ({
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
            <TextInputBox
              type="body1"
              text="프로젝트 제작 기간을 입력해주세요"
              size={40}
              max={20}
              inputType="text"
              register={register('projectPeriod', {
                required: true,
              })}
            />

            <Header2>사용된 기술 스택</Header2>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {StackTags.length > 0 &&
                StackTags.map((StackTag) => {
                  return (
                    <button type="button" key={v4()} onClick={() => removeStackTag(StackTag)}>
                      <Tag>{StackTag}</Tag>
                    </button>
                  );
                })}

              <input
                value={inputStackTag}
                onChange={changeStackTagInput}
                onKeyUp={addStackTag}
                onKeyDown={onkeyDown}
                onBlur={handleInputBlur}
                placeholder="스택을 입력해주세요 (최대 10개)"
                className="hashTagInput"
                css={css`
                  background: none;
                  color: #fff;
                  font-size: 2rem;
                  letter-spacing: -0.6px;
                  ${theme.typography.body1}
                  &::placeholder {
                    color: #cbcbcb;
                  }
                `}
              />
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
            <TeamInfoInputBox onClick={handleAddInfoBox} addInfo infoData={infoData} />
          </FlexWrapContainer>
        </ContainerComponent>
        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>
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
                  <input type="hidden" {...register(`projectLink[${index}].name`)} />
                </div>
              ),
          )}
          <button type="button" onClick={() => appendLink({ linkUrl: '', name: extractedName })}>
            프로젝트 링크를 더 추가하고 싶어요
          </button>
        </ContainerComponent>
        <ButtonBox text="프로젝트 발행하기" type="large" submit onClick={handlePublish} />
      </Inner>
    </form>
  );
};

export default ProjectPublish;
