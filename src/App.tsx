import { useEffect, useState } from 'react';
import MaimButton from './components/MainButton/MainButton';

function App() {
	const [counter, setCounter] = useState<number>(0);
	const increment = () => {
		setCounter(prev => prev + 1);
	};
	useEffect(() => {
		// increment();
		console.log('counter', counter);
	}, [counter]);

	return (
		<>
			<MaimButton onClick={() => increment()}>Button</MaimButton>
			<div>{counter}</div>
		</>
	);
}
export default App;
