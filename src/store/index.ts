import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import projectController from './projectController';
import clubController from './clubController';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    [projectController.reducerPath]: projectController.reducer,
    [clubController.reducerPath]: clubController.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectController.middleware).concat(clubController.middleware), // API 미들웨어를 추가합니다.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
