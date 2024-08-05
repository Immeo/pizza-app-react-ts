import { Link } from 'react-router-dom';

function Menu() {
	return (
		<>
			<nav>
				<Link to='/'>Menu</Link>
				<Link to='/cart'>Cart</Link>
			</nav>
			menu
		</>
	);
}

export default Menu;
