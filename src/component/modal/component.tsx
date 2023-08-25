/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import theme from '../../styles/theme';
import { ButtonBox } from '../emotion/component';
import { ContainerType } from '../../types/globalType';
import { Body1, Body2, Header1, Section } from '../emotion/GlobalStyle';
import { closeModal, openModal } from '../../store/modalSlice';

export const ModalContainer = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        position: fixed;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </div>
  );
};

export const Overlay = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div
      role="presentation"
      css={css`
        background-color: rgba(27, 27, 27, 0.8);
        position: fixed; /* 불투명한 배경을 뷰포트에 고정 */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `}
      onClick={onClick}
    />
  );
};

const ModalBackGround = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.palette.gray.white};
  box-shadow: 6px 7px 9px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  padding: 5.6rem 7.2rem;
  min-width: 64rem;
`;

/**
 * modal 안에서 사용되는 input 컴포넌트
 */
const ModalInput = () => {
  return (
    <div
      css={css`
        border-radius: 0.8rem;
        background: ${theme.palette.gray[100]};
        padding: 1.6rem 2.5rem;
      `}
    >
      <input
        css={css`
          background-color: transparent;
          ${theme.typography.body1};
          width: 100%;
          ::placeholder {
            color: ${theme.palette.gray[300]};
          }
        `}
        placeholder="발송된 인증번호를 입력해주세요"
      />
    </div>
  );
};

export const RegisterSuccessModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 3초뒤 메인화면으로 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(closeModal());
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div css={ModalBackGround}>
      <Section gap="2.4">
        <Header1
          style={css`
            color: ${theme.palette.gray[900]};
            text-align: center;
          `}
        >
          회원가입 성공
        </Header1>
        <div
          css={css`
            text-align: center;
          `}
        >
          <img alt="registerSuccess_img" src={`${process.env.PUBLIC_URL}/img/image 21.png`} />
        </div>
        <Body2
          style={css`
            color: ${theme.palette.gray[400]};
            text-align: center;
          `}
        >
          챌린저스의 일원이 되신 것을 감사드려요
          <br /> 3초 뒤에 메인 화면으로 이동합니다 =&#41;
        </Body2>
      </Section>
    </div>
  );
};

export const RegisterModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal({ modalType: 'RegisterSuccessModal' }));
  };
  const handleCancleClick = () => {
    dispatch(closeModal());
  };
  return (
    <div css={ModalBackGround}>
      <Section gap="2.4">
        <Header1
          style={css`
            color: ${theme.palette.gray[900]};
            text-align: center;
          `}
        >
          인증번호를 발송했어요
        </Header1>
        <Body1
          style={css`
            color: ${theme.palette.gray.black};
          `}
        >
          챌린저스 서비스는 현재 강남대학교 학생들을 대상으로 시범운영하고 있어요
          <br /> 입력하신 강남대학교 웹 메일 시스템에서 인증번호를 확인하고 입력해주세요 <br />
          <br />
          앗, 이메일이 안왔다면 이메일을 확인하거나 다시 등록 버튼을 눌러주세요
        </Body1>
        <ModalInput />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <ButtonBox text="취소" type="modal" cancel onClick={handleCancleClick} />
          <ButtonBox text="회원가입" type="modal" onClick={handleClick} />
        </div>
      </Section>
    </div>
  );
};

export const CreateClubModal = () => {
  return (
    <div css={ModalBackGround}>
      <Section gap="3.6">
        <Header1
          style={css`
            color: ${theme.palette.gray[900]};
            text-align: center;
          `}
        >
          000님의 000 클럽
        </Header1>
        <Body1
          style={css`
            color: ${theme.palette.gray.black};
          `}
        >
          클럽은 영업일 기준 2일 이내 승인이 될 예정이며,
          <br /> 승인 결과는 이메일 또는 입력하신 핸드폰을 통해 발송됩니다. <br />
          클럽 생성 전 하단의 주의사항을 확인해주세요 =&#41;
        </Body1>
        <Body1
          style={css`
            color: ${theme.palette.gray[600]};
          `}
        >
          1. 다른 유저들에게 피해를 제공하는 클럽은 해체될 수 있습니다.
          <br /> 2. 타인의 저작물을 침해하거나, 피해를 주는 행동을 해서는 안됩니다.
        </Body1>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <ButtonBox text="취소할게요" type="modal" cancel />
          <ButtonBox text="등록할게요" type="modal" />
        </div>
      </Section>
    </div>
  );
};
