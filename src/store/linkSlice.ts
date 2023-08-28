import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

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

export const selectLinks = (state: RootState) => state.links.links;

type Crew = {
  name: string;
  position: string;
  role: string;
};

type CrewState = {
  Crews: Crew[];
};

const initialCrewState: CrewState = {
  Crews: [],
};

export const crewSlice = createSlice({
  name: 'crews',
  initialState: initialCrewState,
  reducers: {
    addCrew: (state, action) => {
      state.Crews.push(action.payload);
    },
  },
});
export const { addCrew } = crewSlice.actions;

const rootReducer = combineReducers({
  links: linkSlice.reducer,
  crews: crewSlice.reducer,
});

export default rootReducer;
