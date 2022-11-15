import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Logo />
        </div>
    );
};
