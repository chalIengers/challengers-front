/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import theme from '../../../styles/theme';
import { Body5, Header1, Section } from '../../emotion/GlobalStyle';
import {
  InfoContainer,
  InfoDownContainer,
  InfoInput2,
  InfoUpperContainer,
  LinkImg,
  RowContainer,
  imageNames,
} from '../emotion/component';
import { StackInputProps, StackTagInputProps, TeamMember } from '../../../types/globalType';
import { extractSubstring } from './hook';

// 셀렉트 옵션 정의
export const Categoryoptions = [
  { value: '전체 서비스', label: '옵션 1' },
  { value: '웹 서비스', label: '옵션 2' },
  { value: '앱 서비스', label: '옵션 3' },
  { value: '기타 서비스', label: '옵션 3' },
];

export const Stackoptions = [
  { value: 'MAINTENANCE', label: '서비스 점검' },
  { value: 'ACTIVE', label: '서비스 진행 중' },
  { value: 'INACTIVE', label: '서비스 종료' },
];

export const Overlay = ({ addInfo, onClick }: { addInfo: boolean | undefined; onClick?: any }) => {
  if (!addInfo) {
    return null;
  }

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.4rem;
        background: rgba(73, 73, 73, 0.6);
        text-decoration: underline;
        cursor: pointer;
      `}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Header1>포지션 추가</Header1>
    </div>
  );
};

/**
 * 팀원 infobox
 */
export const TeamInfoInputBox = ({
  addInfo,
  onClick,
  onRemove,
  onInfoChange,
  infoData,
}: {
  addInfo?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  onInfoChange?: (newData: TeamMember[]) => void;
  infoData: TeamMember[];
}) => {
  const [position, setPosition] = useState('');

  const handleAddInfo = () => {
    // 이름과 역할 모두 작성되지 않았을 때
    if (infoData.some((member) => member.name === '' || member.role === '')) {
      alert('이름과 역할을 모두 작성해주세요.');
    } else {
      const newMember: TeamMember = { id: infoData.length + 1, name: '', position: '', role: '' };
      if (onInfoChange) {
        onInfoChange([...infoData, newMember]);
      }
    }
  };

  const handleDeleteInfo = (index: number) => {
    const updatedData = [...infoData];
    updatedData.splice(index, 1);
    if (onInfoChange) {
      onInfoChange(updatedData);
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <InfoContainer>
        <InfoUpperContainer>
          <RowContainer gap="3.2rem">
            <InfoInput2
              placeholder="역할을 선택해주세요"
              large
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              color={`${theme.palette.gray.white}`}
            />
            <button type="button" onClick={onRemove}>
              <img src="/img/close.png" alt="Close Icon" />
            </button>
          </RowContainer>
        </InfoUpperContainer>

        <InfoDownContainer>
          <Section gap="0.8">
            {infoData.map((item, index) => (
              <Section key={item.id} gap="0.8">
                <RowContainer gap="2.4rem">
                  <InfoInput2
                    placeholder="이름을 입력해주세요"
                    large
                    value={item.name}
                    onChange={(e) => {
                      const updatedData = [...infoData];
                      updatedData[index].name = e.target.value;
                      updatedData[index].position = position;
                      if (onInfoChange) {
                        onInfoChange(updatedData);
                      }
                    }}
                  />
                  <button type="button" onClick={() => handleDeleteInfo(index)}>
                    <img src="/img/close.png" alt="Close Icon" />
                  </button>
                </RowContainer>

                <InfoInput2
                  placeholder="어떤 역할을 했나요?"
                  value={item.role}
                  onChange={(e) => {
                    const updatedData = [...infoData];
                    updatedData[index].role = e.target.value;
                    if (onInfoChange) {
                      onInfoChange(updatedData);
                    }
                  }}
                />
              </Section>
            ))}
            {!addInfo && (
              <Body5
                onClick={handleAddInfo}
                style={css`
                  ${theme.typography.body2};
                  color: ${theme.palette.primary[500]};
                  text-decoration: ${theme.palette.primary[500]} 0.25rem solid underline;
                  text-underline-offset: 0.5rem;
                  :hover {
                    cursor: pointer;
                  }
                `}
              >
                해당 포지션에 팀원을 더 추가하고 싶어요
              </Body5>
            )}
          </Section>
        </InfoDownContainer>

        <Overlay addInfo={addInfo} />
      </InfoContainer>
    </div>
  );
};

TeamInfoInputBox.defaultProps = { addInfo: false };

export const labelStyle = css`
  padding: 0.8rem;
  color: ${theme.palette.gray.white};
  background-color: ${theme.palette.primary[500]};
  border-radius: 0.4rem;
  ${theme.typography.body3Bold}
  cursor: pointer;
`;

export const SecretInput = ({
  name,
  index,
  onClick,
}: {
  name: string;
  index: number;
  onClick: any;
}) => {
  return (
    <div>
      <input name={name} style={{ display: 'none' }} />
      <button onClick={() => onClick(index)} type="button">
        테스트
      </button>
    </div>
  );
};

// 이미지 선택 컴포넌트
export const PublishImg = (props: {
  htmlFor: string;
  imageSrc?: string | null;
  // eslint-disable-next-line no-unused-vars, react/require-default-props
  onImageDrop?: (image: File) => void;
}) => {
  const { htmlFor, imageSrc, onImageDrop } = props;

  const isValidImageFile = (file: File) => {
    const fileExtension = (file.name.split('.').pop() || '').toLowerCase();

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    return allowedExtensions.includes(fileExtension);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const { files } = e.dataTransfer;

    if (files.length > 0) {
      const imageFile = files[0];

      if (isValidImageFile(imageFile)) {
        onImageDrop?.(imageFile);
      } else {
        alert('이미지 파일 형식이 아닙니다.');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };
  return (
    <label
      css={css`
        width: 104rem;
        height: 48rem;
        background-color: #404040;
        border-radius: 1.2rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        gap: 1.6rem;
      `}
      htmlFor={htmlFor}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {imageSrc ? (
        <img
          css={css`
            width: 104rem;
            height: 48rem;
            border-radius: 1.2rem;
          `}
          src={imageSrc}
          alt="프로젝트 이미지"
        />
      ) : (
        <>
          <img src="/img/upload.png" alt="업로드 이미지" />
          <p>
            클릭하여 업로드 하거나 <br />
            이미지를 드래그 앤 드롭하세요.
          </p>
        </>
      )}
    </label>
  );
};

export const LinkInputBox2 = ({
  control,
  indexs,
  remove,
  onExtractedNameChange,
}: {
  control?: any;
  indexs?: any;
  remove?: (index: number) => void;
  onExtractedNameChange: (newValue: string) => void;
}) => {
  const regex = /^(http|https):\/\//;

  const [textColor, setTextColor] = useState('black');
  const { setValue } = useForm();
  const [selectedImage, setSelectedImage] = useState<string>('other');

  const onChangeForRole = (newValue: string) => {
    const lowerValue = newValue.toLowerCase();
    setSelectedImage(imageNames[lowerValue] || 'other');

    setValue(`projectCrew[${indexs}].name`, newValue);
    onExtractedNameChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (regex.test(inputValue)) {
      const extractedName = extractSubstring(inputValue) || '';
      setTextColor('black');
      onChangeForRole(extractedName);
    } else {
      setTextColor('red');
    }
  };

  const handleRemove = () => {
    if (remove && indexs !== 0) {
      remove(indexs);
    }
  };

  return (
    <div
      css={css`
        width: 104rem;
        border-radius: 1.2rem;
        border: 1px solid black;
        background: ${theme.palette.gray.white};
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4rem;
        align-items: center;
        padding: 1.8rem;
      `}
    >
      <Controller
        control={control}
        name={`projectLink[${indexs}].linkUrl`}
        defaultValue=""
        rules={{
          required: true,
          // validate: (value) => {
          //   if (!value.startsWith('http://') && !value.startsWith('https://')) {
          //     alert('URL은 http:// 또는 https://로 시작해야 합니다.');
          //     return 'URL은 http:// 또는 https://로 시작해야 합니다.';
          //   }
          //   if (!value.endsWith('.com')) {
          //     alert('URL은 .com으로 끝나야 합니다.');
          //     return 'URL은 .com으로 끝나야 합니다.';
          //   }
          //   return true;
          // },
        }}
        render={({ field: { onChange, value } }) => (
          <input
            type="text"
            placeholder="http 또는 https를 포함하는 전체 링크를 입력해주세요"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              handleInputChange(e);
            }}
            css={css`
              color: ${textColor};
              ${theme.typography.body1}
            `}
          />
        )}
      />
      {indexs !== 0 && remove ? (
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          <button type="button" onClick={handleRemove} style={{ color: 'black' }}>
            <img src="/img/close.png" alt="Close Icon" />
          </button>
          <LinkImg name={selectedImage} />
        </div>
      ) : (
        <LinkImg name={selectedImage} />
      )}
    </div>
  );
};

// 날짜 정의 컴포넌트
export const DateSelector = ({
  onDateRangeChange,
}: {
  onDateRangeChange: (dateRange: string) => void;
}) => {
  const [dateRange, setDateRange] = useState<null[] | [Date | null, Date | null]>([null, null]);

  const [startDate, endDate] = dateRange;

  const handleDateChange = (update: [Date | null, Date | null]) => {
    if (!update[0]) {
      setDateRange([null, null]);
      onDateRangeChange('');
    } else {
      setDateRange(update);
      onDateRangeChange(
        `${update[0]?.toLocaleDateString()} - ${
          update[1]?.toLocaleDateString() || update[0]?.toLocaleDateString()
        }`,
      );
    }
  };

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      locale={ko}
      showPopperArrow={false}
      placeholderText="시작 날짜를 선택하세요"
      onChange={handleDateChange}
      css={css`
        background: none;
        color: #fff;
        font-size: 2rem;
        letter-spacing: -0.6px;
        cursor: pointer;
        ${theme.typography.body1}
        &::placeholder {
          color: #cbcbcb;
        }
      `}
      withPortal
    />
  );
};

// 기술 스택 컴포넌트
export function StackInput({ onAddStackTag }: StackInputProps) {
  const [inputStackTag, setInputStackTag] = useState<string>('');

  const changeStackTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStackTag(e.target.value);
  };

  const isEmptyValue = (value: string) => {
    return !value.trim();
  };

  const addStackTag = () => {
    if (inputStackTag.length < 10) {
      if (isEmptyValue(inputStackTag)) {
        setInputStackTag('');
        return;
      }

      let newStackTag = inputStackTag.trim();
      const regExp = /[{}[\]/?.;:|)*~`!^_+<>@#$%&\\=('"]/g;
      if (regExp.test(newStackTag)) {
        newStackTag = newStackTag.replace(regExp, '');
      }
      if (newStackTag.endsWith(',')) {
        newStackTag = newStackTag.slice(0, newStackTag.length - 1);
      }

      if (isEmptyValue(newStackTag)) return;

      onAddStackTag(newStackTag);

      setInputStackTag('');
    } else {
      alert('10개 이상 불가능');
    }
  };

  const onkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedCommand = [' ', 'Enter', ','];
    if (allowedCommand.includes(e.key)) {
      e.preventDefault();
      addStackTag();
    }
  };
  const onBlur = () => {
    addStackTag();
  };
  return (
    <div>
      <input
        type="text"
        value={inputStackTag}
        onChange={changeStackTagInput}
        onKeyDown={onkeyDown}
        onBlur={onBlur}
        placeholder="스택을 입력해주세요 (최대 10개)"
        css={css`
          background: none;
          color: #fff;
          font-size: 2rem;
          letter-spacing: -0.6px;
          cursor: pointer;
          ${theme.typography.body1}
          &::placeholder {
            color: #cbcbcb;
          }
        `}
      />
    </div>
  );
}

export const OptionData = ({ data }: { data: any }) => {
  const [options, setOptions] = useState([{ value: 0, label: '소속 클럽 없음' }]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const updatedOptions = [
        ...options,
        ...data.map((item: any) => ({
          value: item.id.toString(),
          label: item.name,
        })),
      ];
      setOptions(updatedOptions);
    }
  }, [data]);

  return options;
};
