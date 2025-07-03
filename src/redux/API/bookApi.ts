import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookAPi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
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
    getAllBook: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
  }),
});

const { useAddBookMutation, useGetAllBookQuery } = bookAPi;
