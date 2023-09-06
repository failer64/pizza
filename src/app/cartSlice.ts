import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export type ItemsType = {
	imageUrl: string
	title: string
	sizes: number[]
	price: number
	activeType: number
	activeSize: number
}

export interface CounterState {
	items: ItemsType[]
}

const initialState: CounterState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ItemsType>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes

			state.items.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<ItemsType>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes

			const newArr = [...state.items];
			const reversedArr = newArr.reverse();

			const index = reversedArr.findIndex(el =>
				el.title === action.payload.title
				&& el.activeSize === action.payload.activeSize
				&& el.activeType === action.payload.activeType)

			if (index > -1) state.items = [...reversedArr.slice(0, index), ...reversedArr.slice(index + 1)].reverse();



		},
		removeItems: (state, action: PayloadAction<ItemsType>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes

			state.items = state.items.filter(item =>
				item.title !== action.payload.title
				|| item.activeSize !== action.payload.activeSize
				|| item.activeType !== action.payload.activeType
			);


		},
		clearItems: (state) => {
			state.items = [];
		}
	},
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, removeItems, clearItems } = cartSlice.actions

export default cartSlice.reducer