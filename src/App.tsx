import { Example } from './components/Example';
import { Footer } from './components/Footer';

export function App() {
	return (
		<div className='flex min-h-screen flex-col justify-between'>
			<main>
				<Example />
			</main>
			<footer className='flex items-center justify-center gap-x-10 border-t border-gray-900 border-opacity-5 p-4 text-white'>
				<Footer />
			</footer>
		</div>
	);
}
