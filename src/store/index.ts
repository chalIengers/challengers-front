import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import clubPublishApi from './clubPublishApi';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    [clubPublishApi.reducerPath]: clubPublishApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clubPublishApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
