import { useContext } from 'react';
import { Search } from '../Search/Search';
import { Logo } from '../Logo/Logo';

import styles from './Header.module.scss';
import { Description } from '../Description/Description';
import MovieContext from '../../context/MovieContext';

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

    const { showDescription } = useContext(MovieContext);

    return (
        <div className={styles.wrapper}>
            {showDescription ? (
                <Description />
            ) : (
                <div className={styles.header}>
                    <div className={styles.content}>
                        <Logo />
                        <button className={styles.button} onClick={handleAddToCart}>
                            + Add movie
                        </button>
                    </div>
                    <Search searchString={searchString} handleSearch={handleSearch} />
                </div>
            )}
        </div>
    );
};
