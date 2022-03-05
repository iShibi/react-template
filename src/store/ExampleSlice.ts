import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ExampleStateType {
	value: number;
}

const initialState: ExampleStateType = {
	value: 0,
};

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		changeValue: (state, action: PayloadAction<{ newValue: number }>) => {
			state.value = action.payload.newValue;
		},
	},
});

export const { increment, decrement, changeValue } = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
