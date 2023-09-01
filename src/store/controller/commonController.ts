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
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJreXIxMTg1QGthbmduYW0uYWMua3IiLCJyb2xlcyI6W10sImlhdCI6MTY5MzEzMDY5NywiZXhwIjoxNjk0MzQwMjk3fQ.qEnTRaMu5_YIxyjvSuCWiMf_5xj_rvfW5PsOFm_An7w`,
          },
        };
      },
    }),
  }),
});

export const { useFileUploadMutation } = publishApi;

export default publishApi;
