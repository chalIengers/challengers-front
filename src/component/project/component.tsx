/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { ButtonBox, FlexWrapContainer, LoadingBox } from '../emotion/component';
import theme from '../../styles/theme';
import { SelectBoxDropBoxProps, SelectedBoxProps } from '../../types/globalType';
import { Body3Bold, Body4, Section } from '../emotion/GlobalStyle';
import { useGetTechStacksQuery } from '../../store/controller/projectController';

export const LoadingContainer = () => (
  <FlexWrapContainer>
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
    <LoadingBox />
  </FlexWrapContainer>
);

/**
 * SelectBox 컴포넌트
 * @StyledSelectBox
 */
const SelectedBox = ({ children, setShowOptions, showOptions, value }: SelectedBoxProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 모달이 열려있고, 모달 외부를 클릭할 때 모달을 닫습니다.
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showOptions]);
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

export const SelectBoxDropBox = ({
  options,
  value,
  sortType,
  setSortType,
}: SelectBoxDropBoxProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e: any) => {
    const { innerText } = e.target;
    setSortType((prev) => ({ ...prev, [value]: innerText }));
  };

  return (
    <SelectedBox setShowOptions={setShowOptions} showOptions={showOptions} value={value}>
      <p>{sortType[value]}</p>
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
      </ul>
    </SelectedBox>
  );
};

export const SelectBoxModal = ({ value, sortType, setSortType }: SelectBoxDropBoxProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [techStacks, setTechStacks] = useState(sortType.stack);

  const { data } = useGetTechStacksQuery({});
  // const filteredData = data.filter(item => item.name.includes(inputValue));

  // 중복된 value 값을 제거하기 위해 Set을 사용
  const uniqueValuesArray: string[] = Array.from(
    new Set(data?.map((item: { name: string }) => item.name)),
  );

  // 필터링
  const filteredItems = uniqueValuesArray.filter((item: string) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickStack = (e: any) => {
    const { innerText } = e.target;
    if (techStacks.length < 5 && !techStacks.includes(innerText))
      setTechStacks((prev) => [...prev, innerText]);
    setInputValue('');
  };

  const handleDeleteStack = (e: any) => {
    const { innerText } = e.target;
    const updatedTechStacks = techStacks.filter((stack) => stack !== innerText);
    setTechStacks(updatedTechStacks);
  };

  const handleSubmit = () => {
    setSortType((prev) => ({ ...prev, [value]: [...techStacks] }));
    setShowOptions((prev) => !prev);
  };

  return (
    <SelectedBox setShowOptions={setShowOptions} showOptions={showOptions} value={value}>
      <p>기술 스택</p>
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
        <Section gap="2">
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
            <img
              src="/img/search.png"
              alt="검색"
              css={css`
                width: 1.6rem;
                height: 1.6rem;
              `}
            />
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
            <div
              css={css`
                position: absolute;
                display: ${inputValue ? 'block' : 'none'};
                top: 4.4rem;
                left: 0;
                width: 100%;
                height: 16rem;
                padding: 1.6rem;
                background: #fff;
                border-radius: 1rem;
                border: 1px solid #f4f4f4;
                box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
                overflow: scroll;
                scrollbar-width: none; /* Firefox에서는 무시됨 */
                -ms-overflow-style: none; /* IE에서는 무시됨 */
                ::-webkit-scrollbar {
                  display: none;
                }
              `}
            >
              {filteredItems.length !== 0 ? (
                filteredItems.map((stack) => {
                  return (
                    <p
                      key={stack}
                      role="presentation"
                      onClick={handleClickStack}
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
                    </p>
                  );
                })
              ) : (
                <p>기술스택이 존재하지 않습니다.</p>
              )}
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <Body3Bold>검색할 기술 스택</Body3Bold>
            <Body4
              style={css`
                color: #c4c4c4;
              `}
            >
              * 최대 5개까지 추가할 수 있어요
            </Body4>
          </div>
          <div
            css={css`
              display: flex;
              gap: 1.2rem;
              flex-wrap: wrap;
              ${theme.typography.body3}
            `}
          >
            {techStacks.map((stack) => {
              return (
                <div
                  key={stack}
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
                  onClick={handleDeleteStack}
                >
                  {stack}
                </div>
              );
            })}
          </div>
        </Section>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <ButtonBox
            text="취소할게요"
            type="modalSmall"
            cancel
            onClick={() => {
              setShowOptions((prev) => !prev);
            }}
          />
          <ButtonBox text="등록할게요" type="modalSmall" onClick={handleSubmit} />
        </div>
      </div>
    </SelectedBox>
  );
};
