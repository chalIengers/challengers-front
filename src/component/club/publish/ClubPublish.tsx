/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Banner,
  ButtonBox,
  ContainerComponent,
  GridBox,
  TextInputBox,
} from '../../emotion/component';
import { Inner, Body1, Header1, Section, Header2 } from '../../emotion/GlobalStyle';
import { ClubLogoPreView, ClubTypeBox } from './component';
import { openModal } from '../../../store/slice/modalSlice';
import { clubData, setClubField } from '../../../store/slice/CreateClubSlice';
import { selectUser } from '../../../store/slice/userSlice';
import { useFileUploadMutation } from '../../../store/controller/commonController';
import { useVerifyClubMutation } from '../../../store/controller/clubController';

const Publish = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(selectUser);
  const [serverImgUpload] = useFileUploadMutation();
  const [verifyClub] = useVerifyClubMutation();
  const [imgFormData, setImgFormData] = useState<File | undefined>(undefined);
  const club = useSelector(clubData);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) {
      dispatch(setClubField({ field: name, clubData: value }));
    }
  };

  const handleClick = async () => {
    if (!imgFormData) {
      alert('클럽 로고 이미지를 업로드해주세요');
      return;
    }
    // 이미지 서버에 업로드 및 상태 업데이트
    try {
      let sendClubData;
      try {
        const imgResponse = await serverImgUpload({
          accessToken,
          fileData: imgFormData,
        }).unwrap();
        sendClubData = {
          clubDescription: club.clubData.clubDescription,
          clubForm: club.clubData.clubForm,
          clubName: club.clubData.clubName,
          logoUrl: imgResponse.msg,
        };
        dispatch(setClubField({ field: 'logoUrl', clubData: imgResponse.msg }));
        if (Object.values(sendClubData).some((value) => !value)) {
          alert('모든 항목을 채워주세요');
          return;
        }
      } catch (err) {
        console.log(err);
      }

      const dataResponse = await verifyClub({ accessToken, clubData: sendClubData }).unwrap();
      console.log(dataResponse);
      if (dataResponse.success) {
        dispatch(setClubField({ field: 'userName', clubData: dataResponse.msg }));
        dispatch(openModal({ modalType: 'CreateClubModal' }));
      }
    } catch (err: any) {
      alert(err.data.msg);
    }
  };

  return (
    <Inner>
      <Banner />

      <Section gap="2">
        <Header1>프로젝트 등록을 위해 클럽을 개설하고 싶으신가요?</Header1>
        <Body1>
          챌린저스 서비스에서 프로젝트 등록을 위해 클럽을 개설해야해요
          <br />
          한번 클럽을 등록만 한다면 추후 프로젝트는 손쉽게 등록할 수 있어요.
        </Body1>
      </Section>

      <Section>
        <ClubLogoPreView setImgFormData={setImgFormData} />
      </Section>

      <ContainerComponent>
        <Header1>클럽신청서</Header1>
        <GridBox>
          <Header2>클럽 이름</Header2>
          <TextInputBox
            type="body1"
            text="소속 클럽을 입력해주세요"
            name="clubName"
            onBlur={handleBlur}
          />

          <Header2>클럽 형태</Header2>
          <ClubTypeBox text="클럽 형태를 선택해주세요" />

          <Header2>클럽 소개</Header2>
          <TextInputBox
            type="body1"
            text="클럽에 대한 간단한 소개 메세지를 입력해주세요"
            name="clubDescription"
            onBlur={handleBlur}
          />
        </GridBox>
      </ContainerComponent>

      <ButtonBox text="클럽을 등록하고 싶어요" type="large" onClick={handleClick} />
    </Inner>
  );
};

export default Publish;
