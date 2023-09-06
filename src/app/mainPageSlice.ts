import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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
	activeCategory: number
	sortsArr: string[]
	activeSorting: number
}

const initialState: CounterState = {
	items: [],
	categories: [],
	activeCategory: 0,
	sortsArr: ['популярности', 'цене', 'алфавиту'],
	activeSorting: 0
}

export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {
		changeCategory: (state, action: PayloadAction<number>) => {
			state.activeCategory = action.payload;
		},
		changeSorting: (state, action: PayloadAction<number>) => {
			state.activeSorting = action.payload;
		}
	},
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
export const { changeCategory, changeSorting } = mainPageSlice.actions

export default mainPageSlice.reducer