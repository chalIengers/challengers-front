import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm, UseFormWatch } from 'react-hook-form';
import {
  useLoginUserMutation,
  useRequestUserMutation,
} from '../../store/controller/signUpController';
import { setCookie } from '../../store/cookie';
import { setUser } from '../../store/slice/userSlice';
import { setEmail, setPassword, setUserName } from '../../store/slice/signUpSlice';
import { openModal } from '../../store/slice/modalSlice';

const useLoginLogic = () => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requestUser, { isLoading }] = useLoginUserMutation();

  const submitLogin: SubmitHandler<FieldValues> = async (inputData) => {
    try {
      const { accessToken, refreshToken } = await requestUser(inputData).unwrap('data');
      if (refreshToken) {
        setCookie('refreshToken', refreshToken, {
          path: '/',
          expires: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        });
      }
      dispatch(setUser({ accessToken }));
      navigate('/');
    } catch (e) {
      alert('로그인 실패');
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(submitLogin),
    isLoading,
  };
};

export default useLoginLogic;

export const useSignUpLogic = ({ watch }: { watch: UseFormWatch<FieldValues> }) => {
  const dispatch = useDispatch();
  const [requestUser, { isLoading }] = useRequestUserMutation();

  const handleSubmitData = async () => {
    try {
      const signUpData = {
        email: watch('email'),
        password: watch('pw'),
        userName: watch('name'),
      };
      dispatch(setEmail(watch('email')));
      dispatch(setUserName(watch('name')));
      dispatch(setPassword(watch('pw')));
      console.log(signUpData);
      // request-sign-up post 요청
      const response = await requestUser(signUpData);
      if (response.data.success) {
        // 이메일 인증코드 모달창
        console.log(response.data);
        dispatch(openModal({ modalType: 'RegisterModal' }));
      } else {
        alert(response.data.msg);
      }
      console.log('request-sign-up response:', response);
    } catch (err) {
      console.log(err);
    }
  };

  return { isLoading, handleSubmitData };
};
