import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clubController = createApi({
  reducerPath: 'clubController',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/club/',
  }),

  endpoints: (builder) => ({
    getLogos: builder.query({
      query: () => {
        return { url: 'get/logo/all' };
      },
    }),
    getClubDetail: builder.query({
      query: (data) => {
        return {
          url: 'get',
          params: { id: data.clubId },
          headers: {
            'X-AUTH-TOKEN': data.token,
          },
        };
      },
    }),
    createClub: builder.mutation({
      query: ({ accessToken, newClubData }) => ({
        url: 'create',
        method: 'POST',
        body: newClubData,
        headers: {
          'X-AUTH-TOKEN': accessToken,
        },
      }),
    }),
    verifyClub: builder.mutation({
      query: ({ accessToken, clubData }) => ({
        url: 'verify-club',
        method: 'POST',
        body: clubData,
        headers: {
          'X-AUTH-TOKEN': accessToken,
        },
      }),
    }),
    requestJoinClub: builder.mutation({
      query: (data) => ({
        url: 'join-requests',
        method: 'POST',
        headers: {
          'X-AUTH-TOKEN': data.token,
        },
        body: data.requestData,
      }),
    }),
    getMyClub: builder.query({
      query: ({ accessToken }) => ({
        url: 'get/club/my',
        headers: {
          'X-AUTH-TOKEN': accessToken,
        },
      }),
    }),
    getClubList: builder.query({
      query: (page) => {
        return { url: 'list', params: { page, size: 11 } };
      },
    }),
    getPendingUsers: builder.query({
      query: (data) => {
        return {
          url: `join-requests/pending/users/${data.clubId}`,
          headers: {
            'X-AUTH-TOKEN': data.accessToken,
          },
        };
      },
    }),
    acceptCrew: builder.mutation({
      query: (data) => ({
        url: `join-requests/accept/${data.clubId}`,
        method: 'POST',
        params: { addUserEmail: data.email },
        headers: {
          'X-AUTH-TOKEN': data.token,
        },
      }),
    }),
    rejectCrew: builder.mutation({
      query: (data) => ({
        url: `join-requests/reject/${data.clubId}`,
        method: 'DELETE',
        params: { rejectUserEmail: data.email },
        headers: {
          'X-AUTH-TOKEN': data.token,
        },
      }),
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const {
  useGetLogosQuery,
  useGetClubDetailQuery,
  useCreateClubMutation,
  useVerifyClubMutation,
  useGetMyClubQuery,
  useGetClubListQuery,
  useAcceptCrewMutation,
  useGetPendingUsersQuery,
  useRejectCrewMutation,
  useRequestJoinClubMutation,
} = clubController;

export default clubController;
