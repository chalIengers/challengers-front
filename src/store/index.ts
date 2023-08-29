import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import projectSlice from './projectSlice';
import signUpSlice from './signUpSlice';
import signUpApi from './signUpApi';
import clubApi from './clubApi';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    project: projectSlice,
    singup: signUpSlice,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [clubApi.reducerPath]: clubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpApi.middleware, clubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
