import { useContext } from 'react';

import { Logo } from '../Logo/Logo';
import { MovieImage } from '../MovieImage/MovieImage';

import MovieContext from '../../context/MovieContext';

import Search from '../../asset/images/search.svg';

import styles from './Description.module.scss';

export const Description = () => {
    const getTimeFromMins = (mins: number) => {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return hours + 'h ' + minutes + 'min';
    };

    const { movie, setShowDescription } = useContext(MovieContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Logo />
                <button className={styles.button} onClick={() => setShowDescription(false)}>
                    <Search />
                </button>
            </div>
            {movie && (
                <div className={styles.movieInfo}>
                    <MovieImage path={movie.poster_path} title={movie.title} />
                    <div className={styles.content}>
                        <div className={styles.movieHeader}>
                            <span className={styles.title}>{movie.title}</span>
                            <span className={styles.raiting}>{movie.vote_average}</span>
                        </div>
                        <span className={styles.genres}>{movie.genres.join(', ')}</span>
                        <div className={styles.info}>
                            <p>{new Date(movie.release_date).getFullYear()}</p>
                            <p>{getTimeFromMins(movie.runtime)}</p>
                        </div>
                        <p className={styles.description}>{movie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
