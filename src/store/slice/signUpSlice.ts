import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SignUpState } from '../../types/globalType'; // 실제 경로에 맞게 수정해야 합니다.
import { RootState } from '..';

const initialState: SignUpState = {
  email: '',
  password: '',
  userName: '',
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      return { ...state, email: action.payload };
    },
    setUserName: (state, action: PayloadAction<string>) => {
      return { ...state, userName: action.payload };
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return { ...state, password: action.payload };
    },
  },
});

export const { setEmail, setUserName, setPassword } = signUpSlice.actions;

export const signData = (state: RootState) => state.singup;

export default signUpSlice.reducer;
