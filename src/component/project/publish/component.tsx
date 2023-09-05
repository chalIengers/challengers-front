/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import theme from '../../../styles/theme';
import { Body5, Header1, Section } from '../../emotion/GlobalStyle';
import {
  InfoContainer,
  InfoDownContainer,
  InfoInput,
  InfoInput2,
  InfoUpperContainer,
  InfoUpperContainer2,
  LinkImg,
  RowContainer,
} from '../emotion/component';
import { TeamMember, TextInputBoxType, initialLink } from '../../../types/globalType';
import { extractSubstring } from './hook';
import { addLink } from '../../../store/slice/linkSlice';
import { addCrew } from '../../../store/slice/crewSlice';

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
// 모달 추가
// const addPositionOnClick = () => {
//   ModalBoxComponent.current?.style.setProperty('display', 'none');
// };
export const Inputtext = () => {
  const [position, setPosition] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
    </div>
  );
};

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

// project link을 넣어주는 inputBox
export const LinkInputBox = ({
  link,
  onLinkChange,
  register,
  index,
}: {
  link: any;
  onLinkChange: any;
  register: any;
  index: number;
}) => {
  const dispatch = useDispatch();
  const [links, setlink] = useState(initialLink);

  const regex = /^(http|https):\/\//;

  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    console.log(links);
    if (regex.test(inputValue)) {
      const extractedName = extractSubstring(inputValue) || '';
      const updatedData = { ...links, linkUrl: inputValue, name: extractedName };

      setlink(updatedData);
      setTextColor('black');
      onLinkChange(inputValue);
    } else {
      setTextColor('red');
    }
  };
  const handleInputBlur = () => {
    dispatch(addLink(links));
    console.log(links);
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
      <input
        type="text"
        placeholder="http 또는 https를 포함하는 전체 링크를 입력해주세요"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        {...register}
        css={css`
          color: ${textColor};
          ${theme.typography.body1}
        `}
      />

      <LinkImg name="notion" />
    </div>
  );
};

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

