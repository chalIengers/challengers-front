/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Banner, TextBox } from '../../emotion/component';
import { Inner, Header2, Section } from '../../emotion/GlobalStyle';
import { ChallengersLogo, ClubAcceptBox, LeftArrow } from './component';
import { useGetPendingUsersQuery } from '../../../store/clubApi';
import theme from '../../../styles/theme';

const Index = () => {
  const params = useParams();
  const navigate = useNavigate();
  const sibar: string | undefined = params.clubId;
  const { data, isLoading } = useGetPendingUsersQuery(params.clubId);
  const handleGoBackClick = () => {
    navigate(-1);
  };
  return (
    <Inner>
      <Banner />
      <Section gap="3.2">
        <TextBox>
          <Header2>클럽 : 챌린저스</Header2>

          <div
            css={css`
              display: flex;
            `}
          >
            <LeftArrow />
            <button
              type="button"
              css={css`
                ${theme.typography.body1Bold}
              `}
              onClick={handleGoBackClick}
            >
              뒤로가기
            </button>
          </div>
        </TextBox>

        <ChallengersLogo />
        {isLoading ? (
          '로딩중'
        ) : (
          <>
            {data.map((user: any) => (
              <ClubAcceptBox email={user.email} key={user.id} name={user.name} id={sibar} />
            ))}
          </>
        )}
      </Section>
    </Inner>
  );
};

export default Index;
