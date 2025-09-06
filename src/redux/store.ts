import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/counter/bookSlice";
import { bookApi } from "./API/bookApi";
import { authApi } from "./API/authApi";
import { userApi } from "./API/userApi";

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
