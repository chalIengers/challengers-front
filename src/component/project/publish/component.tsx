/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import theme from '../../../styles/theme';
import { Body5, Header1, Section } from '../../emotion/GlobalStyle';
import {
  InfoContainer,
  InfoDownContainer,
  InfoInput,
  InfoUpperContainer,
  LinkImg,
} from '../emotion/component';
import { TeamMember } from '../../../types/globalType';

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
  const [infoData, setInfoData] = useState<TeamMember[]>([{ id: 1, name: '', role: '' }]);

  const handleAddInfo = () => {
    const newMember: TeamMember = { id: infoData.length + 1, name: '', role: '' };
    setInfoData([...infoData, newMember]);
  };

  return (
    <InfoContainer>
      <InfoUpperContainer>
        <InfoInput placeholder="역할을 선택해주세요" large />
      </InfoUpperContainer>

      <InfoDownContainer>
        <Section gap="0.8">
          {infoData.map((item, index) => (
            <Section key={item.id} gap="0.8">
              <InfoInput
                placeholder="이름을 입력해주세요"
                large
                value={item.name}
                onChange={(e) => {
                  const updatedData = [...infoData];
                  updatedData[index].name = e.target.value;
                  setInfoData(updatedData);
                }}
              />
              <InfoInput
                placeholder="어떤 역할을 했나요?"
                value={item.role}
                onChange={(e) => {
                  const updatedData = [...infoData];
                  updatedData[index].role = e.target.value;
                  setInfoData(updatedData);
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
      <LinkImg name="notion" type="small" />
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
