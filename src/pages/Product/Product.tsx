import { useLoaderData, useParams } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';

function Product() {
	const { id } = useParams();
	const data = useLoaderData() as Product;

	return (
		<div>
			<h1>Product {id}</h1>
			<p>{data.name}</p>
		</div>
	);
}
export default Product;
