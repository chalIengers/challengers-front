import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signData } from '../../store/slice/signUpSlice';
import {
  useCreateUserMutation,
  useRequestUserMutation,
} from '../../store/controller/signUpController';
import { openModal } from '../../store/slice/modalSlice';

const useRegisterHook = (inputCode: string) => {
  const dispatch = useDispatch();
  const data = useSelector(signData);
  const [createUser] = useCreateUserMutation();
  const [requestUser] = useRequestUserMutation();

  const [isTimerActive, setTimerActive] = useState(false);
  useEffect(() => {
    let timer: any;
    if (isTimerActive) {
      timer = setTimeout(() => {
        setTimerActive(false);
      }, 30000); // 30초(30000 밀리초) 타이머 설정
    } else {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [isTimerActive]);

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
      if (response.data.code === 1) {
        dispatch(openModal({ modalType: 'RegisterSuccessModal' }));
      } else if (response.data.code === 0) {
        alert(response.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 인증번호 재전송
  const handleEmailClick = async () => {
    try {
      if (!isTimerActive) {
        setTimerActive(true);
        const retryData = {
          email: data.email,
          password: data.password,
          userName: data.userName,
        };
        console.log(retryData);
        const response = await requestUser(retryData);
        console.log('retryEmail : ', response);
      } else {
        alert('중복된 요청으로 인해 잠시 후에 다시 시도해주세요');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { handleEmailClick, handleClick };
};
export default useRegisterHook;
