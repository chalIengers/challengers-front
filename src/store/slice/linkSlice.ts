import { createSlice } from '@reduxjs/toolkit';

// Link Slice
type Link = {
  name: string;
  linkUrl: string;
};

type LinkState = {
  links: Link[];
};

const initialLinkState: LinkState = {
  links: [],
};

export const linkSlice = createSlice({
  name: 'links',
  initialState: initialLinkState,
  reducers: {
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
  },
});

export const { addLink } = linkSlice.actions;

export const selectLinks = (state: LinkState) => state.links;

export default linkSlice.reducer;
