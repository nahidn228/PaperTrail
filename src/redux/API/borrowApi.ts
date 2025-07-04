import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["borrow"],
  endpoints: (builder) => ({
    addBorrow: builder.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["borrow"],
    }),

    getAllBorrow: builder.query({
      query: () => "/borrow-summary",
      providesTags: ["borrow"],
    }),
  }),
});

export const { useAddBorrowMutation, useGetAllBorrowQuery } = borrowApi;
