import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type Link = {
  name: string;
  linkUrl: string;
};

type LinkState = {
  links: Link[];
};

const initialState: LinkState = {
  links: [],
};

export const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
  },
});

export const { addLink } = linkSlice.actions;

export const selectLinks = (state: RootState) => state.links.links; // 링크 배열에 접근하는 셀렉터

export default linkSlice.reducer;
