/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { ButtonBox } from '../emotion/component';
import theme from '../../styles/theme';
import {
  ContainerType,
  ReturnStackProps,
  SelectBoxContainerProps,
  SelectBoxDropBoxProps,
  SelectedBoxProps,
} from '../../types/globalType';
import { Body3Bold, Body4, FlexSpaceBetweenContainer, Section } from '../emotion/GlobalStyle';
import { useTeckStackModalHook } from './hook';

/**
 * SelectBox 컴포넌트
 * @StyledSelectBox
 */

const SelectedBox = ({ children, setShowOptions, showOptions, value }: SelectedBoxProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) setShowOptions(false);
    };
    // 모달이 열려있고, 모달 외부를 클릭할 때 모달을 닫습니다.
    if (showOptions) window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showOptions, setShowOptions]);

  return (
    <div
      role="presentation"
      ref={modalRef}
      onClick={() => {
        setShowOptions((prev) => !prev);
      }}
      css={css`
        width: 11.4rem;
        position: relative;
        padding: 0.8rem 1.2rem;
        background: ${value === 'sort' ? 'black' : theme.palette.primary[500]};
        ${theme.typography.body3Bold}
        border-radius: 0.8rem;
        cursor: pointer;
        z-index: 2;

        &::before {
          content: '⌵';
          position: absolute;
          top: 1px;
          right: 8px;
          font-size: 20px;
        }
      `}
    >
      {children}
    </div>
  );
};

const OptionContainer = ({ children, showOptions }: SelectBoxContainerProps) => (
  <ul
    css={css`
      display: ${showOptions ? 'block' : 'none'};
      position: absolute;
      top: 4rem;
      left: 0;
      background-color: #fff;
      font-weight: normal;
      color: #404040;
      border-radius: 0.3rem;
      padding: 0.8rem;

      li {
        padding: 1rem 1.6rem;
        border-bottom: 0.5px solid #c8c8c8;
        transition: background-color 0.2s ease-in-out;
        :hover {
          background-color: #eee;
        }
      }
      li:last-child {
        border: none;
      }
    `}
  >
    {children}
  </ul>
);

export const SelectBoxDropBox = ({
  options,
  value,
  sortType,
  setSortType,
}: SelectBoxDropBoxProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e: any) => {
    const { innerText } = e.target;
    if (innerText !== sortType[value]) setSortType((prev) => ({ ...prev, [value]: innerText }));
  };

  return (
    <SelectedBox setShowOptions={setShowOptions} showOptions={showOptions} value={value}>
      <p>{sortType[value]}</p>
      <OptionContainer showOptions={showOptions}>
        {options?.map((option) => {
          const isSelected = option === sortType[value];
          return (
            <li
              key={option}
              onClick={handleOnChangeSelectValue}
              role="presentation"
              css={css`
                color: ${isSelected && theme.palette.primary[500]};
                font-weight: ${isSelected && 'Bold'};
              `}
            >
              {option}
            </li>
          );
        })}
      </OptionContainer>
    </SelectedBox>
  );
};

const SearchIcon = () => (
  <img
    src="/img/search.png"
    alt="검색"
    css={css`
      width: 1.6rem;
      height: 1.6rem;
    `}
  />
);

const ModalContainer = ({ children, showOptions }: SelectBoxContainerProps) => (
  <div
    role="presentation"
    onClick={(e) => {
      e.stopPropagation();
    }}
    css={css`
      display: ${showOptions ? 'flex' : 'none'};
      position: absolute;
      flex-direction: column;
      justify-content: space-between;
      top: 4rem;
      left: 0;
      background-color: #fff;
      color: #000;
      width: 36rem;
      height: 36rem;
      padding: 2.4rem;
      border-radius: 1.2rem;
      cursor: default;
    `}
  >
    {children}
  </div>
);

