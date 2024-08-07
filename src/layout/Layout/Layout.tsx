import cn from 'classnames';
import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MaimButton from '../../components/MainButton/MainButton';
import styles from './Layout.module.css';

function Layout() {
	const location = useLocation();
	useEffect(() => {
		console.log(location);
	}, [location]);

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img
						className={styles['avatar']}
						src='/avatar.png'
						alt='Avatar user'
					/>
					<div className={styles['name']}>John Doe</div>
					<div className={styles['email']}>john@example.com</div>
				</div>
				<div className={styles['menu']}>
					<Link
						to='/'
						className={cn(styles['link'], {
							[styles['active']]: location.pathname === '/'
						})}
					>
						<img src='/menusIcon.svg' alt='Icon menu' />
						Меню
					</Link>
					<Link to='/cart' className={styles['link']}>
						<img src='/cartIcon.svg' alt='Icon cart' />
						Cart
					</Link>
				</div>
				<MaimButton className={styles['exit']}>
					<img src='/exitIcon.svg' alt='Icon exit' />
					Exit
				</MaimButton>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
