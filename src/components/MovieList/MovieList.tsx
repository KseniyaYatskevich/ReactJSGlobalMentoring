import { useState, useEffect } from 'react';

import { movies } from './movies';

import { MovieCard } from '../MovieCard/MovieCard';

import styles from './MovieList.module.scss';

interface MovieListProps {
    selectedGenre: string;
    searchString: string;
}

export const MovieList = ({ selectedGenre, searchString }: MovieListProps) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(
        () =>
            setFilteredMovies(
                movies.filter((movie) =>
                    !selectedGenre || selectedGenre === 'All'
                        ? movie.title.toLowerCase().includes(searchString.toLowerCase())
                        : movie.title.toLowerCase().includes(searchString.toLowerCase()) &&
                          movie.genres.includes(selectedGenre)
                )
            ),
        [searchString, selectedGenre]
    );

    return (
        <>
            <div className={styles.searchResults}>
                <span>{filteredMovies.length}</span> movies found
            </div>
            <div className={styles.wrapper}>
                {filteredMovies.map((movie) => (
                    <MovieCard {...movie} key={movie.id} />
                ))}
            </div>
        </>
    );
};
