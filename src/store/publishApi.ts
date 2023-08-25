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
        };
      },
    }),
    createPublish: builder.mutation({
      query: (newProjectData) => ({
        url: 'project/create',
        method: 'POST',
        body: newProjectData,
      }),
    }),
  }),
});

export const { useFileUploadMutation, useCreatePublishMutation } = publishApi;

export default publishApi;