export const Labels = (props: { htmlFor: string; children: React.ReactNode }) => {
  const { htmlFor, children } = props;
  return (
    <label
      css={css`
        padding: 0.8rem;
        color: ${theme.palette.gray.white};
        background-color: ${theme.palette.primary[500]};
        border-radius: 0.4rem;
        ${theme.typography.body3Bold}
        cursor: pointer;
      `}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
export const PublishImg = (props: {
  htmlFor: string;
  imageSrc?: string | null;
  // eslint-disable-next-line no-unused-vars, react/require-default-props
  onImageDrop?: (image: File) => void;
}) => {
  const { htmlFor, imageSrc, onImageDrop } = props;

  const isValidImageFile = (file: File) => {
    const fileExtension = (file.name.split('.').pop() || '').toLowerCase();

    // 유효한 확장자 목록
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    return allowedExtensions.includes(fileExtension);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const { files } = e.dataTransfer;

    if (files.length > 0) {
      const imageFile = files[0];

      // 이미지 파일 여부 확인 (예: 확장자 또는 MIME 유형 검사)
      if (isValidImageFile(imageFile)) {
        // 이미지 파일인 경우 처리
        onImageDrop?.(imageFile);
      } else {
        // 이미지 파일이 아닌 경우 alert
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

export const TextInputBox = ({
  type,
  text,
  size,
  max,
  inputType,
  onChange,
  register,
  onKeyDown,
  value,
}: TextInputBoxType) => {
  const style = {
    header1: css`
      ${theme.typography.header1}
    `,
    body2: css`
      ${theme.typography.body2}
    `,
    body1: css`
      ${theme.typography.body1}
    `,
    border: css`
      font-size: 2rem;
      letter-spacing: -0.6px;
      border-bottom: 1px solid #cbcbcb;
    `,
  };
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        &::placeholder {
          color: #cbcbcb;
        }
        ${style[type]};
      `}
      placeholder={text}
      size={size}
      maxLength={max}
      type={inputType}
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={value}
      // onChange={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...register}
    />
  );
};

export const ChildComponent = ({
  formData,
  onDataUpdate,
  control,
}: {
  formData: any;
  onDataUpdate: any;
  control: any;
}) => {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data: any) => {
    const combinedData = {
      ...formData,
      ...data,
    };

    console.log(combinedData);
  };

  const sendDataToParent = () => {
    const data = 'This is data from the child component';
    onDataUpdate(data);
  };

  return (
    <div>
      <input {...register('test')} />
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
      <button type="button" onClick={sendDataToParent}>
        Send Data
      </button>
    </div>
  );
};

export const ChildComponent2 = ({
  formData,
  onDataUpdate,
  control,
}: {
  formData: any;
  onDataUpdate: any;
  control: any;
}) => {
  const { register, handleSubmit } = useFormContext();
  const [data, setData] = useState('test');

  return (
    <Controller
      control={control}
      name="lastName"
      render={({ field: { onChange, onBlur, value, ref } }) => <input type="text" />}
    />
  );
};

export const ChildComponent3 = ({ control }: { control: any }) => {
  return (
    <Controller
      control={control}
      name="lastName"
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <input
          type="text"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      )}
    />
  );
};

// export const TeamInfoInputBox2 = ({
//   addInfo,
//   onClick,
//   control,
// }: {
//   addInfo?: boolean;
//   onClick?: () => void;
//   control: any;
// }) => {
//   const [infoData, setInfoData] = useState<TeamMember[]>([
//     { id: 1, name: '', position: '', role: '' },
//   ]);
//   const [position, setPosition] = useState('');
//   const dispatch = useDispatch();

//   const handleAddInfo = () => {
//     const newMember: TeamMember = { id: infoData.length + 1, name: '', position: '', role: '' };
//     setInfoData([...infoData, newMember]);
//   };
//   const handleConfirm = () => {
//     const newData = infoData.map(({ id, ...rest }) => rest);
//     console.log(newData);
//     dispatch(addCrew(newData));
//   };
//   return (
//     <div
//       onClick={onClick}
//       onKeyDown={(e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//           onClick?.();
//         }
//       }}
//       role="button"
//       tabIndex={0}
//     >
//       <InfoContainer>
//         <InfoUpperContainer>
//           <Controller
//             control={control}
//             name="position"
//             render={({ field: { onChange, value } }) => (
//               <InfoInput
//                 placeholder="역할을 선택해주세요"
//                 large
//                 value={value}
//                 onChange={(e) => {
//                   onChange(e.target.value);
//                 }}
//               />
//             )}
//           />
//         </InfoUpperContainer>

//         <InfoDownContainer>
//           <Section gap="0.8">
//             {infoData.map((item, index) => (
//               <Section key={item.id} gap="0.8">
//                 <Controller
//                   control={control}
//                   name="name"
//                   render={({ field: { onChange, value } }) => (
//                     <InfoInput
//                       placeholder="이름을 입력해주세요"
//                       large
//                       value={value}
//                       onChange={(e) => {
//                         onChange(e.target.value);
//                       }}
//                     />
//                   )}
//                 />
//                 <Controller
//                   control={control}
//                   name="role"
//                   render={({ field: { onChange, value } }) => (
//                     <InfoInput
//                       placeholder="어떤 역할을 했나요?"
//                       value={value}
//                       onChange={(e) => {
//                         onChange(e.target.value);
//                       }}
//                     />
//                   )}
//                 />
//               </Section>
//             ))}
//             {!addInfo && (
//               <Body5
//                 onClick={handleAddInfo}
//                 style={css`
//                   ${theme.typography.body2};
//                   color: ${theme.palette.primary[500]};
//                   text-decoration: ${theme.palette.primary[500]} 0.25rem solid underline;
//                   text-underline-offset: 0.5rem;
//                   :hover {
//                     cursor: pointer;
//                   }
//                 `}
//               >
//                 해당 포지션에 팀원을 더 추가하고 싶어요
//               </Body5>
//             )}
//             <button onClick={handleConfirm} type="button">
//               확인
//             </button>
//           </Section>
//         </InfoDownContainer>

//         <Overlay addInfo={addInfo} />
//       </InfoContainer>
//     </div>
//   );
// };

// TeamInfoInputBox.defaultProps = { addInfo: false };

// export const TeamInfoInputBox2 = ({
//   addInfo,
//   onClick,
//   control,
//   index,
// }: {
//   addInfo?: boolean;
//   onClick?: () => void;
//   control: any;
//   index: number;
// }) => {
//   const fieldData = control.fields[index];
//   const handleConfirm = () => {
//     const { name, role, position } = fieldData;

//     const newData = { name, role, position };
//     console.log(newData);
//   };

//   return (
//     <InfoContainer>
//       <InfoUpperContainer>
//         <Controller
//           control={control}
//           name={`projectCrew[${index}].position`}
//           render={({ field: { onChange, value } }) => (
//             <InfoInput
//               placeholder="역할을 선택해주세요"
//               large
//               value={value}
//               onChange={(e) => {
//                 onChange(e.target.value);
//               }}
//             />
//           )}
//         />
//       </InfoUpperContainer>

//       <InfoDownContainer>
//         <Section gap="0.8">
//           <Section key={index} gap="0.8">
//             <Controller
//               control={control}
//               name={`projectCrew[${index}].name`}
//               render={({ field: { onChange, value } }) => (
//                 <InfoInput
//                   placeholder="이름을 입력해주세요"
//                   large
//                   value={value}
//                   onChange={(e) => {
//                     onChange(e.target.value);
//                   }}
//                 />
//               )}
//             />
//             <Controller
//               control={control}
//               name={`projectCrew[${index}].role`}
//               render={({ field: { onChange, value } }) => (
//                 <InfoInput
//                   placeholder="어떤 역할을 했나요?"
//                   value={value}
//                   onChange={(e) => {
//                     onChange(e.target.value);
//                   }}
//                 />
//               )}
//             />
//           </Section>
//           {!addInfo && (
//             <Body5
//               style={css`
//                 ${theme.typography.body2};
//                 color: ${theme.palette.primary[500]};
//                 text-decoration: ${theme.palette.primary[500]} 0.25rem solid underline;
//                 text-underline-offset: 0.5rem;
//                 :hover {
//                   cursor: pointer;
//                 }
//               `}
//             >
//               해당 포지션에 팀원을 더 추가하고 싶어요
//             </Body5>
//           )}
//           <button onClick={handleConfirm} type="button">
//             확인
//           </button>
//         </Section>
//       </InfoDownContainer>

//       <Overlay addInfo={addInfo} />
//     </InfoContainer>
//   );
// };

// TeamInfoInputBox.defaultProps = { addInfo: false };

export const TeamInfoInputBox2 = ({
  addInfo,
  onClick,
}: {
  addInfo?: boolean;
  onClick?: () => void;
}) => {
  return (
    <InfoContainer>
      <InfoUpperContainer2>
        <InfoInput placeholder="역할을 선택해주세요" large color={`${theme.palette.gray.white}`} />
        <button type="button">
          <img src="/img/close.png" alt="Close Icon" />
        </button>
      </InfoUpperContainer2>

      <InfoDownContainer>
        <Section gap="0.8">
          <InfoInput placeholder="이름을 입력해주세요" large />
          <InfoInput placeholder="어떤 역할을 했나요?" />

          {!addInfo && (
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
              onClick={onClick}
            >
              해당 포지션에 팀원을 더 추가하고 싶어요
            </Body5>
          )}
        </Section>
      </InfoDownContainer>

      <Overlay addInfo={addInfo} onClick={onClick} />
    </InfoContainer>
  );
};

TeamInfoInputBox.defaultProps = { addInfo: false };

export const LinkInputBox2 = ({
  control,
  indexs,
  remove,
  onExtractedNameChange, // 상위 컴포넌트로 데이터를 전달할 콜백 함수
}: {
  control?: any;
  indexs?: any;
  remove?: (index: number) => void;
  onExtractedNameChange: (newValue: string) => void; // 콜백 함수 타입 정의
}) => {
  const regex = /^(http|https):\/\//;

  const [textColor, setTextColor] = useState('black');
  const { setValue } = useForm();
  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      const extractedName = extractSubstring(inputValue) || '';

      setTextColor('black');
    } else {
      setTextColor('red');
    }
  };
  const onChangeForRole = (newValue: any) => {
    // projectCrew[${indexs}].role 필드의 값을 newValue로 업데이트
    setValue(`projectCrew[${indexs}].name`, newValue);
    onExtractedNameChange(newValue);
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

              const inputValue = e.target.value;
              if (regex.test(inputValue)) {
                const extractedName = extractSubstring(inputValue) || '';
                setTextColor('black');
                onChangeForRole(extractedName);
              } else {
                setTextColor('red');
              }
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
          <button type="button" onClick={() => remove(indexs)} style={{ color: 'black' }}>
            <img src="/img/close.png" alt="Close Icon" />
          </button>
          <LinkImg name="notion" />
        </div>
      ) : (
        <LinkImg name="notion" />
      )}
    </div>
  );
};

export const StackInput = () => {
  const [inputHashTag, setInputHashTag] = useState('');
  const [hashTags, setHashTags] = useState<string[]>([]);

  const changeHashTagInput = (e: any) => {
    setInputHashTag(e.target.value);
    console.log(inputHashTag);
  };

  const onkeyDown = (e: any) => {
    if (e.code !== 'Enter') return;
    e.preventDefault();
    console.log('테스트');
  };

  const isEmptyValue = (value: any) => {
    if (!value.length) {
      return true;
    }
    return false;
  };

  const addHashTag = (e: any) => {
    const allowedCommand = ['Comma', 'Enter', 'Space'];
    if (!allowedCommand.includes(e.code)) return;

    if (isEmptyValue(e.target.value.trim())) {
      setInputHashTag('');
      return;
    }

    let newHashTag = e.target.value.trim();
    if (newHashTag.endsWith(',')) {
      newHashTag = newHashTag.slice(0, newHashTag.length - 1);
    }

    setHashTags((prevHashTags) => {
      return [...prevHashTags, newHashTag]; // 배열로 유지
    });

    setInputHashTag('');
  };

  return <div></div>;
};
