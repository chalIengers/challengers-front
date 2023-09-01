import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../../store/signUpApi';
import { setCookie } from '../../store/cookie';
import { setUser } from '../../store/userSlice';

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
