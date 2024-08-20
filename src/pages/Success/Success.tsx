import { useNavigate } from 'react-router-dom';
import MaimButton from '../../components/MainButton/MainButton';
import styles from './Success.module.css';

export function Success() {
	const navigate = useNavigate();
	return (
		<div className={styles['success']}>
			<img src='/pizza.png' alt='Изображение пиццы' />
			<div className={styles['text']}>Ваш заказ успешно оформлен!</div>
			<MaimButton appearence='big' onClick={() => navigate('/')}>
				Сделать новый
			</MaimButton>
		</div>
	);
}
