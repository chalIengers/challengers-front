/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Banner, TextBox } from '../../emotion/component';
import { Inner, Header2, Section } from '../../emotion/GlobalStyle';
import { ChallengersLogo, ClubAcceptBox, NavigateButton } from './component';
import {
  useGetClubDetailQuery,
  useGetPendingUsersQuery,
} from '../../../store/controller/clubController';
import { selectUser } from '../../../store/slice/userSlice';

const Index = () => {
  const { clubId } = useParams();
  const token = useSelector(selectUser).accessToken;
  const apiData = { clubId, token };
  const { data, isLoading, isError } = useGetPendingUsersQuery(apiData);
  console.log(data);
  const clubData = useGetClubDetailQuery(apiData);
  console.log(clubData);
  // 클럽 이름
  const clubName = clubData?.data?.clubName;
  // 클럽 로고
  const clubLogo = clubData?.data?.logoUrl;
  console.log(clubData?.data);

  if (isError) {
    return '클럽 매니저 권한이 없습니다';
  }
  if (!token && isError) {
    return '로그인 해주세요';
  }
  if (isError) {
    return '클럽 매니저 권한이 없습니다';
  }
  return (
    <Inner>
      <Banner />
      <Section gap="3.2">
        <TextBox>
          <Header2>클럽 : {clubName} </Header2>
          <NavigateButton />
        </TextBox>

        <ChallengersLogo src={clubLogo} />
        {isLoading ? (
          '로딩중'
        ) : (
          <>
            {data.map((user: any) => (
              <ClubAcceptBox
                email={user.email}
                key={user.id}
                name={user.name}
                id={clubId}
                comment={user.comment}
              />
            ))}
          </>
        )}
      </Section>
    </Inner>
  );
};

export default Index;
