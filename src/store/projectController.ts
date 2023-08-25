import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectController = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/project/' }),

  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => {
        return { url: 'get/all' };
      },
    }),
    getVideo: builder.query({
      query: ({ id }: { id: string | undefined }) => {
        return { url: 'get', params: { id } };
      },
    }),
    // postChat: builder.mutation({
    //   query: (question) => ({
    //     url: 'chat/askChatGPT',
    //     method: 'POST',
    //     body: question,
    //   }),
    // }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const { useGetVideosQuery, useGetVideoQuery } = projectController;

export default projectController;
