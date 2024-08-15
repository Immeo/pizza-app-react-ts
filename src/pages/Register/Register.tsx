import { Link } from 'react-router-dom';
import Layout from '../../components/Headling/Headling';
import Input from '../../components/InputForm/Input';
import MaimButton from '../../components/MainButton/MainButton';
import styles from './Register.module.css';

export function Register() {
	return (
		<div className={styles['login']}>
			<Layout>Вход</Layout>
			<form action='' className={styles['form']}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input id='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input id='password' type='password' placeholder='Пароль' />
				</div>
				<MaimButton appearence='big'>Вход</MaimButton>
				<div className={styles['field']}>Нет аккаунта?</div>
				<Link to={'/auth/register'}>Зарегистрироваться?</Link>
			</form>
		</div>
	);
}
