import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Body1, Header1, Inner, Section } from '../emotion/GlobalStyle';
import { Banner, ButtonBox, TagList } from '../emotion/component';
import { ApiFetcher } from '../../util/util';
import {
  useGetInfoQuery,
  useValidateUnRegisterQuery,
} from '../../store/controller/myPageController';
import { logout, selectUser } from '../../store/slice/userSlice';
import { openModal } from '../../store/slice/modalSlice';

const MyPage = () => {
  const { accessToken } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = useValidateUnRegisterQuery({ accessToken });
  const handleUnRegistClick = async () => {
    try {
      console.log(validate.data);
      const { memberEmpty } = validate.data;
      const { notAdministrator } = validate.data;
      const { validateUser } = validate.data;
      if (memberEmpty === false) {
        dispatch(openModal({ modalType: 'UnRegisterWarningModal' }));
      } else if (notAdministrator === false) {
        alert('관리자 계정은 탈퇴할 수 없습니다');
      } else if (validateUser === false) {
        alert('사용자가 존재하지 않습니다');
      } else if (validate.data.success === true) {
        dispatch(openModal({ modalType: 'UnRegisterModal' }));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Inner>
      <Banner />
      <Section gap="2.8">
        <Header1>마이페이지</Header1>
        <ApiFetcher query={useGetInfoQuery(accessToken)} loading={<p>불러오는 중 ...</p>}>
          {(data) => (
            <>
              <Body1>챌린저스 서비스를 이용해주시는 {data.name}님, 정말 정말 반가워요</Body1>
              <Body1>가입된 클럽 :{data.clubs.join(', ')}</Body1>
              <Body1>인증된 이메일 : {data.email}</Body1>
            </>
          )}
        </ApiFetcher>
        <TagList>
          <ButtonBox
            text="서비스 로그아웃"
            type="custom"
            onClick={() => {
              dispatch(logout());
              navigate('/');
            }}
          />
          <ButtonBox
            text="비밀번호 수정하기"
            type="custom"
            onClick={() => {
              dispatch(openModal({ modalType: 'ChangePassword' }));
            }}
          />
          <ButtonBox
            text="회원 탈퇴하기"
            type="custom"
            backgroundColor="#DC4A4A"
            onClick={handleUnRegistClick}
          />
        </TagList>
      </Section>
    </Inner>
  );
};

export default MyPage;
