import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clubController = createApi({
  reducerPath: 'clubController',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/club/' }),

  endpoints: (builder) => ({
    getLogos: builder.query({
      query: () => {
        return { url: 'get/logo/all' };
      },
    }),
    createClub: builder.mutation({
      query: (newClubData) => ({
        url: 'create',
        method: 'POST',
        body: newClubData,
      }),
    }),
    getPendingUsers: builder.query({
      query: (clubId: string | undefined) => `join-requests/pending/users/${clubId}`,
    }),
    acceptCrew: builder.mutation({
      query: (data) => ({
        url: `accept/join-requests/${data.clubId}?addUserEmail=${data.email}`,
        method: 'POST',
      }),
    }),
    rejectCrew: builder.mutation({
      query: (data) => ({
        url: `reject/join-requests/${data.clubId}?rejectUserEmail=${data.email}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const {
  useGetLogosQuery,
  useCreateClubMutation,
  useAcceptCrewMutation,
  useGetPendingUsersQuery,
  useRejectCrewMutation,
} = clubController;

export default clubController;
