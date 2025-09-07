/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (body) => ({
        url: "/create-book",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/edit-book/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    // getAllBook: builder.query({
    //   query: () => "/books",
    //   providesTags: ["books"],
    // }),

    getAllBook: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: "/books",
        params: { page, limit },
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),

    // Borrow API

    borrowAddBook: builder.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books", "borrow"],
    }),

    borrowGetAllBook: builder.query({
      query: () => "/borrow-summary",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowAddBookMutation,
  useBorrowGetAllBookQuery,
} = bookApi;
