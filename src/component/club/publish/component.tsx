/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import { ButtonBox } from '../../emotion/component';
import { Body2, Section } from '../../emotion/GlobalStyle';
import { setClubField } from '../../../store/slice/CreateClubSlice';
import { useImageUpload } from '../../project/publish/hook';
import { setImgFormDataType } from '../../../types/globalType';

const ImageUpload = ({ setImgFormData }: setImgFormDataType) => {
  const { imageSrc, uploadImage } = useImageUpload();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 파일 선택 onChange 함수
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!file.type.includes('image/')) {
        alert('이미지 파일 형식이 아닙니다.');
        return;
      }
      uploadImage(file);
      setImgFormData(file);
    }
  };
  // 드롭 함수
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const { files } = e.dataTransfer;
    const file = files?.[0];

    if (file) {
      if (!file.type.includes('image/')) {
        alert('이미지 파일 형식이 아닙니다.');
        return;
      }
      uploadImage(file);
      setImgFormData(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div onDrop={(e) => handleDrop(e)} onDragOver={(e) => handleDragOver(e)}>
      <button
        type="button"
        onClick={handleClick}
        css={css`
          width: 16rem;
          height: 16rem;
          border-radius: 1.2rem;
          background: ${theme.palette.gray[900]};
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        `}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageSrc}
            css={css`
              max-width: 100%;
              max-height: 100%;
            `}
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M10 40L10 42.5C10 46.6421 13.3579 50 17.5 50L42.5 50C46.6421 50 50 46.6421 50 42.5L50 40M40 20L30 10M30 10L20 20M30 10L30 40"
              stroke="#8F8E8E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png, image/bmp"
          ref={fileInputRef}
          onChange={handleFileSelect}
          css={css`
            display: none;
          `}
        />
      </button>
    </div>
  );
};

export const ClubLogoPreView = ({ setImgFormData }: setImgFormDataType) => {
  return (
    <Section gap="1.6">
      <div
        css={css`
          display: flex;
          align-items: flex-end;
          gap: 1.6rem;
          color: ${theme.palette.gray[400]};
        `}
      >
        <ImageUpload setImgFormData={setImgFormData} />
        <Body2>
          클럽에서 사용되는 로고를 등록해주세요
          <br /> 로고는 흰색 PNG 파일을 추천드리고 있어요
        </Body2>
      </div>
    </Section>
  );
};

export const ClubTypeBox = ({ text }: { text: string }) => {
  const dispatch = useDispatch();
  const clubFormList = ['웹 서비스', '앱 서비스', '기타 서비스'];

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [clubTypes, setClubTypes] = useState<string[]>([]);
  const [isToggleTemp, setIsToggleTemp] = useState<boolean[]>(Array(4).fill(false));
  const [isToggle, setToggle] = useState<boolean[]>(Array(4).fill(false));
  const clubFormText = ref.current?.innerText;

  useEffect(() => {
    if (clubFormText) {
      dispatch(setClubField({ field: 'clubForm', clubData: clubFormText }));
    }
  }, [clubFormText, dispatch]);

  const createDiv = (item: string, index: number) => {
    const toggleDiv = () => {
      setIsToggleTemp((prevDiv) =>
        prevDiv.map((prevState, i) => (i === index ? !prevState : prevState)),
      );
    };
    return (
      <button
        css={css`
          padding: 0.8rem 1.6rem;
          border-radius: 1.85rem;
          background: ${isToggleTemp[index] ? theme.palette.primary[500] : theme.palette.gray[300]};
          ${theme.typography.body2};
          color: ${isToggleTemp[index] ? theme.palette.gray.white : theme.palette.gray.black};
        `}
        type="button"
        onClick={toggleDiv}
        key={index}
      >
        {item}
      </button>
    );
  };
  const handleCancelClick = () => {
    setIsToggleTemp(isToggle);
    setIsOpen(false);
  };

  const handleSubmitClick = () => {
    const selectStates = clubFormList.filter((item, index) => {
      return isToggleTemp[index];
    });
    setClubTypes(selectStates);
    setToggle(isToggleTemp);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-items: center;
        gap: 1.6rem;
      `}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        css={css`
          display: flex;
          justify-content: flex-start;
          gap: 0.8rem;
        `}
      >
        <div
          css={css`
            color: ${theme.palette.semantic.placeholder[500]};
            ${theme.typography.body1};
          `}
          ref={ref}
        >
          {clubTypes.length
            ? clubTypes.map((item, index) => {
                if (clubTypes.length === index + 1) {
                  return `${item}`;
                }
                return `${item}, `;
              })
            : text}
        </div>
        <div
          css={css`
            transition: 0.3s;
            animation: none;
            transform: rotate(${isOpen ? 180 : 0}deg);
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
          >
            <path
              d="M1 1L7 8L13 1"
              stroke={theme.palette.semantic.placeholder[500]}
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          css={css`
            position: absolute;
            top: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 1.6rem;
            width: 36rem;
            height: 38rem;
            border-radius: 1.2rem;
            background: ${theme.palette.gray.white};
            padding: 2.4rem;
            color: ${theme.palette.gray.black};
            justify-content: space-between;
          `}
        >
          <Section gap="0.8">
            <div
              css={css`
                width: 100%;
                padding: 0 0.8rem;
              `}
            >
              클럽 형태를 하단에서 선택해주세요
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;
                padding: 1.6rem 0;
                row-gap: 1.6rem;
              `}
            >
              {clubFormList.map((item, index) => createDiv(item, index))}
            </div>
          </Section>
          <div
            css={css`
              display: flex;
              justify-items: flex-end;
              justify-content: space-between;
            `}
          >
            <ButtonBox type="modalSmall" text="취소할게요" cancel onClick={handleCancelClick} />
            <ButtonBox type="modalSmall" text="등록할게요" onClick={handleSubmitClick} />
          </div>
        </div>
      )}
    </div>
  );
};
