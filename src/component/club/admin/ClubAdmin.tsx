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
  const { accessToken } = useSelector(selectUser);
  const { data, isLoading } = useGetPendingUsersQuery({ clubId, accessToken });
  const clubData = useGetClubDetailQuery({ clubId, accessToken });
  // 클럽 이름
  const clubName = clubData?.data?.clubName;
  // 클럽 로고
  const clubLogo = clubData?.data?.logoUrl;
  console.log(clubData?.data);
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
              <ClubAcceptBox email={user.email} key={user.id} name={user.name} id={clubId} />
            ))}
          </>
        )}
      </Section>
    </Inner>
  );
};

export default Index;
