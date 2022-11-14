import { Search } from '../Search/Search';
import { Logo } from '../Logo/Logo';

import styles from './Header.module.scss';

interface HeaderProps {
    searchString: string;
    handleSearch: (arg0: string) => void;
    setDialogOpened: (arg0: boolean) => void;
    setIsAddMovie: (arg0: boolean) => void;
}

export const Header = ({ searchString, handleSearch, setDialogOpened, setIsAddMovie }: HeaderProps) => {
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setDialogOpened(true);
        setIsAddMovie(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Logo />
                <button className={styles.button} onClick={handleAddToCart}>
                    + Add movie
                </button>
            </div>
            <Search searchString={searchString} handleSearch={handleSearch} />
        </div>
    );
};
