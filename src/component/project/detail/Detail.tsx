/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Tag, {
  Banner,
  ContainerComponent,
  GridBox,
  ImageBox,
  Inner,
  TeamInfoBox,
} from '../../emotion/component';
import { ProjectLinkButton } from '../emotion/component';
import { Body1, Body2, Header1, Header2, Section } from '../../emotion/GlobayStyle';

const Detail = () => {
  return (
    <Inner>
      <Banner type="small" />
      <Section gap="4">
        <Header1>프로젝트 상세페이지</Header1>
        <ContainerComponent>
          <ImageBox />
          <div
            css={css`
              display: flex;
              gap: 1.2rem;
            `}
          >
            <Tag>웹 서비스</Tag>
            <Tag>토스 프로젝트</Tag>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 0.8rem;
            `}
          >
            <Header1>토스 프로젝트</Header1>
            <Body2>새롭고 달라진 금융 서비스를 만나보세요</Body2>
          </div>
        </ContainerComponent>
        <ContainerComponent>
          <Header1>프로젝트 요약</Header1>
          <GridBox>
            <Header2>소속 클럽</Header2>
            <Body1>소속 클럽</Body1>
            <Header2>서비스 형태</Header2>
            <Body1>서비스 형태</Body1>
            <Header2>프로젝트 상태</Header2>
            <Body1>프로젝트 형태</Body1>
            <Header2>프로젝트 기간</Header2>
            <Body1>프로젝트 기간</Body1>
            <Header2>사용된 기술 스택</Header2>
            <Body1>사용된 기술 스택</Body1>
          </GridBox>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 설명</Header1>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 3.6rem;
              line-height: 30px; /* 150% */
            `}
          >
            <Body2>
              개편 이전의 고민
              <br />
              토스는 다양한 직군의 사람들이 하나의 서비스를 만들기 위해 구성된 사일로와 토스 전체의
              일관된 경험을 위해 같은 직군끼리 모인 챕터로 조직되어 있는데요. 모든 팀이 쉽고 간편한
              사용자 경험을 만들자’라는 공동의 목표를 가지고 있지만, 각자의 방식으로 Focus on
              imBody2act를 하다 보니 전체 디자인에 통일성이 결여된 상황이 발생했습니다. 컴포넌트의
              컬러에서부터, 폰트 크기, 문구까지 제품마다 다르게 사용되고 있었는데요. 이 때문에
              디자인할 때마다 매번 어떤 컴포넌트를 사용할지 고민하는 문제가 생겼습니다. 빨리 달리며
              했던 일들이 이제는 발목을 잡는 상황이 된 것이죠. 누군가가 좋은 디자인을 해도 프로덕트
              전체로 확장되지 못하고 정체되어 있다는 느낌을 받았습니다. 모두에게 자율과 권한, 책임이
              주어져 있지만 서로가 다른 방향으로 달려나가고 있다는 점이 고민이었습니다.
            </Body2>
            <Body2>
              조직 개편
              <br />
              다른 애자일 조직도 분명 유사한 어려움이 있었을 것이라 생각해 찾던 중, 스포티파이가
              유사한 문제를 경험하고 해결했음을 알게 되었습니다.
            </Body2>
            <Body2>
              디자인 개편
              <br />
              토스 팀은 앞서 언급했던 것처럼, Focus on imBody2act를 고민하며 큰 효과를 낼 수 있는
              제품에 집중해왔습니다. 그렇다 보니 자동이체와 같이 성과가 나지 않는 페이지들은
              계속해서 백로그에 남아있게 되었습니다. 탭 구조 또한 맥락을 갖고 있거나 서로 연결되어
              도움을 주는 구조가 아니었습니다. 간편 송금에서 시작하여 추가된 기능들이 출시된
              순서대로 탭에 추가되어있는 상태였는데요. 맥락이 튼튼한 구조를 갖추고자 전체 개편을
              진행하게 되었습니다. 이는 속도를 내기 위해 쌓아 두었던 디자인 부채를 해결하기 위한
              선택이었습니다. 전체 개편을 통해 사용자에게 가치를 줄 수 있는 부분에 투자하여 더 큰
              가치를 창출할 수 있는 기반을 마련한 것이라 할 수 있습니다.
            </Body2>
          </div>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>팀원구성</Header1>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 4.3rem;
            `}
          >
            <TeamInfoBox />
            <TeamInfoBox />
            <TeamInfoBox />
            <TeamInfoBox />
            <TeamInfoBox />
          </div>
        </ContainerComponent>

        <ContainerComponent>
          <Header1>프로젝트 링크</Header1>

          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: start;
              gap: 3.7rem;
            `}
          >
            <ProjectLinkButton name="notion" url="" />
            <ProjectLinkButton name="notion" url="" />
            <ProjectLinkButton name="notion" url="" />
            <ProjectLinkButton name="notion" url="" />
            <ProjectLinkButton name="notion" url="" />
          </div>
        </ContainerComponent>
      </Section>
    </Inner>
  );
};

export default Detail;
