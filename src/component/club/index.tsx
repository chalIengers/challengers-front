/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Banner, TextBox } from '../emotion/component';
import { Inner, Header1, Section } from '../emotion/GlobalStyle';
import { ClubBox, LinkTo } from './emotion/component';
import { Clubs } from '../../json/club-controller';

const Index = () => {
  const [showToast, setShowToast] = useState(false);

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
        <ClubBox
          key={1}
          onClick={ShowToast}
          showToast={showToast}
          text="클럽 마스터의 이메일 보기"
          name="챌린저스"
          clubImg="aaa.png"
        />
      </Section>

      <Section gap="3.2">
        <TextBox margin="2.4">
          <Header1>챌린저스에 등록된 클럽</Header1>
          <LinkTo to="/club/publish">클럽을 등록하고 싶다면?</LinkTo>
        </TextBox>
        {Clubs.map((club) => (
          <ClubBox
            key={club.id}
            name={club.name}
            clubImg={`${process.env.PUBLIC_URL}/img/${club.clubImg}`}
            onClick={clubJoinButton}
          />
        ))}
      </Section>
    </Inner>
  );
};

export default Index;
