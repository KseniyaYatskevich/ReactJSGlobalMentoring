import { useState, useContext } from 'react';

import { Navigation } from '../Navigation/Navigation';
import { MovieList } from '../MovieList/MovieList';

import MovieContext from '../../context/MovieContext';

import styles from './Main.module.scss';

interface Movie {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}
interface MainProps {
    searchString: string;
    setIsEditMovie: (arg0: boolean) => void;
    setDialogOpened: (arg0: boolean) => void;
    setIsDeleteMovie: (arg0: boolean) => void;
    setMovieInfo: (arg0: Movie) => void;
}

export const Main = ({ searchString, setIsEditMovie, setDialogOpened, setIsDeleteMovie, setMovieInfo }: MainProps) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sorting, setSortingType] = useState('release_date');

    // const [movie, setMovieInfo] = useState();

    const { setShowDescription } = useContext(MovieContext);

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
                    setMovieInfo={setMovieInfo}
                    setShowDescription={setShowDescription}
                />
            </div>
        </div>
    );
};
