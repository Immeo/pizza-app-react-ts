import { Link } from 'react-router-dom';

function Cart() {
	return (
		<div>
			<nav>
				<Link to='/'>Menu</Link>
				<Link to='/cart'>Cart</Link>
			</nav>
			<p>cart</p>
		</div>
	);
}

export default Cart;
