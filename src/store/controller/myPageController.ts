import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myPageController: any = createApi({
  reducerPath: 'myPageController',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/mypage' }),

  endpoints: (builder) => ({
    getInfo: builder.query({
      query: (accessToken) => {
        return { url: 'info', headers: { 'X-AUTH-TOKEN': accessToken } };
      },
    }),
    verifyPassword: builder.query({
      query: ({ accessToken, password }) => {
        return {
          url: 'verify-password',
          headers: { 'X-AUTH-TOKEN': accessToken },
          params: { password },
        };
      },
    }),
    sendCode: builder.mutation({
      query: (data) => {
        return {
          url: 'sendCode',
          method: 'POST',
          headers: { 'X-AUTH-TOKEN': data.accessToken },
          body: { userPw: data.password, changePw: data.newPassword },
        };
      },
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: 'change-Password',
          method: 'POST',
          headers: { 'X-AUTH-TOKEN': data.accessToken },
          body: { userPw: data.password, changePw: data.newPassword, approvalNumber: data.code },
        };
      },
    }),
  }),
});

export const {
  useGetInfoQuery,
  useVerifyPasswordQuery,
  useSendCodeMutation,
  useChangePasswordMutation,
} = myPageController;

export default myPageController;
