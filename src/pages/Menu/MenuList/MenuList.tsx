import ProductCard from '../../../components/ProductCard/ProductCard';
import { MenuListProps } from './MenuList.probs';

export function MenuList({ products }: MenuListProps) {
	return products.map(item => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			description={item.ingredients.join(', ')}
			image={item.image}
			rating={item.rating}
		/>
	));
}
