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
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJreXIxMTg1QGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjk0MDUxNzI1LCJleHAiOjE2OTQwNTUzMjV9.KYCobw32ty0BriQGfXfp7_TKifrJN0T5-d29Cli_z_g`,
          },
        };
      },
    }),
  }),
});

export const { useFileUploadMutation } = publishApi;

export default publishApi;
