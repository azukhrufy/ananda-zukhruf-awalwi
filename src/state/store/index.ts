import { configureStore } from '@reduxjs/toolkit'
import searchUserData from '../SearchReducer';

export const store = configureStore({
  reducer: {
    searchUser: searchUserData,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
