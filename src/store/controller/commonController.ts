import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const publishApi = createApi({
  reducerPath: 'publishApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),

  endpoints: (builder) => ({
    fileUpload: builder.mutation({
      query: (fileData) => {
        const formData = new FormData();
        formData.append('file', fileData);
        return {
          url: 'file/upload',
          method: 'POST',
          body: formData,
          headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJreXIxMTg1QGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzOTA5MTQ4LCJleHAiOjE2OTM5MTI3NDh9.BGckwEATZhkkprF2fcXIU3PcShpKsdORZtFAQMhlQy8`,
          },
        };
      },
    }),
  }),
});

export const { useFileUploadMutation } = publishApi;

export default publishApi;
