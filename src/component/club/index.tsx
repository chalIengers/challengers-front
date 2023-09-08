/** @jsxImportSource @emotion/react */

import React, { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Banner, TextBox } from '../emotion/component';
import { Inner, Header1, Section } from '../emotion/GlobalStyle';
import { ClubBox, LinkTo, Toast, ClubPagNation } from './emotion/component';
import { ApiFetcher } from '../../util/util';
import { useGetClubListQuery, useGetMyClubQuery } from '../../store/controller/clubController';
import { ClubComponentProps, MyClubDataType } from '../../types/globalType';
import { selectUser } from '../../store/slice/userSlice';

const Index = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const [showToast, setShowToast] = useState(false);
  const { accessToken } = useSelector(selectUser);
  const { isLoading, isError, data } = useGetMyClubQuery({ accessToken });

  const ShowToast = useCallback(() => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, []);

  let myClubContent;
  if (!accessToken) {
    myClubContent = <div>로그인을 해주세요</div>;
  } else if (isLoading) {
    myClubContent = <div>로딩중...</div>;
  } else if (isError) {
    myClubContent = <div>Api 통신 에러!</div>;
  } else if (data) {
    myClubContent = data.map((club: MyClubDataType) => (
      <ClubBox
        key={club.id}
        id={club.id}
        name={club.name}
        text={club.manager ? '클럽 관리 페이지' : '클럽 마스터 이메일 보기'}
        logo={club.logo}
        onClick={
          club.manager
            ? () => {
                navigate(`/club/admin/${club.id}`);
              }
            : () => {
                navigator.clipboard.writeText(club.managerEmail);
                ShowToast();
              }
        }
      />
    ));
  } else {
    myClubContent = <div>소속된 클럽이 없습니다</div>;
  }

  const clubJoinButton = () => {};
  return (
    <Inner>
      <Banner />
      <Section gap="4.8">
        <Header1>내가 소속된 클럽</Header1>
        {myClubContent}
        {showToast !== undefined
          ? showToast && <Toast text="해당 클럽 마스터의 이메일이 클립보드에 복사되었어요" />
          : null}
      </Section>

      <Section gap="3.2">
        <TextBox margin="2.4">
          <Header1>챌린저스에 등록된 클럽</Header1>
          <LinkTo to="/club/publish">클럽을 등록하고 싶다면?</LinkTo>
        </TextBox>
        <ApiFetcher query={useGetClubListQuery(page)} loading={<div>로딩중...</div>}>
          {(ListData) => (
            <>
              {ListData?.content.map((club: ClubComponentProps) => (
                <ClubBox
                  key={club.id}
                  id={club.id}
                  name={club.name}
                  text="클럽 가입 신청"
                  logo={club.logo}
                />
              ))}
              <ClubPagNation totalPage={ListData?.totalPages} />
            </>
          )}
        </ApiFetcher>
      </Section>
    </Inner>
  );
};

export default Index;
