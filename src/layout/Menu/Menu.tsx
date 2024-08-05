import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div>
			<nav>
				<Link to='/'>Menu</Link>
				<Link to='/cart'>Cart</Link>
			</nav>
			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
