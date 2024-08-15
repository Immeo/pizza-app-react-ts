import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Headling/Headling';
import Input from '../../components/InputForm/Input';
import MaimButton from '../../components/MainButton/MainButton';
import styles from './Login.module.css';

export function Login() {
	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<div className={styles['login']}>
			<Layout>Вход</Layout>
			<form action='' className={styles['form']} onSubmit={onSubmit}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input id='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input id='password' type='password' placeholder='Пароль' />
				</div>
				<MaimButton appearence='big'>Вход</MaimButton>
				<div>Нет аккаунта?</div>
				<Link to={'/auth/register'} className={styles['links']}>
					Зарегистрироваться?
				</Link>
			</form>
		</div>
	);
}
