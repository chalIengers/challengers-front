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
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJreXIxMTg1QGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzODgyMDc1LCJleHAiOjE2OTM4ODU2NzV9.agNK1Ra_KkrH_A-W6ejBrjHqtAqMaXbGaV6c8Lww3XA`,
          },
        };
      },
    }),
  }),
});

export const { useFileUploadMutation } = publishApi;

export default publishApi;
