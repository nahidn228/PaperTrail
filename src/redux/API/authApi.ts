import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPi = createApi({
  reducerPath: "authAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://paper-trail-one.vercel.app/api",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["User"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",

        data: userInfo,
      }),
    }),

    changePassword: builder.mutation({
      query: (userPass) => ({
        url: "/auth/changePassword",
        method: "POST",

        data: userPass,
      }),
    }),

    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogOutMutation,
  useUserInfoQuery,
  useChangePasswordMutation,
} = authAPi;
