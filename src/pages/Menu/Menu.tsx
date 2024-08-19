import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
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
	const [searchValue, setSearchValue] = useState<string>('');

	useEffect(() => {
		getMenu(searchValue);
	}, [searchValue]);

	const getMenu = async (name?: string) => {
		try {
			setIisLoading(true);
			await new Promise(resolve => setTimeout(resolve, 2000));
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
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

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search
					placeholder='Введите блюдо или состав'
					onChange={handleChange}
					value={searchValue}
				/>
			</div>
			<div>
				{error && <h2>{error}</h2>}
				{!isLoading && product.length > 0 && <MenuList products={product} />}
			</div>
			{isLoading && <h2>Загрузка...</h2>}
			{!isLoading && product.length === 0 && <h2>Ничего не найдено</h2>}
		</>
	);
}

export default Menu;
