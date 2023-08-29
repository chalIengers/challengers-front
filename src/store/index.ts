import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import projectController from './projectController';
import clubController from './clubController';
import crewController from './crewController';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    [projectController.reducerPath]: projectController.reducer,
    [clubController.reducerPath]: clubController.reducer,
    [crewController.reducerPath]: crewController.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(projectController.middleware)
      .concat(clubController.middleware)
      .concat(crewController.middleware), // API 미들웨어를 추가합니다.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
