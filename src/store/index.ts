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
import commentSlice from './slice/commentSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    links: linkReducer,
    crews: crewReducer,
    singup: signUpSlice,
    user: userSlice,
    comment: commentSlice,
    [publishApi.reducerPath]: publishApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [projectController.reducerPath]: projectController.reducer,
    [clubController.reducerPath]: clubController.reducer,
    [crewController.reducerPath]: crewController.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectController.middleware,
      clubController.middleware,
      crewController.middleware,
      signUpApi.middleware,
      publishApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
