import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import publishApi from './publishApi';
import linkReducer from './linkSlice';
import crewReducer from './crewSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    links: linkReducer,
    crews: crewReducer,
    [publishApi.reducerPath]: publishApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publishApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
