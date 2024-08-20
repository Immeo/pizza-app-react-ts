import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import Layout from '../../components/Headling/Headling';
import MaimButton from '../../components/MainButton/MainButton';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { cartActions } from '../../store/cart.slice';
import { AppDispatch, RootState } from '../../store/store';
import styles from './Cart.module.css';

const DELIVERY_FEE = 169;

function Cart() {
	const [cartProduct, setCartProduct] = useState<Product[]>([]);
	const items = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch<AppDispatch>();
	const jwt = useSelector((state: RootState) => state.user.jwt);
	const navigate = useNavigate();

	const totalSum = items
		.map(i => {
			const product = cartProduct.find(p => p.id === i.id);
			if (!product) {
				return 0;
			}
			return i.count * product.price;
		})
		.reduce((acc, i) => (acc += i), 0);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAll = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCartProduct(res);
	};

	const checkout = async () => {
		await axios.post(
			`${PREFIX}/order`,
			{
				product: items
			},
			{
				headers: {
					Authorization: `Bearer ${jwt}`
				}
			}
		);
		dispatch(cartActions.clean());
		navigate('/success');
	};

	useEffect(() => {
		loadAll();
	}, [items]);

	return (
		<>
			<Layout className={styles['headling']}>Корзина</Layout>
			{items.map(i => {
				const product = cartProduct.find(p => p.id === i.id);
				if (!product) {
					return;
				}
				return <CartItem key={product.id} count={i.count} {...product} />;
			})}
			<div className={styles['line']}>
				<div className={styles['text']}>Итог</div>
				<div className={styles['price']}>
					{totalSum}&nbsp;<span>₽</span>
				</div>
			</div>
			<hr className={styles['hr']} />
			<div className={styles['line']}>
				<div className={styles['text']}>Доставка</div>
				<div className={styles['price']}>
					{DELIVERY_FEE}&nbsp;<span>₽</span>{' '}
				</div>
			</div>
			<hr className={styles['hr']} />
			<div className={styles['line']}>
				<div className={styles['text']}>
					Итог <span className={styles['total-count']}>({items.length})</span>
				</div>
				<div className={styles['price']}>
					{totalSum + DELIVERY_FEE}&nbsp;<span>₽</span>
				</div>
			</div>
			<div className={styles['checkout']}>
				<MaimButton appearence='big' onClick={checkout}>
					Оформить заказ
				</MaimButton>
			</div>
		</>
	);
}

export default Cart;
