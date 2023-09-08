import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/modalSlice';
import projectSlice from './slice/projectSlice';
import publishApi from './controller/commonController';
import linkReducer from './slice/linkSlice';
import crewReducer from './slice/crewSlice';
import signUpSlice from './slice/signUpSlice';
import signUpApi from './controller/signUpController';
import projectController from './controller/projectController';
import clubController from './controller/clubController';
import crewController from './controller/crewController';
import userSlice from './slice/userSlice';
import CreateClubSlice from './slice/CreateClubSlice';
import myPageController from './controller/myPageController';
import commentSlice from './slice/commentSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    links: linkReducer,
    crews: crewReducer,
    singup: signUpSlice,
    user: userSlice,
    createClub: CreateClubSlice,
    comment: commentSlice,
    [publishApi.reducerPath]: publishApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [projectController.reducerPath]: projectController.reducer,
    [clubController.reducerPath]: clubController.reducer,
    [crewController.reducerPath]: crewController.reducer,
    [myPageController.reducerPath]: myPageController.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 직렬화 검사 비활성화
    }).concat(
      projectController.middleware,
      clubController.middleware,
      crewController.middleware,
      signUpApi.middleware,
      publishApi.middleware,
      myPageController.middleware,
    ),
  devTools: process.env.NODE_ENV !== 'production', // 개발 모드에서만 DevTools 활성화
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
