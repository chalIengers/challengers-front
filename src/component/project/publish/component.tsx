/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ko from 'date-fns/locale/ko';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DateRangePicker } from 'react-date-range';
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
import { StackInputProps, TeamMember } from '../../../types/globalType';
import { extractSubstring, formatDateString } from './hook';

// 셀렉트 옵션 정의
export const Categoryoptions = [
  { value: '전체 서비스', label: '전체 서비스' },
  { value: '웹 서비스', label: '웹 서비스' },
  { value: '앱 서비스', label: '앱 서비스' },
  { value: '기타 서비스', label: '기타 서비스' },
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
      closeOnScroll
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
  const [alertShown, setAlertShown] = useState<boolean>(false);

  const changeStackTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStackTag(e.target.value);
    setAlertShown(false);
  };

  const isEmptyValue = (value: string) => {
    return !value.trim();
  };

  const addStackTag = () => {
    if (inputStackTag.length < 20) {
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
    } else if (!alertShown) {
      alert('최대 글자를 초과했습니다.');
      setAlertShown(true);
      setInputStackTag('');
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
        placeholder="스택을 입력해주세요"
        css={css`
          background: none;
          color: #fff;
          font-size: 2rem;
          letter-spacing: -0.6px;
          cursor: pointer;
          width: 80rem;
          ${theme.typography.body1}
          &::placeholder {
            color: #cbcbcb;
          }
        `}
      />
    </div>
  );
}

export function StackInput2({ onAddStackTag }: StackInputProps) {
  const [inputStackTag, setInputStackTag] = useState<string>('');
  const [isInputVisible, setInputVisible] = useState(false);

  const changeStackTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStackTag(e.target.value);
  };

  const isEmptyValue = (value: string) => {
    return !value.trim();
  };

  const addStackTag = () => {
    if (inputStackTag.length < 100) {
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
    setInputVisible(false);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={toggleInputVisibility}
        style={{
          background: 'none',
          fontSize: '2rem',
          letterSpacing: '-0.6px',
          cursor: 'pointer',
          color: '#cbcbcb',
        }}
      >
        스택을 입력해주세요 (최대 10개)
      </button>
      {isInputVisible && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 2,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0px 10px 10px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <input
            type="text"
            value={inputStackTag}
            onChange={changeStackTagInput}
            onKeyDown={onkeyDown}
            onBlur={onBlur}
          />
        </div>
      )}
    </div>
  );
}

export const StackInputContainer = ({
  onAddStackTag,
}: {
  onAddStackTag: (tag: string) => void;
}) => {
  const [newStackTag, setNewStackTag] = useState('');
  const [stackTags, setStackTags] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewStackTag(event.target.value);
  };

  const handleAddStackTag = () => {
    if (newStackTag.trim() !== '') {
      onAddStackTag(newStackTag);
      setStackTags([...stackTags, newStackTag]); // 스택 태그 추가
      setNewStackTag('');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Add Stack Tag"
        value={newStackTag}
        onChange={handleInputChange}
        style={{
          zIndex: 1,
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: 2,
          width: '100%', // 너비를 조절하여 입력 필드와 동일하게 확장
          backgroundColor: 'white',
          boxShadow: '0px 10px 10px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        {stackTags.map((tag) => (
          <div key={tag} style={{ padding: '0.5rem', color: '#000' }}>
            {tag}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleAddStackTag}
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '0.5rem 1rem',
          background: 'blue',
          color: 'white',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        Add
      </button>
    </div>
  );
};

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

export const DateRanges = ({
  onDateRangeChange,
}: {
  onDateRangeChange: (dateRange: string) => void;
}) => {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [Datestring, setDatestring] = useState('기간을 선택하세요');
  const handleSelect = (ranges: any) => {
    const formattedStartDate = formatDateString(ranges.selection.startDate.toDateString());
    const formattedEndDate = formatDateString(ranges.selection.endDate.toDateString());

    setSelectedRange([ranges.selection]);
    setDatestring(`${formattedStartDate} - ${formattedEndDate}`);

    const formattedDateRange = `${formattedStartDate} - ${formattedEndDate}`;
    onDateRangeChange(formattedDateRange);
  };
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const dateRangesRef = useRef<HTMLDivElement | null>(null);

  const handleDatePickerClick = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleGlobalClick = (event: MouseEvent) => {
    if (dateRangesRef.current && !dateRangesRef.current.contains(event.target as HTMLElement)) {
      setDatePickerVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleGlobalClick);
    return () => {
      document.removeEventListener('mousedown', handleGlobalClick);
    };
  }, []);

  return (
    <div
      ref={dateRangesRef}
      css={css`
        position: relative;
      `}
    >
      <button
        type="button"
        onClick={handleDatePickerClick}
        css={css`
          color: #cbcbcb;
          font-size: 2rem;
          letter-spacing: -0.6px;
          ${theme.typography.body1}
        `}
      >
        {Datestring}
      </button>
      {isDatePickerVisible && (
        <div
          css={css`
            position: absolute;
            z-index: 1;
            top: calc(100% + 10px); /* Adjust the spacing from the button */
            left: 0;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          `}
        >
          <DateRangePicker
            css={css`
              color: black;
            `}
            locale={ko}
            ranges={selectedRange}
            onChange={handleSelect}
          />
        </div>
      )}
    </div>
  );
};

