/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Tag, {
  Banner,
  ButtonBox,
  ContainerComponent,
  Inner,
  TeamInfoBox,
} from '../../emotion/component';
import { LinkInputBox } from '../emotion/component';
import { GridBox, Header1, Header3, TextInputBox } from './component';

const Publish = () => {
  return (
    <div
      css={css`
        background-color: #000;
        height: 100vh;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
        &::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <Inner
        style={css`
          align-items: start;
          margin-top: 13rem;
          margin-bottom: 16.6rem;
        `}
      >
        <Banner type="small" />
        <Header1>프로젝트 상세페이지</Header1>

        <ContainerComponent height="auto">
          <div
            css={css`
              margin: 3rem 0;
              display: flex;
              flex-direction: column;
              gap: 3.2rem;
            `}
          >
            <div
              css={css`
                width: 105rem;
                height: 50rem;
                background-color: #404040;
                border-radius: 1.3rem;
                margin-top: 5.1rem;
              `}
            />
            <div
              css={css`
                display: flex;
                gap: 1.3rem;
              `}
            >
              <Tag width="15.3rem">서비스 형태가 들어가요</Tag>
              <Tag width="16.2rem">소속 클럽 이름이 들어가요</Tag>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                gap: 0.9rem;
              `}
            >
              <TextInputBox type="title" text="제목을 입력해주세요" />
              <TextInputBox type="subTitle" text="소제목을 입력해주세요" />
            </div>
          </div>
        </ContainerComponent>

        <ContainerComponent height="auto">
          <div
            css={css`
              width: 105rem;
              margin: 5.2rem 0;
              display: flex;
              flex-direction: column;
              align-items: start;
              gap: 3.7rem;
            `}
          >
            <div>
              <Header1>프로젝트 요약</Header1>
            </div>
            <GridBox>
              <Header3>소속 클럽</Header3>
              <TextInputBox type="select" text="소속 클럽을 입력해주세요" />
            </GridBox>
            <GridBox>
              <Header3>서비스 형태</Header3>
              <TextInputBox type="select" text="서비스 형태를 선택해주세요" />
            </GridBox>
            <GridBox>
              <Header3>프로젝트 상태</Header3>
              <TextInputBox type="select" text="프로젝트 현재 상태를 선택해주세요" />
            </GridBox>
            <GridBox>
              <Header3>프로젝트 기간</Header3>
              <TextInputBox type="select" text="기간을 선택해주세요" />
            </GridBox>
            <GridBox>
              <Header3>사용된 기술 스택</Header3>
              <TextInputBox type="select" text="사용된 기술 스택을 선택해주세요" />
            </GridBox>
          </div>
        </ContainerComponent>

        <ContainerComponent height="73.3rem">
          <p>에디터입니다.</p>
        </ContainerComponent>

        <ContainerComponent height="auto">
          <div
            css={css`
              width: 105rem;
              display: flex;
              flex-direction: column;
              margin: 6.3rem 0;
              gap: 56px;
            `}
          >
            <Header1>팀원구성</Header1>
            <div
              css={css`
                display: flex;
                justify-content: start;
                gap: 4.5rem;
              `}
            >
              <TeamInfoBox></TeamInfoBox>
              <TeamInfoBox></TeamInfoBox>
              <TeamInfoBox></TeamInfoBox>
            </div>
          </div>
        </ContainerComponent>

        <ContainerComponent height="auto">
          <div
            css={css`
              width: 105rem;
              display: flex;
              flex-direction: column;
              margin: 6.3rem 0;
              gap: 4rem;
            `}
          >
            <Header1>프로젝트 링크</Header1>
            <LinkInputBox />
            <LinkInputBox />
          </div>
        </ContainerComponent>
        <ButtonBox text="프로젝트 발행하기" type="large" />
      </Inner>
    </div>
  );
};

export default Publish;
