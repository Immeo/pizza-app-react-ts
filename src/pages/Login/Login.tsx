import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/InputForm/Input';
import MaimButton from '../../components/MainButton/MainButton';
import { PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';
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
	// если данные верные и токен не просрочен то перенапряем пользовителя
	const navigate = useNavigate();

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password
			});
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};

	return (
		<div className={styles['login']}>
			<Headling>Вход</Headling>
			{error && <div className={styles['error']}>{error}</div>}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input id='email' name='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input
						id='password'
						name='password'
						type='password'
						placeholder='Пароль'
					/>
				</div>
				<MaimButton appearence='big'>Вход</MaimButton>
			</form>
			<div className={styles['links']}>
				<div>Нет акканута?</div>
				<Link to='/auth/register'>Зарегистрироваться</Link>
			</div>
		</div>
	);
}
