import axios from 'axios';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { PREFIX } from './helpers/API.ts';
import { RequirreAuth } from './helpers/RequireAuth.tsx';
import './index.css';
import AuthLayout from './layout/Auth/AuthLayout.tsx';
import Layout from './layout/Layout/Layout.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Error from './pages/Error/Error.tsx';
import { Login } from './pages/Login/Login.tsx';
import { ProductDetail } from './pages/Product/ProductDetail.tsx';
import { Register } from './pages/Register/Register.tsx';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<RequirreAuth>
				<Layout />
			</RequirreAuth>
		),
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<h1>Загрузка...</h1>}>
						<Menu />
					</Suspense>
				)
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <ProductDetail />,
				errorElement: <Error />,
				loader: async ({ params }) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios
									.get(`${PREFIX}/products/${params.id}`)
									.then(({ data }) => resolve(data))
									.catch(reject);
							}, 1000);
						})
					});
					// await new Promise<void>(resolve => setTimeout(resolve, 1000));
					// const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					// return data;
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,

		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
