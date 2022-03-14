import { changeValue, decrement, increment } from '../store/ExampleSlice';
import { useTypedDispatch, useTypedSelector } from '../store/Store';

export function Example() {
	const { value } = useTypedSelector(state => state.example);
	const dispatch = useTypedDispatch();

	return (
		<div className='flex flex-col items-center gap-6 py-4 font-mono'>
			<span className='px-6 text-9xl font-bold'>{value}</span>
			<div className='flex flex-row gap-x-2 text-8xl text-white'>
				<button className='bg-red-500 py-4 px-8' onClick={() => dispatch(decrement())} disabled={value <= -69}>
					-
				</button>
				<button className='bg-blue-500 py-4 px-8' onClick={() => dispatch(increment())} disabled={value >= 69}>
					+
				</button>
			</div>
			<div className='flex flex-row gap-x-4 text-lg'>
				<span>-69</span>
				<input
					type='range'
					id='slider'
					min={-69}
					max={69}
					value={value}
					onChange={e => dispatch(changeValue({ newValue: e.target.valueAsNumber }))}
				/>
				<span>69</span>
			</div>
		</div>
	);
}
