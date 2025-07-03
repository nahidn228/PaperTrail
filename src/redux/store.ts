import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/counter/bookSlice";

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
