import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
	{ isValid = true, className, ...props },
	ref
) {
	return (
		<div className={styles['input-wrapper']}>
			<input
				ref={ref}
				className={cn(styles['input'], className, {
					[styles['invalid']]: isValid
				})}
				{...props}
			/>
			<img className={styles['icon']} src='/searchIcon.svg' alt='Search icon' />
		</div>
	);
});

export default Search;
