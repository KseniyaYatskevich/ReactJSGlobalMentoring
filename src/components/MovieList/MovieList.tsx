import { useState, useEffect } from 'react';

import { movies } from './movies';

import { MovieCard } from '../MovieCard/MovieCard';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

import styles from './MovieList.module.scss';

interface MovieListProps {
    selectedGenre: string;
    searchString: string;
    sorting: string;
    setIsEditMovie: (arg0: boolean) => void;
    setDialogOpened: (arg0: boolean) => void;
    setIsDeleteMovie: (arg0: boolean) => void;
    setMovieInfo: (arg0: Movie) => void;
    setShowDescription: (arg0: boolean) => void;
}

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

export const MovieList = ({
    selectedGenre,
    searchString,
    sorting,
    setIsEditMovie,
    setDialogOpened,
    setIsDeleteMovie,
    setMovieInfo,
    setShowDescription
}: MovieListProps) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    const sortMovies = (arr: Movie[], sorting: string) => {
        switch (sorting) {
            case 'vote_average':
                return arr.sort((a, b) => b.vote_average - a.vote_average);
            case 'vote_count':
                return arr.sort((a, b) => b.vote_count - a.vote_count);
            case 'release_date':
            default:
                return arr.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        }
    };

    useEffect(
        () =>
            setFilteredMovies(
                sortMovies(movies, sorting).filter((movie) =>
                    !selectedGenre || selectedGenre === 'All'
                        ? movie.title.toLowerCase().includes(searchString.toLowerCase())
                        : movie.title.toLowerCase().includes(searchString.toLowerCase()) &&
                          movie.genres.includes(selectedGenre)
                )
            ),
        [searchString, selectedGenre, sorting]
    );

    const cardClickHandler = (item: Movie) => {
        setShowDescription(true);
        setMovieInfo(item);
    };

    return (
        <>
            {filteredMovies.length ? (
                <>
                    <div className={styles.searchResults}>
                        <span>{filteredMovies.length}</span> movies found
                    </div>
                    <div className={styles.wrapper}>
                        {filteredMovies.map((movie) => (
                            <MovieCard
                                movie={movie}
                                key={movie.id}
                                setIsEditMovie={setIsEditMovie}
                                setDialogOpened={setDialogOpened}
                                setIsDeleteMovie={setIsDeleteMovie}
                                setMovieInfo={setMovieInfo}
                                setShowDescription={setShowDescription}
                                cardClickHandler={cardClickHandler}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <ErrorBoundary />
            )}
        </>
    );
};
