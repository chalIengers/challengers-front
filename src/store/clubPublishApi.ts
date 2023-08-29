import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const clubPublishApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'api/v1' }),
  endpoints: (builder) => ({
    createClub: builder.mutation({
      query: (newClubData) => ({
        url: '/club/create',
        method: 'POST',
        body: newClubData,
      }),
    }),
  }),
});

export const { useCreateClubMutation } = clubPublishApi;

export default clubPublishApi;
