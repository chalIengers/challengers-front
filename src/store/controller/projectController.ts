import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectController = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/project/' }),

  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ size, page }) => {
        return { url: 'get/all', params: { size, page } };
      },
    }),
    getVideosInfinity: builder.query({
      query: ({ size, page }) => {
        return { url: 'get/all', params: { size, page } };
      },
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        const existingIds = new Set(currentCache.content.map((item: any) => item.id));
        const uniqueNewItems = newItems.content.filter((item: any) => !existingIds.has(item.id));
        currentCache.content.push(...uniqueNewItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
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
    getVideosByTopViewInfinity: builder.query({
      query: ({ size, page }) => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1을 해줘야 실제 월 값이 나옴
        return {
          url: `get/all/top-viewed/${year}/${month}`,
          params: { size, page },
        };
      },
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        const existingIds = new Set(currentCache.content.map((item: any) => item.id));
        const uniqueNewItems = newItems.content.filter((item: any) => !existingIds.has(item.id));
        currentCache.content.push(...uniqueNewItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getVideo: builder.query({
      query: ({ id }: { id: string | undefined }) => {
        return { url: 'get', params: { id } };
      },
    }),
    createPublish: builder.mutation({
      query: (newProjectData) => {
        const example = {
          belongedClubId: 6,
          imageUrl: '',
          projectCategory: '131',
          projectCrew: [
            {
              name: '2',
              position: '1',
              role: '4',
            },
          ],
          projectDescription: '12',
          projectDetail: 'dasdasdasdas',
          projectLink: [
            {
              linkUrl: 'http://naver.com',
              name: 'naver',
            },
          ],
          projectName: '성공테스트',
          projectPeriod: '222',
          projectStatus: 33,
          projectTechStack: [
            {
              name: 'a',
            },
            {
              name: 'sq',
            },
            {
              name: 'wa',
            },
          ],
        };
        console.log(example);
        console.log(newProjectData);
        return {
          url: 'create',
          method: 'POST',
          body: newProjectData,
          headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJreXIxMTg1QGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzODgyMDc1LCJleHAiOjE2OTM4ODU2NzV9.agNK1Ra_KkrH_A-W6ejBrjHqtAqMaXbGaV6c8Lww3XA`,
          },
        };
      },
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const {
  useGetVideosQuery,
  useGetVideosInfinityQuery,
  useGetVideosByTopViewQuery,
  useGetVideosByTopViewInfinityQuery,
  useGetVideoQuery,
  useCreatePublishMutation,
} = projectController;

export default projectController;
