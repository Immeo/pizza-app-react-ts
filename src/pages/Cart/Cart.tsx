import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Layout from '../../components/Headling/Headling';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { RootState } from '../../store/store';
import styles from './Cart.module.css';

const DELIVERY_FEE = 169;

function Cart() {
	const [cartProduct, setCartProduct] = useState<Product[]>([]);
	const items = useSelector((state: RootState) => state.cart.items);

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
				<div className={styles['text']}>Итог {items.length}</div>
				<div className={styles['price']}>
					{totalSum + DELIVERY_FEE}&nbsp;<span>₽</span>
				</div>
			</div>
		</>
	);
}

export default Cart;
