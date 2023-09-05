/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Banner, TextBox } from '../emotion/component';
import { Inner, Header1, Section } from '../emotion/GlobalStyle';
import { ClubBox, ClubPagNation, LinkTo } from './emotion/component';
import { ApiFetcher } from '../../util/util';
import { useGetClubListQuery, useGetMyClubQuery } from '../../store/controller/clubController';
import { ClubComponentProps } from '../../types/globalType';

const Index = () => {
  const { page } = useParams();
  const [showToast, setShowToast] = useState(false);
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGR3aGRtczk5QGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzNDAzNzE0LCJleHAiOjE2OTM0MDczMTR9.yrfR5S1_EQS3wSreyh0cR2oSNGgSf-gyGnleFKli0To';

  const ShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const clubJoinButton = () => {};
  return (
    <Inner>
      <Banner />
      <Section gap="4.8">
        <Header1>내가 소속된 클럽</Header1>
        <ApiFetcher query={useGetMyClubQuery({})} loading={<div>로딩중...</div>}>
          {(data) =>
            data && (
              <ClubBox
                id={data ? data.id : 1}
                onClick={ShowToast}
                showToast={showToast}
                text="클럽 마스터의 이메일 보기"
                name={data ? data.name : 'test'}
                logo={data ? data.logo : 'logo'}
              />
            )
          }
        </ApiFetcher>
        {/* <ClubBox
          key={1}
          onClick={ShowToast}
          showToast={showToast}
          text="클럽 마스터의 이메일 보기"
          name="챌린저스"
          clubImg="aaa.png"
        /> */}
      </Section>

      <Section gap="3.2">
        <TextBox margin="2.4">
          <Header1>챌린저스에 등록된 클럽</Header1>
          <LinkTo to="/club/publish">클럽을 등록하고 싶다면?</LinkTo>
        </TextBox>
        <ApiFetcher query={useGetClubListQuery(page)} loading={<div>로딩중...</div>}>
          {(data) => (
            <>
              {data.content.map((club: ClubComponentProps) => (
                <ClubBox id={club.id} name={club.name} text="클럽 가입 신청" logo={club.logo} />
              ))}
              <ClubPagNation totalPage={data.totalPages} />
            </>
          )}
        </ApiFetcher>
        {/* {Clubs.map((club) => (
          <ClubBox
            key={club.id}
            name={club.name}
            clubImg={`${process.env.PUBLIC_URL}/img/${club.clubImg}`}
            onClick={clubJoinButton}
          />
        ))} */}
      </Section>
    </Inner>
  );
};

export default Index;
