import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Layout from '../../components/Headling/Headling';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { RootState } from '../../store/store';
import styles from './Cart.module.css';

function Cart() {
	const [cartProduct, setCartProduct] = useState<Product[]>([]);
	const items = useSelector((state: RootState) => state.cart.items);

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
		</>
	);
}

export default Cart;
