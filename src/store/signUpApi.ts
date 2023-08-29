import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signUpApi: any = createApi({
  reducerPath: 'signUpApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),

  endpoints: (builder) => ({
    getEmail: builder.query({
      query: ({ account }: { account: string | undefined }) => {
        return { url: `verify/account/?account=${account}` };
      },
    }),
    requestUser: builder.mutation({
      query: (data) => ({
        url: 'request-sign-up',
        method: 'POST',
        body: data, // 보내고자 하는 데이터
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: 'sign-up',
        method: 'POST',
        body: data, // 보내고자 하는 데이터
      }),
    }),
  }),
});

export const { useGetEmailQuery, useRequestUserMutation, useCreateUserMutation } = signUpApi;

export default signUpApi;
