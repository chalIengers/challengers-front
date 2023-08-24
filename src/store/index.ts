import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import projectApi from './projectApi';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectApi.middleware), // API 미들웨어를 추가합니다.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