// export const CustomSelect = ({ options }: { options: string[] }) => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [showOptions, setShowOptions] = useState(false);
//   const selectRef = useRef<HTMLDivElement | null>(null);

//   const handleOptionClick = (option: string) => {
//     setSelectedOption(option);
//     setShowOptions(false);
//   };

//   // 전역 클릭 이벤트 핸들러
//   const handleGlobalClick = (event: MouseEvent) => {
//     if (selectRef.current && !selectRef.current.contains(event.target as HTMLElement)) {
//       setShowOptions(false);
//     }
//   };

//   // 컴포넌트가 마운트되면 전역 클릭 이벤트 핸들러 등록
//   useEffect(() => {
//     document.addEventListener('mousedown', handleGlobalClick);
//     return () => {
//       document.removeEventListener('mousedown', handleGlobalClick);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'relative' }} ref={selectRef}>
//       <button
//         type="button"
//         className={`selected-option ${showOptions ? 'open' : ''}`}
//         onClick={() => setShowOptions(!showOptions)}
//         style={{ zIndex: showOptions ? 2 : 1 }}
//         css={css`
//           color: #cbcbcb;
//           font-size: 2rem;
//           letter-spacing: -0.6px;
//           ${theme.typography.body1}
//         `}
//       >
//         {selectedOption || 'Select an option'}
//       </button>
//       {showOptions && (
//         <div
//           className="options"
//           style={{
//             position: 'absolute',
//             top: '100%',
//             left: 0,
//             zIndex: 2,
//             width: '12rem',
//             padding: '2rem',
//             backgroundColor: 'white',
//           }}
//         >
//           {options.map((option) => (
//             <button
//               type="button"
//               key={option}
//               className={`option ${option === selectedOption ? 'selected' : ''}`}
//               onClick={() => handleOptionClick(option)}
//               css={css`
//                 color: #cbcbcb;
//                 font-size: 2rem;
//                 letter-spacing: -0.6px;
//                 ${theme.typography.body1}
//               `}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

interface Option {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string | number | null;
  onChange: (selectedValue: string | number | null) => void;
  places: string;
}

export const CustomSelect = ({ options, value, onChange, places }: CustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onChange(option.value);
  };

  const handleGlobalClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as HTMLElement)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleGlobalClick);
    return () => {
      document.removeEventListener('mousedown', handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(options.find((option) => option.value === value) || null);
  }, [value, options]);

  return (
    <div style={{ position: 'relative' }} ref={selectRef}>
      <button
        type="button"
        className={`custom-select-button ${showOptions ? 'open' : ''}`}
        onClick={() => setShowOptions(!showOptions)}
        style={{ zIndex: showOptions ? 2 : 1 }}
        css={css`
          color: #cbcbcb;
          font-size: 2rem;
          letter-spacing: -0.6px;
          ${theme.typography.body1}
        `}
      >
        {selectedOption ? selectedOption.label : `${places}`}
      </button>
      {showOptions && (
        <div
          className="custom-select-options"
          style={{
            position: 'absolute',
            top: '150%',
            left: 0,
            zIndex: 2,
            width: '16rem',
            padding: '2rem',
            borderRadius: '1rem',
            backgroundColor: 'white',
            boxShadow: '0px 10px 10px 10px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {options.map((option) => (
            <div key={option.value}>
              <button
                type="button"
                key={option.value}
                className={`custom-select-option ${
                  option.value === selectedOption?.value ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
                css={css`
                  font-size: 2rem;
                  margin-top: 0.5rem;
                  margin-bottom: 0.5rem;
                  letter-spacing: -0.6px;
                  color: black;
                  ${theme.typography.body1Bold}
                  &:hover {
                    color: ${theme.palette.primary[500]};
                  }
                `}
              >
                {option.label}
              </button>
              <hr
                css={css`
                  border: dashed 1px black;
                  width: 12rem;
                `}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