const InputContainer = ({ children }: ContainerType) => (
  <div
    css={css`
      position: relative;
      width: 100%;
      height: 4rem;
      border: 1px solid #d9d9d9;
      border-radius: 1.8rem;
      display: flex;
      align-items: center;
      padding: 1.6rem;
      gap: 1.6rem;
    `}
  >
    {children}
  </div>
);

const SearchResultContainer = ({ children, showOptions }: SelectBoxContainerProps) => (
  <div
    css={css`
      position: absolute;
      display: ${showOptions ? 'block' : 'none'};
      top: 4.4rem;
      left: 0;
      width: 100%;
      height: 16rem;
      padding: 1.6rem;
      background: #fff;
      border-radius: 1rem;
      border: 1px solid #f4f4f4;
      box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `}
  >
    {children}
  </div>
);

const SearchResult = ({ stack, onClick }: ReturnStackProps) => (
  <div
    role="presentation"
    onClick={onClick}
    css={css`
      cursor: pointer;
      padding: 1.2rem;
      border-radius: 1.6rem;
      :hover {
        background-color: #eee;
      }
    `}
  >
    {stack}
  </div>
);

const SelectedStackContainer = ({ children }: ContainerType) => (
  <div
    css={css`
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
      ${theme.typography.body3}
    `}
  >
    {children}
  </div>
);

const SelectedStack = ({ stack, onClick }: ReturnStackProps) => (
  <p
    css={css`
      background-color: #d9d9d9;
      padding: 1.2rem;
      border-radius: 1.6rem;
      cursor: pointer;
      &::after {
        content: '✕';
        margin-left: 0.6rem;
      }
      :hover {
        background-color: #c4c4c4;
      }
    `}
    role="presentation"
    onClick={onClick}
  >
    {stack}
  </p>
);

export const SelectBoxModal = ({ value, setSortType }: SelectBoxDropBoxProps) => {
  const {
    setShowOptions,
    showOptions,
    inputValue,
    handleInputChange,
    filteredItems,
    handleClickStack,
    handleDeleteStack,
    handleSubmit,
    techStacks,
  } = useTeckStackModalHook({ value, setSortType });

  return (
    <SelectedBox setShowOptions={setShowOptions} showOptions={showOptions} value={value}>
      <p>기술 스택</p>
      <ModalContainer showOptions={showOptions}>
        <Section gap="2">
          <InputContainer>
            <SearchIcon />
            <input
              value={inputValue}
              onChange={handleInputChange}
              css={css`
                flex: 1;
                ${theme.typography.body3};
                ::placeholder {
                  color: #c4c4c4;
                }
              `}
              placeholder="궁금한 기술스택을 입력해주세요."
            />

            <SearchResultContainer showOptions={!!inputValue}>
              {filteredItems.length !== 0 ? (
                filteredItems.map((stack: string) => {
                  return <SearchResult stack={stack} onClick={handleClickStack} key={stack} />;
                })
              ) : (
                <p>기술스택이 존재하지 않습니다.</p>
              )}
            </SearchResultContainer>
          </InputContainer>

          <FlexSpaceBetweenContainer>
            <Body3Bold>검색할 기술 스택</Body3Bold>
            <Body4
              style={css`
                color: #c4c4c4;
              `}
            >
              * 최대 5개까지 추가할 수 있어요
            </Body4>
          </FlexSpaceBetweenContainer>

          <SelectedStackContainer>
            {techStacks.map((stack) => {
              return <SelectedStack stack={stack} onClick={handleDeleteStack} key={stack} />;
            })}
          </SelectedStackContainer>
        </Section>

        <FlexSpaceBetweenContainer>
          <ButtonBox
            text="취소할게요"
            type="modalSmall"
            cancel
            onClick={() => {
              setShowOptions((prev) => !prev);
            }}
          />
          <ButtonBox text="등록할게요" type="modalSmall" onClick={handleSubmit} />
        </FlexSpaceBetweenContainer>
      </ModalContainer>
    </SelectedBox>
  );
};
