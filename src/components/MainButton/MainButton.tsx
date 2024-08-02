import cn from 'classnames';
import styles from './MainButton.module.css';
import { IMainButton } from './MainButton.props';

function MaimButton({
	children,
	className,
	appearence = 'small',
	...props
}: IMainButton) {
	return (
		<button
			className={cn(styles['button'], styles['accent'], className, {
				[styles['small']]: appearence == 'small',
				[styles['big']]: appearence == 'big'
			})}
			{...props}
		>
			{children}
		</button>
	);
}

export default MaimButton;
