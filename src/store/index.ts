import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import publishApi from './commonApi';
import linkReducer from './linkSlice';
import crewReducer from './crewSlice';
import signUpSlice from './signUpSlice';
import signUpApi from './signUpApi';
import projectController from './projectController';
import clubController from './clubController';
import crewController from './crewController';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    links: linkReducer,
    crews: crewReducer,
    [publishApi.reducerPath]: publishApi.reducer,
    singup: signUpSlice,
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
