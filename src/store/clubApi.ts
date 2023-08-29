import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const clubApi: any = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-AUTH-TOKEN',
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWNoYW4yQGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzMzA4Njg0LCJleHAiOjE2OTMzMTIyODR9.jhaUuYREuU5p15Fd21aglpC7C-krpstqMtao_WMz9cc',
      );
      return headers;
    },
  }), // API의 베이스 URL, 토큰 설정
  endpoints: (builder) => ({
    getPendingUsers: builder.query({
      query: (clubId: string) => `/club/join-requests/pending/users/${clubId}`,
    }),
    acceptCrew: builder.mutation({
      query: (data) => ({
        url: `club/accept/join-requests/${data.clubId}?addUserEmail=${data.email}`,
        method: 'POST',
      }),
    }),
    rejectCrew: builder.mutation({
      query: (data) => ({
        url: `club/reject/join-requests/${data.clubId}?rejectUserEmail=${data.email}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetPendingUsersQuery, useAcceptCrewMutation, useRejectCrewMutation } = clubApi;
export default clubApi;
