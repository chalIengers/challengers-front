/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import theme from '../../../styles/theme';
import { Body1, Header1, Section } from '../../emotion/GlobalStyle';
import {
  InfoContainer,
  InfoDownContainer,
  InfoInput,
  InfoUpperContainer,
  LinkImg,
} from '../emotion/component';

export const Overlay = ({ addInfo }: { addInfo: boolean | undefined }) => {
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
        display: ${addInfo ? 'flex' : 'none'};
      `}
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
export const TeamInfoInputBox = ({ addInfo }: { addInfo?: boolean }) => {
  return (
    <InfoContainer>
      <InfoUpperContainer>
        <InfoInput placeholder="역할을 선택해주세요" large />
      </InfoUpperContainer>

      <InfoDownContainer>
        <Section gap="0.8">
          <InfoInput placeholder="이름을 입력해주세요" large />
          <InfoInput placeholder="어떤 역할을 했나요?" />
        </Section>
        <Body1
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
          해당 포지션에 팀원을 더 추가하고싶어요
        </Body1>
      </InfoDownContainer>

      <Overlay addInfo={addInfo} />
    </InfoContainer>
  );
};

TeamInfoInputBox.defaultProps = { addInfo: false };

// project link을 넣어주는 inputBox
export const LinkInputBox = () => {
  const regex = /^(http|https):\/\//;

  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    if (regex.test(inputValue)) {
      setTextColor('black');
    } else {
      setTextColor('red');
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
      <input
        type="text"
        placeholder="http 또는 https를 포함하는 전체 링크를 입력해주세요"
        onChange={handleInputChange}
        css={css`
          color: ${textColor};
          ${theme.typography.body1}
        `}
      />
      <LinkImg name="notion" />
    </div>
  );
};
