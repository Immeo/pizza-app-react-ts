import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Input from './components/InputForm/Input';
import MaimButton from './components/MainButton/MainButton';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Menu from './pages/Menu/Menu';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu />
	},
	{
		path: '/cart',
		element: <Cart />
	},
	{
		path: '*',
		element: <Error />
	}
]);

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
			<RouterProvider router={router} />
		</>
	);
}
export default App;
