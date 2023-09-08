import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectController = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/project/' }),

  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ size, page, categories, sort, techStack }) => {
        return { url: 'get/all', params: { size, page, categories, sort, techStack } };
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

    getVideo: builder.query({
      query: ({ id }: { id: string | undefined }) => {
        return { url: 'get', params: { id } };
      },
    }),
    createPublish: builder.mutation({
      query: (newProjectData) => {
        return {
          url: 'create',
          method: 'POST',
          body: newProjectData,
          headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJreXIxMTg1QGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzOTA5MTQ4LCJleHAiOjE2OTM5MTI3NDh9.BGckwEATZhkkprF2fcXIU3PcShpKsdORZtFAQMhlQy8`,
          },
        };
      },
    }),
    getTechStacks: builder.query({
      query: () => {
        return { url: 'tech-stacks' };
      },
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const {
  useGetVideosQuery,
  useGetVideosByTopViewQuery,
  useGetVideoQuery,
  useCreatePublishMutation,
  useGetTechStacksQuery,
} = projectController;

export default projectController;
