import { Search } from '../Search/Search';
import { Logo } from '../Logo/Logo';

import styles from './Header.module.scss';

interface HeaderProps {
    searchString: string;
    handleSearch: (arg0: string) => void;
}

export const Header = ({ searchString, handleSearch }: HeaderProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Logo />
                <button className={styles.button}>+ Add movie</button>
            </div>
            <Search searchString={searchString} handleSearch={handleSearch} />
        </div>
    );
};
