import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

function Menu() {
	return (
		<>
			<div className={styles['head']}>
				<Headling>Menu</Headling>
				<Search placeholder='Enter the dish or composition' />
			</div>
			<div>
				<ProductCard
					id={1}
					image='/examplePizzaImg.png'
					title='Enjoyment'
					rating={5}
					description='Salami, arugula, tomatoes, olives'
					price={5}
				/>
			</div>
		</>
	);
}

export default Menu;
