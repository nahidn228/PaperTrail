import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    credentials: "include",
  }),

  tagTypes: ["User"],
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation({
      query: ({ email, ...payload }) => ({
        url: `/user/${email}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["User"],
    }),

    getAllUser: builder.query({
      query: ({ page = 1, limit = 10, email = "", role = "" }) => ({
        url: "/user",
        method: "GET",
        params: { page, limit, email, role },
      }),
      providesTags: ["User"],
    }),

    updateUserStatus: builder.mutation({
      query: ({ userId, isActive }) => ({
        url: `/user/status/${userId}`,
        method: "PUT",
        data: { isActive },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserInfoMutation,
  useUpdateUserStatusMutation,
} = userApi;
