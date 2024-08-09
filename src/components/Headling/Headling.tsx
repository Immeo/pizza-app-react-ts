import cn from 'classnames';
import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props';

function Layout({ children, className, ...props }: HeadlingProps) {
	return (
		<h1 className={cn(className, styles['h1__styles'])} {...props}>
			{children}
		</h1>
	);
}
export default Layout;
