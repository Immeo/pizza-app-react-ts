import axios from 'axios';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Headling/Headling';
import Input from '../../components/InputForm/Input';
import MaimButton from '../../components/MainButton/MainButton';
import { PREFIX } from '../../helpers/API';
import styles from './Login.module.css';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};

export function Login() {
	const [error, setError] = useState<string | null>();

	const onSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setError(null);
		const target = event.target as typeof event.target & LoginForm;
		const { email, password } = target;
		console.log(email.value, password.value);
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		// valid email and password a@gmail.com 123
		try {
			const { data } = await axios.post(`${PREFIX}/login`, { email, password });
			console.log(data);
		} catch (e) {
			if (e instanceof axios.AxiosError) {
				console.log(e.message);
				setError(e.response?.data.message);
			}
		}
	};
	return (
		<div className={styles['login']}>
			<Layout>Вход</Layout>
			{error && <div className={styles['error']}>{error}</div>}
			<form action='' className={styles['form']} onSubmit={onSubmit}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input id='email' type='email' name='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input
						id='password'
						type='password'
						name='password'
						placeholder='Пароль'
					/>
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
