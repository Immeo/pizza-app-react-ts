import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './MenuList.module.css';
import { MenuListProps } from './MenuList.probs';

export function MenuList({ products }: MenuListProps) {
	return (
		<div className={styles['wrapper']}>
			{products.map(item => (
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
	);
}
