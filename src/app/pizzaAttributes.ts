import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
	types: string[]
	sizes: string[]
}

const initialState: CounterState = {
	types: ['тонкое', 'традиционное'],
	sizes: []
}

export const pizzaAttributesSlice = createSlice({
	name: 'attributes',
	initialState,
	reducers: {

	},
})

// Action creators are generated for each case reducer function
export const { } = pizzaAttributesSlice.actions

export default pizzaAttributesSlice.reducer