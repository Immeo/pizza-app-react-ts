import axios from 'axios';
import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import { MenuList } from './MenuList/MenuList';

function Menu() {
	const [product, setProduct] = useState<Product[]>([]);
	const [isLoading, setIisLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const getMenu = async () => {
		try {
			setIisLoading(true);
			await new Promise(resolve => setTimeout(resolve, 2000));
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProduct(data);
			setIisLoading(false);
		} catch (e) {
			console.log(e);
			if (e instanceof Error) {
				setError(e.message);
			}
			setIisLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={styles['head']}>
				<Headling>Menu</Headling>
				<Search placeholder='Enter the dish or composition' />
			</div>
			<div>
				{error && <h2>{error}</h2>}
				{!isLoading && <MenuList products={product} />}
			</div>
			{isLoading && <h2>Загрузка...</h2>}
		</>
	);
}

export default Menu;
