import { useState } from 'react';

import { Navigation } from '../Navigation/Navigation';
import { MovieList } from '../MovieList/MovieList';

import styles from './Main.module.scss';

export const Main = () => {
    const [selectedGenre, setSelectedGenre] = useState('');

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <Navigation selectedGenre={selectedGenre} handleToggle={setSelectedGenre} />
                <MovieList selectedGenre={selectedGenre} />
            </div>
        </div>
    );
};
