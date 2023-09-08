import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { removeCookie } from '../cookie';

type InitialState = {
  accessToken: string | null;
};

const initialState: InitialState = {
  accessToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      const { accessToken } = actions.payload;

      return { ...state, accessToken };
    },
    logout: () => {
      removeCookie('refreshToken');
      return { user: '', accessToken: null };
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state: RootState): InitialState => state.user;

export default userSlice.reducer;
