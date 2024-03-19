import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./slice/HomeSlice";

const store = configureStore({
  reducer: {
    homeReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
