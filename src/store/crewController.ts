import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const crewController = createApi({
  reducerPath: 'crewControllerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/project-crews/' }),

  endpoints: (builder) => ({
    getCrew: builder.query({
      query: ({ id }: { id: string | undefined }) => {
        return { url: `position/${id}` };
      },
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const { useGetCrewQuery } = crewController;

export default crewController;
