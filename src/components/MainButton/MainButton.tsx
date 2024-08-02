import styles from './MainButton.module.css';
import { IMainButton } from './MainButton.props';

function MaimButton({ children, className, ...props }: IMainButton) {
	return (
		<button
			className={`${styles.button} ${styles.accent} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default MaimButton;
