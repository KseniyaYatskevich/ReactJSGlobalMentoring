import { movies } from './movies';

import { MovieCard } from '../MovieCard/MovieCard';

import styles from './MovieList.module.scss';

export const MovieList = () => {
    return (
        <div className={styles.wrapper}>
            {movies.map((movie) => (
                <MovieCard {...movie} key={movie.id} />
            ))}
        </div>
    );
};
