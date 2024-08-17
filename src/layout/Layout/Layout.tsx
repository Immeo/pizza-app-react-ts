import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import MaimButton from '../../components/MainButton/MainButton';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';
import styles from './Layout.module.css';

function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

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
						Меню
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
						Корзина
					</NavLink>
				</div>
				<MaimButton className={styles['exit']} onClick={logout}>
					<img src='/exitIcon.svg' alt='Icon exit' />
					Выход
				</MaimButton>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
