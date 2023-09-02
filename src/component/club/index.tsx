/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Banner, TextBox } from '../emotion/component';
import { Inner, Header1, Section } from '../emotion/GlobalStyle';
import { ClubBox, LinkTo } from './emotion/component';
import { ApiFetcher } from '../../util/util';
import { useGetClubListQuery, useGetMyClubQuery } from '../../store/controller/clubController';
import { ClubComponentProps } from '../../types/globalType';
import { selectUser } from '../../store/slice/userSlice';

const Index = () => {
  const [showToast, setShowToast] = useState(false);
  const { accessToken } = useSelector(selectUser);

  const ShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  let content = null;

  if (!accessToken) {
    content = <div>로그인을 해주세요</div>;
  } else {
    content = (
      <ApiFetcher query={useGetMyClubQuery({ accessToken })} loading={<div>로딩중...</div>}>
        {(data) => {
          if (data) {
            return data.map((club: ClubComponentProps) => (
              <ClubBox
                id={club.id}
                name={club.name}
                text="클럽 가입 신청"
                logo={club.logo}
                onClick={ShowToast}
                showToast={showToast}
              />
            ));
          }
          return <div>소속된 클럽이 없습니다</div>;
        }}
      </ApiFetcher>
    );
  }

  const clubJoinButton = () => {};
  return (
    <Inner>
      <Banner />
      <Section gap="4.8">
        <Header1>내가 소속된 클럽</Header1>
        {content}
      </Section>

      <Section gap="3.2">
        <TextBox margin="2.4">
          <Header1>챌린저스에 등록된 클럽</Header1>
          <LinkTo to="/club/publish">클럽을 등록하고 싶다면?</LinkTo>
        </TextBox>
        <ApiFetcher query={useGetClubListQuery({})} loading={<div>로딩중...</div>}>
          {(data) =>
            data.map((club: ClubComponentProps) => (
              <ClubBox
                id={club.id}
                name={club.name}
                text="클럽 가입 신청"
                logo={club.logo}
                onClick={() => {}}
              />
            ))
          }
        </ApiFetcher>
      </Section>
    </Inner>
  );
};

export default Index;
