import { configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { exampleReducer } from './ExampleSlice';

export const store = configureStore({
	reducer: {
		example: exampleReducer,
	},
});

export type RootStateType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<StoreDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
