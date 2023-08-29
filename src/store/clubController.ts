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
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const { useGetLogosQuery } = clubController;

export default clubController;
