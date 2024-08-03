import { Route, Routes } from 'react-router-dom';
import Input from './components/InputForm/Input';
import MaimButton from './components/MainButton/MainButton';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Menu from './pages/Menu/Menu';

function App() {
	return (
		<>
			<header>
				<nav>
					<a href='/'>Menu</a>
					<a href='/cart'>Cart</a>
				</nav>
			</header>
			<Input placeholder='Email' />
			<MaimButton appearence='big'>siign</MaimButton>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</>
	);
}
export default App;
