import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import MaimButton from '../../components/MainButton/MainButton';
import styles from './Layout.module.css';

function Layout() {
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
					<NavLink
						to='/'
						className={({ isActive }) => {
							return cn(styles['link'], {
								[styles['active']]: isActive
							});
						}}
					>
						<img src='/menusIcon.svg' alt='Icon menu' />
						Menu
					</NavLink>
					<NavLink
						to='/cart'
						className={({ isActive }) => {
							return cn(styles['link'], {
								[styles['active']]: isActive
							});
						}}
					>
						<img src='/cartIcon.svg' alt='Icon cart' />
						Cart
					</NavLink>
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
