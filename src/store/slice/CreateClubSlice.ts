import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface CreateClub {
  clubDescription: string;
  clubForm: string;
  clubName: string;
  logoUrl: string;
}

const initialState: CreateClub = {
  clubDescription: '',
  clubForm: '',
  clubName: '',
  logoUrl: '',
};

const CreateClubSlice = createSlice({
  name: 'createClub',
  initialState,
  reducers: {
    setClubField: (state, action: PayloadAction<{ field: string; clubData: string }>) => {
      const { field, clubData } = action.payload;

      return {
        ...state,
        [field]: clubData,
      };
    },
  },
});

export const { setClubField } = CreateClubSlice.actions;

export const clubData = (state: RootState) => state.createClub;

export default CreateClubSlice.reducer;
