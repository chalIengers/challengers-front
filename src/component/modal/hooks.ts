import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FieldValues, UseFormWatch } from 'react-hook-form';
import { logout, selectUser } from '../../store/slice/userSlice';
import {
  useChangePasswordMutation,
  useSendCodeMutation,
  useVerifyPasswordQuery,
} from '../../store/controller/myPageController';
import { closeModal } from '../../store/slice/modalSlice';

export function usePasswordChangeHook({ watch }: { watch: UseFormWatch<FieldValues> }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessToken } = useSelector(selectUser);

  const [isSent, setIsSent] = useState(false);
  const [remainingTime, setRemainingTime] = useState(180);
  const [timerId, setTimerId] = useState<any>(null);

  const verifyPassword = useVerifyPasswordQuery({
    password: watch('password'),
    accessToken,
  }).data;

  const [sendCode, { isLoading }] = useSendCodeMutation();
  const [changePassword] = useChangePasswordMutation();

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsSent(false);
    }
  }, [remainingTime]);

  const startTimer = () => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    setTimerId(timer);

    setTimeout(() => {
      clearInterval(timer);
    }, 1000 * 60 * 3);
  };

  const handleSentEmail = async () => {
    if (verifyPassword) {
      try {
        await sendCode({
          accessToken,
          password: watch('password'),
          newPassword: watch('newPassword'),
        });
        setIsSent(true);

        startTimer();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('잘못된 비밀번호입니다.');
    }
  };

  const handleReSend = () => {
    if (remainingTime > 60 * 2.5) {
      alert('중복된 요청으로 인해 잠시 후에 다시 시도해주세요');
    } else {
      clearInterval(timerId);
      setRemainingTime(180);
      handleSentEmail();
    }
  };

  const handleChange = async () => {
    if (verifyPassword) {
      try {
        const { data } = await changePassword({
          accessToken,
          password: watch('password'),
          newPassword: watch('newPassword'),
          code: watch('emailCode'),
        });
        if (!data.success) {
          alert(data.msg);
        }
        if (data.success) {
          alert(data.msg);
          dispatch(closeModal());
          dispatch(logout());
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    isSent,
    remainingTime,
    isLoading,
    handleSentEmail,
    handleReSend,
    handleChange,
  };
}
