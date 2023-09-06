import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PizzasType } from '../components/Main'
import { appAPI } from '../api/api';


export const fetchCategories = createAsyncThunk<string[]>(
	'categories/fetchCategories',
	async () => {
		const data = await appAPI.getCatogories();
		return data;
	}
)

export const fetchItems = createAsyncThunk<PizzasType[]>(
	'categories/fetchItems',
	async () => {
		const data = await appAPI.getItems();
		return data;
	}
)

export interface CounterState {
	items: PizzasType[]
	categories: string[]
}

const initialState: CounterState = {
	items: [],
	categories: [],
}

export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.categories = action.payload;
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.items = action.payload;
			})
	},
})

// Action creators are generated for each case reducer function
export const { } = mainPageSlice.actions

export default mainPageSlice.reducer