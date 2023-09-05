import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectController = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/project/' }),

  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ size, page, categories, sort }) => {
        return { url: 'get/all', params: { size, page, categories, sort } };
      },
    }),
    // getVideosInfinity: builder.query({
    //   query: ({ size, page }) => {
    //     return { url: 'get/all', params: { size, page } };
    //   },
    //   // Only have one cache entry because the arg always maps to one string
    //   serializeQueryArgs: ({ endpointName }) => {
    //     return endpointName;
    //   },
    //   // Always merge incoming data to the cache entry
    //   merge: (currentCache, newItems) => {
    //     const existingIds = new Set(currentCache.content.map((item: any) => item.id));
    //     const uniqueNewItems = newItems.content.filter((item: any) => !existingIds.has(item.id));
    //     currentCache.content.push(...uniqueNewItems);
    //   },
    //   // Refetch when the page arg changes
    //   forceRefetch({ currentArg, previousArg }) {
    //     return currentArg !== previousArg;
    //   },
    // }),
    getVideosByTopView: builder.query({
      query: ({ size, page }) => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1을 해줘야 실제 월 값이 나옴
        return {
          url: `get/all/top-viewed/${year}/${month}`,
          params: { size, page },
        };
      },
    }),

    getVideo: builder.query({
      query: ({ id }: { id: string | undefined }) => {
        return { url: 'get', params: { id } };
      },
    }),
    createPublish: builder.mutation({
      query: (newProjectData) => ({
        url: 'create',
        method: 'POST',
        body: newProjectData,
      }),
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const {
  useGetVideosQuery,
  useGetVideosByTopViewQuery,
  useGetVideoQuery,
  useCreatePublishMutation,
} = projectController;

export default projectController;
