import { configureStore } from '@reduxjs/toolkit'
import cartItems from './cartSlice'
import mainPageSlice from './mainPageSlice'
import pizzaAttributesSlice from './pizzaAttributes'

export const store = configureStore({
	reducer: {
		cartItems: cartItems,
		mainPage: mainPageSlice,
		attributes: pizzaAttributesSlice
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch