import { useState } from 'react';

import { Navigation } from '../Navigation/Navigation';
import { MovieList } from '../MovieList/MovieList';

import styles from './Main.module.scss';

interface MainProps {
    searchString: string;
    setIsEditMovie: (arg0: boolean) => void;
    setDialogOpened: (arg0: boolean) => void;
    setIsDeleteMovie: (arg0: boolean) => void;
}

export const Main = ({ searchString, setIsEditMovie, setDialogOpened, setIsDeleteMovie }: MainProps) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sorting, setSortingType] = useState('release_date');

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <Navigation
                    selectedGenre={selectedGenre}
                    sorting={sorting}
                    handleSorting={setSortingType}
                    handleToggle={setSelectedGenre}
                />
                <MovieList
                    selectedGenre={selectedGenre}
                    searchString={searchString}
                    sorting={sorting}
                    setIsEditMovie={setIsEditMovie}
                    setDialogOpened={setDialogOpened}
                    setIsDeleteMovie={setIsDeleteMovie}
                />
            </div>
        </div>
    );
};
