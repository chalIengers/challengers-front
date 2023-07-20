import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
