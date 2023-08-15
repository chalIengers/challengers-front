/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '../../../styles/theme';

// TeamInfo 컴포넌트
const InfoText = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'title' | 'content' | 'addMemberText' | 'addPositionText';
}) => {
  const styles = {
    title: css`
      color: '#cbcbcb';
      ${theme.typography.header2};
    `,
    content: css`
      color: ${theme.palette.gray.black};
      ${theme.typography.body2};
    `,
    addMemberText: css`
      ${theme.typography.body2};
      color: ${theme.palette.primary[500]};
      text-decoration: ${theme.palette.primary[500]} 0.25rem solid underline;
      text-underline-offset: 0.5rem;
      :hover {
        cursor: pointer;
      }
    `,
    addPositionText: css`
      ${theme.typography.header1};
      color: ${theme.palette.gray.white};
      text-decoration: ${theme.palette.gray.white} 0.25rem solid underline;
      text-underline-offset: 0.5rem;
      &:hover {
        cursor: pointer;
      }
    `,
  };
  return (
    <span
      css={css`
        ${styles[type]}
        display: inline;
      `}
    >
      {children}
    </span>
  );
};
const InfoBox = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'wrap' | 'modal' | 'upBox' | 'downBox' | 'content';
}) => {
  const styles = {
    wrap: css`
      position: relative;
      display: flex;
      flex-direction: column;
      width: 31.3rem;
      height: auto;
      border-radius: 1.4rem;
    `,
    modal: css`
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 31.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20.6rem;
      border-radius: 1.4rem;
      background: rgba(73, 73, 73, 0.6);
      display: none;
    `,
    upBox: css`
      width: 31.3rem;
      height: 5.7rem;
      border-radius: 1.4rem 1.4rem 0 0;
      background: ${theme.palette.primary[500]};
      display: flex;
      align-items: center;
      padding: 0 2rem;
    `,
    downBox: css`
      width: 31.3rem;
      border-radius: 0 0 1.4rem 1.4rem;
      background: #e8f3ff;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      row-gap: 1.7rem;
    `,
    content: css`
      display: flex;
      flex-direction: column;
      row-gap: 0.9rem;
    `,
  };
  return (
    <div
      css={css`
        ${styles[type]}
      `}
    >
      {children}
    </div>
  );
};
const InfoInput = ({
  placeholder,
  max,
  isContent,
}: {
  placeholder: string;
  max: number;
  isContent: boolean;
}) => (
  <input
    css={css`
      background: #e8f3ff;
      background-position: right center;
      padding: 0;
      height: 30px;
      outline: none;
      border: none;
      box-sizing: border-box;
      font-size: ${isContent ? `${theme.font.md}` : `${theme.font.xl}`};
      overflow: auto;
      &::placeholder {
        color: #cbcbcb;
      }
    `}
    placeholder={placeholder}
    maxLength={max}
  />
);
/**
 * 팀원 infobox
 */
export const TeamInfoInputBox = () => {
  // const addPositionOnClick = () => {
  //   ModalBoxComponent.current?.style.setProperty('display', 'none');
  // };
  return (
    <InfoBox type="wrap">
      <InfoBox type="upBox">
        <InfoText type="title">역할을 선택해주세요</InfoText>
      </InfoBox>
      <InfoBox type="downBox">
        {/* <ContentBox>
            <TitleText color="black">이진아</TitleText>
            <ContentText>프론트엔드</ContentText>
          </ContentBox> */}
        <InfoBox type="content">
          <InfoInput placeholder="이름을 입력해주세요" max={10} isContent={false}></InfoInput>
          <InfoInput placeholder="어떤 역할을 했나요?" max={25} isContent></InfoInput>
        </InfoBox>
        <InfoText type="addMemberText">해당 포지션에 팀원을 더 추가하고싶어요</InfoText>
      </InfoBox>
      <InfoBox type="modal">
        <InfoText type="addPositionText">포지션 추가</InfoText>
      </InfoBox>
    </InfoBox>
  );
};
export const TeamInfoBox = () => {
  // const addPositionOnClick = () => {
  //   ModalBoxComponent.current?.style.setProperty('display', 'none');
  // };
  return (
    <InfoBox type="wrap">
      <InfoBox type="upBox">
        <InfoText type="title">역할을 선택해주세요</InfoText>
      </InfoBox>
      <InfoBox type="downBox">
        <InfoBox type="content">
          <InfoText type="title">이진아</InfoText>
          <InfoText type="content">프론트엔드</InfoText>
        </InfoBox>
      </InfoBox>
    </InfoBox>
  );
};
