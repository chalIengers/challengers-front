/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useRef, useState } from 'react';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import { ButtonBox, ContainerComponent, GridBox, TextInputBox } from '../../emotion/component';
import { Header2, Body2, Header1, Section } from '../../emotion/GlobalStyle';
import { useChangeInput } from './hook';

const ClubImage = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
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
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path
        d="M10 40L10 42.5C10 46.6421 13.3579 50 17.5 50L42.5 50C46.6421 50 50 46.6421 50 42.5L50 40M40 20L30 10M30 10L20 20M30 10L30 40"
        stroke="#8F8E8E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export const ClubLogoPreView = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDivClick = () => {
    if (selectedFile) {
      console.log('파일 있음');
    } else {
      console.log('파일 없음');
    }
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
        <ClubImage onClick={handleDivClick} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          css={css`
            display: none;
          `}
        />
        <Body2>
          클럽에서 사용되는 로고를 등록해주세요
          <br /> 로고는 흰색 PNG 파일을 추천드리고 있어요
        </Body2>
      </div>
    </Section>
  );
};

export const InputDiv = ({ text }: { text: string }) => {
  const [clubTypes, setClubTypes] = useState<string[]>([]);
  const { value, setValue, handleOnChange } = useChangeInput();

  const createDiv = (item: string, index: number) => {
    const removeDiv = () => {
      const filterClub = clubTypes.filter((type) => type !== item);
      setClubTypes(filterClub);
    };
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
        key={index}
      >
        {item}
        <button
          css={css`
            cursor: pointer;
            margin-left: 0.8rem;
          `}
          type="button"
          onClick={removeDiv}
        >
          X
        </button>
      </div>
    );
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      setClubTypes([value, ...clubTypes]);
      setValue('');
    }
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 1.6rem;
      `}
    >
      {clubTypes.map((item, index) => createDiv(item, index))}
      <TextInputBox
        type="body1"
        text={text}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export const ClubTypeBox = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clubTypes, setClubTypes] = useState<string[]>([]);
  const [clubTypesTemp, setClubTypesTemp] = useState<string[]>([]);
  const { value, setValue, handleOnChange } = useChangeInput();

  const createDiv = (item: string, index: number) => {
    const removeDiv = () => {
      const filterClub = clubTypesTemp.filter((type) => type !== item);
      setClubTypesTemp(filterClub);
    };
    return (
      <button
        css={css`
          display: flex;
          flex-direction: row;
        `}
        type="button"
        onClick={removeDiv}
        key={index}
      >
        {item}
      </button>
    );
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      setClubTypesTemp([value, ...clubTypesTemp]);
      setValue('');
    }
  };
  const handleCancelClick = () => {
    setIsOpen(false);
  };

  const handleSubmitClick = () => {
    setClubTypes(clubTypesTemp);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    console.log(clubTypesTemp.length);
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
            transform: rotate(${isOpen ? 0 : 180}deg);
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
            gap: 1.6rem;
            width: 38rem;
            height: 40rem;
            border-radius: 1.2rem;
            background: ${theme.palette.gray.white};
            padding: 2.4rem;
            color: ${theme.palette.gray.black};
          `}
        >
          <input
            css={css`
              width: 100%;
              padding: 0 0.8rem;
            `}
            placeholder={`${text} (예 : 웹 서비스)`}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
            value={value}
          />

          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 1.6rem;
              border-top: 1px solid ${theme.palette.semantic.placeholder[500]};
              border-bottom: 1px solid ${theme.palette.semantic.placeholder[500]};
              padding: 1.6rem 0.8rem;
              height: 26rem;
              ${theme.typography.body2}
              overflow-y: auto;
            `}
          >
            {clubTypesTemp.map((item, index) => createDiv(item, index))}
          </div>
          <div
            css={css`
              display: flex;
              gap: 3.2rem;
              flex: 1 0 auto;
            `}
          >
            <ButtonBox type="auto" text="취소할게요" cancel onClick={handleCancelClick} />
            <ButtonBox type="auto" text="등록할게요" onClick={handleSubmitClick} />
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * 클럽 신청서 컴포넌트
 */
export const ClubInfoInput = () => {
  return (
    <ContainerComponent>
      <Header1>클럽신청서</Header1>
      <GridBox>
        <Header2>클럽 이름</Header2>
        <TextInputBox type="body1" text="소속 클럽을 입력해주세요" />

        <Header2>클럽 형태</Header2>
        <ClubTypeBox text="클럽 형태를 입력해주세요" />

        <Header2>클럽 소개</Header2>
        <TextInputBox type="body1" text="클럽에 대한 간단한 소개 메세지를 입력해주세요" />
      </GridBox>
    </ContainerComponent>
  );
};
