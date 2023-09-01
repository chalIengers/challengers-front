import { createSlice } from '@reduxjs/toolkit';

// Crew Slice
type Crew = {
  name: string;
  position: string;
  role: string;
};

type CrewState = {
  crews: Crew[];
};

const initialCrewState: CrewState = {
  crews: [],
};

export const crewSlice = createSlice({
  name: 'crews',
  initialState: initialCrewState,
  reducers: {
    addCrew: (state, action) => {
      state.crews.push(action.payload);
    },
  },
});

export const { addCrew } = crewSlice.actions;

export const selectCrews = (state: CrewState) => state.crews;

export default crewSlice.reducer;
