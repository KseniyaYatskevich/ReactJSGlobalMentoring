import { Search } from '../Search/Search';
import { Logo } from '../Logo/Logo';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Logo />
                <button className={styles.button}>+ Add movie</button>
            </div>
            <Search />
        </div>
    );
};
