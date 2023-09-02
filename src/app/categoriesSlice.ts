import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appAPI } from '../api/api'


export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const data = await appAPI.catogories();
		return data;
	}
)

export interface CategoriesState {
	categories: string[]
}

const initialState: CategoriesState = {
	categories: [],
}

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			// Add user to the state array
			state.categories = action.payload;
		})
	},
})

// Action creators are generated for each case reducer function
export const { } = categoriesSlice.actions

export default categoriesSlice.reducer