import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface CommentState {
  email: string;
  name: string;
  comment: string;
}

interface CommentClubState {
  id: number | string | undefined;
  name: string;
  logo: string;
}

interface State {
  commentState: CommentState;
  commentClubState: CommentClubState;
}

const initialState: State = {
  commentState: { email: '', name: '', comment: '' },
  commentClubState: { id: 1, name: '', logo: '' },
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCommentData: (state, action: PayloadAction<CommentState>) => {
      // eslint-disable-next-line no-param-reassign
      state.commentState = { ...state.commentState, ...action.payload };
    },
    setCommentClubData: (state, action: PayloadAction<CommentClubState>) => {
      // eslint-disable-next-line no-param-reassign
      state.commentClubState = { ...state.commentClubState, ...action.payload };
    },
  },
});

export const { setCommentData, setCommentClubData } = commentSlice.actions;

export const commentData = (state: RootState) => state.comment;

export default commentSlice.reducer;
