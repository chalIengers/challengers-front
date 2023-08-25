import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const publishApi = createApi({
  reducerPath: 'publishApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),

  endpoints: (builder) => ({
    createPublish: builder.mutation({
      query: (newProjectData) => ({
        url: 'project/create',
        method: 'POST',
        body: newProjectData, // 보내고자 하는 데이터
      }),
    }),
  }),
});

export const { useCreatePublishMutation } = publishApi;

export default publishApi;
