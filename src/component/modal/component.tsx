/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState, ReactNode, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'editor_likelion';
import theme from '../../styles/theme';
import { ButtonBox, ClubComponent } from '../emotion/component';
import { ContainerType } from '../../types/globalType';
import { Body1, Body2, Body2Bold, Header1, Section } from '../emotion/GlobalStyle';
import { closeModal, openModal } from '../../store/slice/modalSlice';
import { signData } from '../../store/slice/signUpSlice';
import {
  useCreateUserMutation,
  useRequestUserMutation,
} from '../../store/controller/signUpController';
import { ErrorDescription } from '../signUp/component';
import { commentData } from '../../store/slice/commentSlice';
import { useRequestJoinClubMutation } from '../../store/controller/clubController';
import { selectUser } from '../../store/slice/userSlice';

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
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

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
        overflow: hidden;
      `}
      onClick={onClick}
    />
  );
};

const ModalBackGround = ({ children, isBlack }: { children: ReactNode; isBlack?: boolean }) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${isBlack
          ? `background-color: ${theme.palette.gray[900]};`
          : `background-color: ${theme.palette.gray.white};`}
        box-shadow: 6px 7px 9px 5px rgba(0, 0, 0, 0.25);
        border-radius: 2rem;
        padding: 5.6rem 7.2rem;
        min-width: 64rem;
      `}
    >
      {children}
    </div>
  );
};
ModalBackGround.defaultProps = {
  isBlack: false,
};

/**
 * modal 안에서 사용되는 input 컴포넌트
 */
const ModalInput = ({ code, onChange }: { code: string; onChange: any }) => {
  const handleChange = (newCode: string) => {
    onChange(newCode);
  };
  // dispatch(setInputNumber(code));
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
        value={code}
        maxLength={6}
        onChange={(e) => handleChange(e.target.value)}
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
    <ModalBackGround>
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
          <img alt="registerSuccess_img" src={`${process.env.PUBLIC_URL}/img/emoticon.png`} />
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
    </ModalBackGround>
  );
};
const CommentDiv = ({ comment }: { comment: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: comment }}
      css={css`
        width: 100%;
        height: 30rem;
        padding: 2.4rem;
        border-radius: 0.8rem;
        background: ${theme.palette.gray[150]};
        color: black;
        ${theme.typography.body2};
      `}
    ></div>
  );
};
export const CommentBlackModal = () => {
  const editorRef = useRef(null);
  const [request] = useRequestJoinClubMutation();
  const dispatch = useDispatch();
  const data = useSelector(commentData);
  const token = useSelector(selectUser).accessToken;
  const handleCancleClick = () => {
    dispatch(closeModal());
  };
  const handleResiterClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm('등록하시겠습니까?');
    if (result) {
      if (editorRef.current) {
        const comment = (editorRef.current as HTMLBodyElement).innerHTML;
        const postData = {
          token,
          requestData: { cludId: data.commentClubState.id, comment },
        };
        console.log(postData);
        request(postData)
          .then((res: any) => {
            console.log(res);
            console.log(res.data?.msg);
            alert(res.data.msg);
            if (res.data.success) dispatch(closeModal());
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };
  return (
    <ModalBackGround isBlack>
      <Section gap="2.4">
        <ClubComponent
          id={data.commentClubState.id}
          name={data.commentClubState.name}
          logo={data.commentClubState.logo}
        />
        <Body2Bold
          style={css`
            text-align: center;
          `}
        >
          {data.commentClubState.name} 클럽에 가입 신청서를 넣기 전, 관리자에게 자신에 대한 코멘트를
          해주세요
        </Body2Bold>
        <Editor
          environmentColor="dark"
          placeholder="챌린저스 클럽에 가입 신청서를 넣기 전, 관리자에게 자신에 대한 코멘트를 해주세요

          다음 내용이 들어가면 성사확률이 올라갈거에요!
          
          - 간단한 자기소개
          - 클럽에 들어오고 싶은 이유"
          defaultFontColor="white"
          defaultFontSize="1.2rem"
          ref={editorRef}
        />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <ButtonBox text="취소할게요" type="modal" cancel onClick={handleCancleClick} />
          <ButtonBox text="등록할게요" type="modal" onClick={handleResiterClick} />
        </div>
      </Section>
    </ModalBackGround>
  );
};
export const CommentModal = () => {
  const data = useSelector(commentData);
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    dispatch(closeModal());
  };
  return (
    <ModalBackGround>
      <Section gap="2.4">
        <Header1
          style={css`
            color: ${theme.palette.gray[900]};
            text-align: center;
          `}
        >
          {data.commentState.name}님의 가입 코멘트
        </Header1>
        <CommentDiv comment={data.commentState.comment}></CommentDiv>
        <div
          css={css`
            display: flex;
          `}
        >
          <ButtonBox text="확인했어요" type="large_modal" onClick={handleCloseClick} />
        </div>
      </Section>
    </ModalBackGround>
  );
};

export const RegisterModal = () => {
  const dispatch = useDispatch();
  const data = useSelector(signData);
  const [createUser] = useCreateUserMutation();
  const [requestUser] = useRequestUserMutation();
  const [res, setRes] = useState({ data: { code: 1, msg: '' } }); // sign-up 응답 데이터
  const [inputCode, setInputCode] = useState('');
  // 인증코드 상태저장
  const handleChangeInputCode = (newCode: string) => {
    setInputCode(newCode); // 입력값이 변경될 때 상태 업데이트
  };
  // 인증번호 포함 회원가입 post
  const handleClick = async () => {
    try {
      const signUpData = {
        email: data.email,
        password: data.password,
        userName: data.userName,
        inputNumber: inputCode,
      };
      console.log(signUpData);
      const response = await createUser(signUpData); // API 요청을 보내고 응답 데이터를 받음
      console.log('API response:', response);
      setRes(response);
      if (response.data.code === 1) {
        dispatch(openModal({ modalType: 'RegisterSuccessModal' }));
      }
    } catch (err) {
      console.log(err);
    }
  };
  // 인증번호 재전송
  const handleEmailClick = async () => {
    try {
      const retryData = {
        email: data.email,
        password: data.password,
        userName: data.userName,
      };
      console.log(retryData);
      const response = await requestUser(retryData);
      console.log('retryEmail : ', response);
    } catch (err) {
      console.log(err);
    }
  };
  // 취소 버튼 클릭시 closeModal
  const handleCancleClick = () => {
    dispatch(closeModal());
  };
  return (
    <ModalBackGround>
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
        <ModalInput code={inputCode} onChange={handleChangeInputCode} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          {res.data.code ? <div></div> : <ErrorDescription>{res.data.msg}</ErrorDescription>}
          <button
            css={css`
              color: ${theme.palette.gray[500]};
            `}
            type="button"
            onClick={handleEmailClick}
          >
            이메일 인증번호를 다시 받고싶어요
          </button>
        </div>
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
    </ModalBackGround>
  );
};

export const CreateClubModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CancelButton = () => {
    dispatch(closeModal());
  };
  const RegisterButton = () => {
    navigate('/');
    dispatch(closeModal());
  };
  return (
    <ModalBackGround>
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
          <ButtonBox text="취소할게요" type="modal" onClick={CancelButton} cancel />
          <ButtonBox text="등록할게요" type="modal" onClick={RegisterButton} />
        </div>
      </Section>
    </ModalBackGround>
  );
};
