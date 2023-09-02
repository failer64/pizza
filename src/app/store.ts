import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './mainSlice'
import categoriesReducer from './categoriesSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		mainPage: mainSlice
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch