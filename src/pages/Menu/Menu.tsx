import axios from 'axios';
import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface ';
import styles from './Menu.module.css';

function Menu() {
	const [product, setProduct] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProduct(data);
		} catch (error) {
			console.log(error);
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
				{product.map(item => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						description={item.ingredients.join(', ')}
						image={item.image}
						rating={item.rating}
					/>
				))}
			</div>
		</>
	);
}

export default Menu;
